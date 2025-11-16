'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  X, 
  PartyPopper, 
  Brain,
  Target,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { questions, QUIZ_AREAS } from '@/lib/quiz-data';
import { saveProgress, getProgress, clearProgress } from '@/lib/storage';
import { ThemeToggle } from '@/components/theme-toggle';
import { PaymentModal } from '@/components/payment-modal';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState<number | ''>('');
  const [showIntro, setShowIntro] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Carregar progresso salvo
    const progress = getProgress();
    if (progress) {
      setCurrentQuestion(progress.currentQuestion);
      setAnswers(progress.answers);
      setUserName(progress.userName || '');
      setUserAge(progress.userAge || '');
      setShowIntro(false);
    }
  }, []);

  useEffect(() => {
    // Salvar progresso automaticamente
    if (!showIntro && userName && userAge) {
      saveProgress({
        currentQuestion,
        answers,
        startedAt: new Date().toISOString(),
        userName,
        userAge: Number(userAge)
      });
    }
  }, [currentQuestion, answers, userName, userAge, showIntro]);

  const handleStartQuiz = () => {
    if (!userName || !userAge) {
      alert('Por favor, preencha seu nome e idade para começar.');
      return;
    }
    setShowIntro(false);
  };

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const handleNext = () => {
    if (!answers[questions[currentQuestion].id]) {
      alert('Por favor, selecione uma resposta antes de continuar.');
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      // Quiz completo - mostrar tela de parabéns
      setShowCongrats(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleShowResults = () => {
    // Abrir modal de pagamento
    setShowPaymentModal(true);
  };

  const handlePaymentComplete = () => {
    // Fechar modal e ir para resultados
    setShowPaymentModal(false);
    router.push('/results');
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;

  if (!mounted) return null;

  // Tela de parabéns após completar o quiz
  if (showCongrats) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 flex items-center justify-center p-4">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border-2 border-purple-200 dark:border-purple-700/50 text-center">
            {/* Ícone de celebração */}
            <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-2xl">
              <PartyPopper className="w-12 h-12 text-white" />
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Parabéns, {userName}! 🎉
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Você completou todas as 40 perguntas do quiz!
            </p>

            {/* Mensagem motivacional */}
            <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700/50 mb-8">
              <p className="text-lg font-semibold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-3">
                Está ansioso para ver seu resultado?
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Descubra sua verdadeira idade de maturidade, seus pontos fortes, áreas para desenvolver e receba um plano de ação personalizado de 30 dias!
              </p>
            </div>

            {/* Benefícios do relatório */}
            <div className="text-left mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Análise Completa</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pontuação detalhada em 5 áreas fundamentais</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Mapa Mental Personalizado</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Visualize sua jornada de desenvolvimento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Plano de Ação de 30 Dias</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Passos práticos para evoluir continuamente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">Histórico de Evolução</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Acompanhe seu progresso ao longo do tempo</p>
                </div>
              </div>
            </div>

            {/* Botão principal */}
            <button
              onClick={handleShowResults}
              className="w-full py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 mb-4"
            >
              Quero Ver Meu Resultado! 🚀
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-500">
              Acesso imediato ao relatório completo
            </p>
          </div>
        </div>

        {/* Modal de Pagamento */}
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          onPaymentComplete={handlePaymentComplete}
        />
      </>
    );
  }

  // Tela de introdução
  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full border-2 border-purple-200 dark:border-purple-700/50">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Bem-vindo ao Quiz de Maturidade
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Descubra sua verdadeira idade de maturidade em 40 perguntas
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 dark:border-purple-700/50 focus:border-purple-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-white mb-2">
                Sua Idade
              </label>
              <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value ? Number(e.target.value) : '')}
                placeholder="Digite sua idade"
                min="10"
                max="100"
                className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 dark:border-purple-700/50 focus:border-purple-500 outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-colors"
              />
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 p-6 rounded-xl border border-purple-200 dark:border-purple-700/50">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                O que você vai descobrir:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                  <span>Sua idade de maturidade vs idade real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">✓</span>
                  <span>Pontuação detalhada em 5 áreas fundamentais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-0.5">✓</span>
                  <span>Seus pontos fortes e áreas para desenvolver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">✓</span>
                  <span>Plano de ação personalizado de 30 dias</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleStartQuiz}
              className="w-full py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Começar Quiz
            </button>

            <button
              onClick={() => router.push('/')}
              className="w-full py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              Voltar para o início
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Tela do quiz - VERSÃO MELHORADA COM MAIS DETALHES
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header aprimorado */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-b-2 border-purple-200 dark:border-purple-700/50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  {QUIZ_AREAS[question.area]}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Pergunta {currentQuestion + 1} de {questions.length} • {answeredCount} respondidas
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
          
          {/* Barra de progresso aprimorada */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="absolute -top-1 right-0 text-xs font-bold text-purple-600 dark:text-purple-400">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Estatísticas rápidas */}
          <div className="flex items-center justify-between mt-3 text-xs">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Target className="w-4 h-4" />
              <span>{questions.length - answeredCount} restantes</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <TrendingUp className="w-4 h-4" />
              <span>Área {currentQuestion + 1} de 5</span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo aprimorado */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-purple-200 dark:border-purple-700/50">
          {/* Badge da área */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-900/30 dark:to-purple-900/30 rounded-full border border-purple-200 dark:border-purple-700/50 mb-6">
            <Brain className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
              {QUIZ_AREAS[question.area]}
            </span>
          </div>

          {/* Pergunta */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              {question.question}
            </h2>

            {/* Botão de explicação aprimorado */}
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
            >
              <Lightbulb className="w-4 h-4" />
              {showExplanation ? 'Ocultar contexto' : 'Ver contexto da pergunta'}
            </button>

            {/* Explicação aprimorada */}
            {showExplanation && (
              <div className="mt-4 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-700/50 shadow-md">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      Por que essa pergunta é importante?
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Opções de resposta aprimoradas */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = answers[question.id] === option.value;
              const colors = [
                'from-red-500 to-orange-500',
                'from-orange-500 to-yellow-500',
                'from-green-500 to-emerald-500',
                'from-blue-500 to-cyan-500'
              ];
              
              return (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full p-5 rounded-xl border-2 text-left transition-all group ${
                    isSelected
                      ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 shadow-xl scale-[1.02]'
                      : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Radio button customizado */}
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        isSelected
                          ? 'border-purple-600 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 shadow-lg'
                          : 'border-gray-300 dark:border-gray-600 group-hover:border-purple-400'
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>

                    {/* Indicador de intensidade */}
                    <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${colors[index]} opacity-40`} />

                    {/* Texto da opção */}
                    <span className={`flex-1 font-medium transition-colors ${
                      isSelected 
                        ? 'text-purple-700 dark:text-purple-300' 
                        : 'text-gray-700 dark:text-gray-300'
                    }`}>
                      {option.text}
                    </span>

                    {/* Badge de pontuação (sutil) */}
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                    }`}>
                      {option.value}pt
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dica visual */}
          <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200 dark:border-yellow-700/50">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong className="text-yellow-700 dark:text-yellow-400">Dica:</strong> Não há respostas certas ou erradas. 
                Seja honesto consigo mesmo para obter resultados mais precisos sobre sua maturidade.
              </p>
            </div>
          </div>

          {/* Navegação aprimorada */}
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[question.id]}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card informativo lateral */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-purple-200 dark:border-purple-700/50 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{answeredCount}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Respondidas</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-purple-200 dark:border-purple-700/50 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{questions.length - answeredCount}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Restantes</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-purple-200 dark:border-purple-700/50 shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">{Math.round(progress)}%</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Completo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
