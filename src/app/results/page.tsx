'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Brain,
  TrendingUp,
  Award,
  Download,
  Share2,
  FileJson,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Target,
  Calendar
} from 'lucide-react';
import { questions, QUIZ_AREAS, calculateMaturityAge, getMaturityLevel } from '@/lib/quiz-data';
import { getProgress, clearProgress, saveResult, getResults, exportAnswersJSON, QuizResult } from '@/lib/storage';
import { generatePDF } from '@/lib/mindmap';
import { ThemeToggle } from '@/components/theme-toggle';

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const [mounted, setMounted] = useState(false);
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Primeiro, verificar se já existe um resultado salvo (último resultado)
    const allResults = getResults();
    if (allResults.length > 0) {
      // Pegar o último resultado
      const lastResult = allResults[allResults.length - 1];
      setResult(lastResult);
      setHistory(allResults);
      return;
    }

    // Se não existe resultado, calcular a partir do progresso
    const progress = getProgress();
    if (!progress || !progress.userName || !progress.userAge) {
      router.push('/quiz');
      return;
    }

    // Verificar se todas as perguntas foram respondidas
    const answeredCount = Object.keys(progress.answers).length;
    if (answeredCount < questions.length) {
      router.push('/quiz');
      return;
    }

    // Calcular pontuação por área
    const areaScores = {
      emocional: 0,
      social: 0,
      profissional: 0,
      decisao: 0,
      autoconsciencia: 0
    };

    let totalScore = 0;

    questions.forEach((q) => {
      const answer = progress.answers[q.id];
      if (answer) {
        areaScores[q.area] += answer;
        totalScore += answer;
      }
    });

    const maturityAge = calculateMaturityAge(totalScore, progress.userAge);

    const newResult: QuizResult = {
      id: Date.now().toString(),
      userName: progress.userName,
      userAge: progress.userAge,
      completedAt: new Date().toISOString(),
      totalScore,
      maturityAge,
      areaScores,
      answers: progress.answers
    };

    // Salvar resultado ANTES de limpar progresso
    saveResult(newResult);
    setResult(newResult);
    
    // Limpar progresso apenas após salvar resultado
    clearProgress();

    // Carregar histórico atualizado
    const updatedResults = getResults();
    setHistory(updatedResults);
  }, [router]);

  const handleDownloadPDF = async () => {
    if (!result) return;
    
    setIsGeneratingPDF(true);
    try {
      await generatePDF(result);
      // Mostrar mensagem de sucesso
      alert('✅ PDF gerado com sucesso! Verifique seus downloads.');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('❌ Erro ao gerar PDF. Por favor, tente novamente.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleExportJSON = () => {
    if (!result) return;
    exportAnswersJSON(result);
  };

  const handleShare = async () => {
    if (!result) return;
    
    const shareText = `Descobri minha idade de maturidade: ${result.maturityAge} anos! Faça você também o Quiz de Maturidade.`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Quiz de Maturidade',
          text: shareText,
          url: window.location.origin
        });
      } catch (error) {
        console.log('Compartilhamento cancelado');
      }
    } else {
      // Fallback: copiar para clipboard
      navigator.clipboard.writeText(`${shareText} ${window.location.origin}`);
      alert('Link copiado para a área de transferência!');
    }
  };

  if (!mounted || !result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-purple-700 dark:text-purple-300 font-semibold">Calculando seus resultados...</p>
        </div>
      </div>
    );
  }

  const maturityLevel = getMaturityLevel(result.totalScore);
  const areas = Object.keys(result.areaScores) as Array<keyof typeof result.areaScores>;
  
  // Identificar pontos fortes e fracos
  const sortedAreas = areas.sort((a, b) => result.areaScores[b] - result.areaScores[a]);
  const strongestArea = sortedAreas[0];
  const weakestArea = sortedAreas[sortedAreas.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-b-2 border-purple-200 dark:border-purple-700/50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Resultado Principal */}
        <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 dark:from-purple-900 dark:via-pink-900 dark:to-orange-900 rounded-3xl p-8 md:p-12 text-center mb-8 shadow-2xl">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Brain className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Parabéns, {result.userName}!
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            Você completou o Quiz de Maturidade
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Sua Idade Real</p>
              <p className="text-4xl font-bold text-white">{result.userAge} anos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <p className="text-white/70 text-sm mb-2">Idade de Maturidade</p>
              <p className="text-4xl font-bold text-white">{result.maturityAge} anos</p>
            </div>
          </div>
        </div>

        {/* Nível de Maturidade */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 mb-8 shadow-xl border-2 border-purple-200 dark:border-purple-700/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${maturityLevel.color}`}>
                {maturityLevel.level}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pontuação: {result.totalScore}/160 ({((result.totalScore / 160) * 100).toFixed(0)}%)
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {maturityLevel.description}
          </p>
        </div>

        {/* Pontuação por Área */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 mb-8 shadow-xl border-2 border-purple-200 dark:border-purple-700/50">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            Pontuação por Área
          </h2>

          <div className="space-y-6">
            {areas.map((area) => {
              const score = result.areaScores[area];
              const maxScore = 32; // 8 perguntas * 4 pontos
              const percentage = (score / maxScore) * 100;
              
              return (
                <div key={area}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800 dark:text-white">
                      {QUIZ_AREAS[area]}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {score}/{maxScore} ({percentage.toFixed(0)}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        percentage >= 70
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                          : percentage >= 50
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-gradient-to-r from-orange-500 to-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pontos Fortes e Fracos */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Pontos Fortes */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border-2 border-green-200 dark:border-green-700/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Área Forte
              </h3>
            </div>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
              {QUIZ_AREAS[strongestArea]}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pontuação: {result.areaScores[strongestArea]}/32 ({((result.areaScores[strongestArea] / 32) * 100).toFixed(0)}%)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta é sua área de maior destaque. Continue desenvolvendo e use como referência para as demais áreas.
            </p>
          </div>

          {/* Pontos Fracos */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-3xl p-8 border-2 border-orange-200 dark:border-orange-700/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Área para Desenvolver
              </h3>
            </div>
            <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
              {QUIZ_AREAS[weakestArea]}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pontuação: {result.areaScores[weakestArea]}/32 ({((result.areaScores[weakestArea] / 32) * 100).toFixed(0)}%)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Esta área tem grande potencial de crescimento. Foque nela nos próximos 30 dias para resultados significativos.
            </p>
          </div>
        </div>

        {/* Plano de Ação */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 mb-8 shadow-xl border-2 border-purple-200 dark:border-purple-700/50">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
            <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            Plano de Ação - 30 Dias
          </h2>

          <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 rounded-2xl p-6 mb-6 border border-purple-200 dark:border-purple-700/50">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">
              Foco: {QUIZ_AREAS[weakestArea]}
            </h3>
            <div className="space-y-3">
              {[
                'Pratique diariamente exercícios específicos desta área',
                'Busque feedback de pessoas próximas sobre seu progresso',
                'Leia pelo menos um artigo ou livro relacionado ao tema',
                'Estabeleça metas semanais mensuráveis de melhoria'
              ].map((action, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{action}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            💡 Dica: Refaça o quiz em 30 dias para acompanhar sua evolução!
          </p>
        </div>

        {/* Histórico de Evolução */}
        {history.length > 1 && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 mb-8 shadow-xl border-2 border-purple-200 dark:border-purple-700/50">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              Histórico de Evolução
            </h2>

            <div className="space-y-4">
              {history.slice(-5).reverse().map((h, index) => {
                const prevResult = index < history.length - 1 ? history[history.length - index - 2] : null;
                const diff = prevResult ? h.maturityAge - prevResult.maturityAge : 0;
                
                return (
                  <div key={h.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 rounded-xl border border-purple-200 dark:border-purple-700/50">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {new Date(h.completedAt).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Pontuação: {h.totalScore}/160
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {h.maturityAge} anos
                      </p>
                      {prevResult && diff !== 0 && (
                        <p className={`text-sm font-semibold ${
                          diff > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                        }`}>
                          {diff > 0 ? '↑' : '↓'} {Math.abs(diff)} anos
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}\n            </div>
          </div>
        )}

        {/* Ações */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className={`w-5 h-5 ${isGeneratingPDF ? 'animate-bounce' : ''}`} />
            {isGeneratingPDF ? 'Gerando...' : 'Baixar PDF'}
          </button>

          <button
            onClick={handleShare}
            className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Share2 className="w-5 h-5" />
            Compartilhar
          </button>

          <button
            onClick={handleExportJSON}
            className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <FileJson className="w-5 h-5" />
            Exportar JSON
          </button>

          <button
            onClick={() => {
              clearProgress();
              router.push('/quiz');
            }}
            className="flex items-center justify-center gap-3 p-4 bg-white dark:bg-gray-700 border-2 border-purple-600 text-purple-700 dark:text-purple-300 font-semibold rounded-xl hover:bg-purple-50 dark:hover:bg-gray-600 transition-all shadow-md"
          >
            <Brain className="w-5 h-5" />
            Refazer Quiz
          </button>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 dark:from-purple-900 dark:via-pink-900 dark:to-orange-900 rounded-3xl p-8 md:p-10 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Continue Sua Jornada de Desenvolvimento
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Compartilhe seus resultados com amigos e convide-os a descobrir sua maturidade também!
          </p>
          <button
            onClick={handleShare}
            className="px-8 py-4 bg-white hover:bg-gray-100 text-purple-700 font-bold rounded-xl transition-all shadow-xl hover:scale-105"
          >
            Compartilhar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
