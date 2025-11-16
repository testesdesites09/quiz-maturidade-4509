'use client';

import { useState, useEffect } from 'react';
import { 
  Brain, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Download, 
  Share2, 
  MessageCircle,
  Mail,
  Send,
  HelpCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Clock,
  Shield,
  Zap,
  Heart,
  BookOpen,
  TrendingDown,
  BarChart3,
  FileText,
  Lock,
  Globe,
  X
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-purple-200/50 dark:border-purple-700/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Quiz de Maturidade</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Descubra sua idade de maturidade</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 rounded-full border border-orange-200 dark:border-orange-700/50">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Avaliação Científica Validada</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent leading-tight">
              Descubra sua verdadeira maturidade emocional
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Através de 40 perguntas científicas baseadas em psicologia do desenvolvimento, você vai descobrir sua idade de maturidade real, identificar pontos fortes e fracos, e receber um plano personalizado de crescimento pessoal.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-2xl border-2 border-green-200 dark:border-green-700/50 shadow-lg">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">100% Gratuito e Confiável</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    Mais de 50.000 pessoas já descobriram insights valiosos sobre si mesmas. Seus dados são privados e seguros.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/quiz"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                Começar Agora Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <button 
                onClick={() => document.getElementById('exemplo-mapa')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-purple-600 text-purple-700 dark:text-purple-300 font-semibold rounded-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-all shadow-md"
              >
                Ver Exemplo de Resultado
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">15 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Certificado Digital</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">50k+ usuários</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 via-pink-300/30 to-purple-400/30 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-purple-200 dark:border-purple-700/50">
              <div className="aspect-square bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 dark:from-gray-700 dark:via-purple-900/30 dark:to-gray-700 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                </div>
                <Brain className="w-32 h-32 text-purple-600 dark:text-purple-400 relative z-10" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-700 dark:to-gray-700 rounded-xl border border-orange-200 dark:border-orange-700/50">
                  <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">40</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Perguntas</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 rounded-xl border border-pink-200 dark:border-pink-700/50">
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">5</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Áreas</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-700 rounded-xl border border-purple-200 dark:border-purple-700/50">
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">15</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Minutos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios em Cards */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Por Que Fazer Este Quiz?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Benefícios comprovados para seu desenvolvimento pessoal e profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'Autoconhecimento Profundo',
                description: 'Descubra aspectos da sua personalidade que você nunca percebeu antes',
                color: 'from-orange-500 to-pink-500'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Plano de Ação Personalizado',
                description: 'Receba um roteiro de 30 dias específico para suas necessidades',
                color: 'from-pink-500 to-purple-500'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Acompanhe Sua Evolução',
                description: 'Refaça o teste e veja seu progresso ao longo do tempo',
                color: 'from-purple-500 to-blue-500'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Certificado Digital',
                description: 'Comprove sua maturidade emocional com certificado oficial',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Análise Detalhada',
                description: 'Veja sua pontuação em cada uma das 5 dimensões de maturidade',
                color: 'from-cyan-500 to-teal-500'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Relatório Completo em PDF',
                description: 'Baixe seu mapa mental e análise completa para consultar sempre',
                color: 'from-teal-500 to-green-500'
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-2xl hover:-translate-y-1 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Como Funciona o Teste
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Um processo simples e científico para avaliar sua maturidade em 5 dimensões fundamentais
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                icon: <Target className="w-8 h-8" />,
                title: 'Responda 40 Perguntas',
                description: 'Perguntas científicas sobre suas reações e comportamentos em situações reais do dia a dia',
                color: 'from-orange-500 to-pink-500'
              },
              {
                step: '2',
                icon: <Brain className="w-8 h-8" />,
                title: 'Análise Profunda',
                description: 'Avaliamos 5 áreas: emocional, social, profissional, tomada de decisão e autoconsciência',
                color: 'from-pink-500 to-purple-500'
              },
              {
                step: '3',
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Receba Resultados',
                description: 'Descubra sua idade de maturidade, pontos fortes e áreas para desenvolver com gráficos detalhados',
                color: 'from-purple-500 to-blue-500'
              },
              {
                step: '4',
                icon: <Download className="w-8 h-8" />,
                title: 'Plano de Ação',
                description: 'Mapa mental personalizado em PDF e plano de desenvolvimento de 30 dias com ações práticas',
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-lg h-full">
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {item.step}
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 mb-4 mt-4">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O Que Você Vai Descobrir */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              O Que Você Vai Aprender Sobre Você?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insights profundos e acionáveis sobre seu desenvolvimento pessoal e profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: 'Sua Idade de Maturidade Real',
                description: 'Compare sua idade cronológica com sua idade de maturidade emocional e comportamental. Entenda se você está à frente ou atrás da sua idade real.',
                color: 'from-orange-500 to-pink-500'
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: 'Pontuação Detalhada por Área',
                description: 'Veja seu desempenho específico em maturidade emocional, social, profissional, tomada de decisão e autoconsciência com gráficos interativos.',
                color: 'from-pink-500 to-purple-500'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Seus Pontos Fortes',
                description: 'Identifique suas áreas de excelência e aprenda como usar seus pontos fortes para compensar áreas mais fracas.',
                color: 'from-purple-500 to-blue-500'
              },
              {
                icon: <TrendingDown className="w-12 h-12" />,
                title: 'Áreas para Desenvolver',
                description: 'Descubra suas oportunidades de crescimento com análise detalhada e recomendações específicas para cada área.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Plano de Ação Personalizado',
                description: 'Receba um roteiro de 30 dias com ações práticas e específicas para desenvolver suas áreas mais frágeis de forma efetiva.',
                color: 'from-cyan-500 to-teal-500'
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Mapa Mental Visual',
                description: 'Representação gráfica personalizada da sua maturidade em formato de mapa mental profissional, pronto para download em PDF.',
                color: 'from-teal-500 to-green-500'
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-2xl hover:-translate-y-1 h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Este Teste é Diferente */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Por Que Este Teste é Diferente?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Não é apenas mais um quiz online - é uma ferramenta profissional de autoconhecimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Base Científica Sólida',
                description: 'Desenvolvido com base em teorias de psicologia do desenvolvimento de Piaget, Erikson e Kohlberg. Cada pergunta foi validada por profissionais da área.',
                color: 'from-orange-500 to-pink-500'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Resultados Instantâneos e Detalhados',
                description: 'Diferente de testes que levam dias para dar retorno, você recebe análise completa imediatamente após finalizar, com gráficos e interpretações.',
                color: 'from-pink-500 to-purple-500'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Plano de Ação Prático',
                description: 'Não apenas dizemos onde você está, mas mostramos exatamente como melhorar com um plano de 30 dias com ações específicas e mensuráveis.',
                color: 'from-purple-500 to-blue-500'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Foco em Crescimento, Não em Julgamento',
                description: 'Não há respostas certas ou erradas. O objetivo é identificar oportunidades de desenvolvimento, não rotular ou julgar você.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'Privacidade Total',
                description: 'Seus dados são 100% privados e seguros. Não compartilhamos informações com terceiros. Você tem controle total sobre seus resultados.',
                color: 'from-cyan-500 to-teal-500'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Acessível e Gratuito',
                description: 'Ferramentas profissionais de avaliação custam centenas de reais. Oferecemos gratuitamente para democratizar o acesso ao autoconhecimento.',
                color: 'from-teal-500 to-green-500'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-lg">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Mapa Mental */}
      <section id="exemplo-mapa" className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 dark:from-purple-900 dark:via-pink-900 dark:to-orange-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Exemplo de Mapa Mental Gerado
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Veja como será seu mapa mental personalizado após completar o quiz
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto shadow-2xl">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 rounded-full mb-4 shadow-xl">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Maturidade - João Silva
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Idade de Maturidade: 32 anos</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { area: 'Maturidade Emocional', score: 85, color: 'from-green-500 to-emerald-500' },
                  { area: 'Maturidade Social', score: 72, color: 'from-blue-500 to-cyan-500' },
                  { area: 'Maturidade Profissional', score: 90, color: 'from-purple-500 to-pink-500' },
                  { area: 'Tomada de Decisão', score: 68, color: 'from-orange-500 to-red-500' },
                  { area: 'Autoconsciência', score: 78, color: 'from-indigo-500 to-purple-500' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">
                        {item.area}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {item.score}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-700/50">
                <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                  <strong className="text-green-700 dark:text-green-400">Ponto Forte:</strong> Maturidade Profissional (90%) • 
                  <strong className="text-orange-700 dark:text-orange-400 ml-2">Para Desenvolver:</strong> Tomada de Decisão (68%)
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-white/90 text-sm mb-4">
                Este é apenas um exemplo. Seu mapa será único e personalizado!
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-100 text-purple-700 font-semibold rounded-xl transition-all shadow-lg hover:scale-105"
              >
                Criar Meu Mapa Mental
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              O Que Dizem Sobre o Quiz
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Mais de 50.000 pessoas já descobriram insights valiosos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ana Silva',
                role: 'Psicóloga Clínica',
                text: 'Um teste extremamente bem estruturado. As perguntas são precisas e os resultados realmente refletem o nível de maturidade. Recomendo para meus pacientes.',
                rating: 5,
                avatar: 'AS',
                color: 'from-orange-500 to-pink-500'
              },
              {
                name: 'Carlos Mendes',
                role: 'Gestor de RH',
                text: 'Utilizamos este quiz na nossa empresa para desenvolvimento de liderança. Os insights são valiosos e o plano de ação de 30 dias é muito prático.',
                rating: 5,
                avatar: 'CM',
                color: 'from-pink-500 to-purple-500'
              },
              {
                name: 'Mariana Costa',
                role: 'Coach de Carreira',
                text: 'Recomendo para todos os meus clientes. O plano de ação de 30 dias é um diferencial incrível. Já vi resultados reais em quem seguiu as recomendações.',
                rating: 5,
                avatar: 'MC',
                color: 'from-purple-500 to-blue-500'
              },
              {
                name: 'Pedro Santos',
                role: 'Estudante de Psicologia',
                text: 'Fiz o quiz como parte do meu TCC sobre maturidade emocional. A base científica é sólida e os resultados são consistentes com a literatura acadêmica.',
                rating: 5,
                avatar: 'PS',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Juliana Oliveira',
                role: 'Empresária',
                text: 'Descobri áreas que eu nem sabia que precisava desenvolver. O mapa mental me ajudou a visualizar meu crescimento pessoal de forma clara.',
                rating: 5,
                avatar: 'JO',
                color: 'from-cyan-500 to-teal-500'
              },
              {
                name: 'Roberto Lima',
                role: 'Professor Universitário',
                text: 'Uso este quiz com meus alunos de pedagogia. É uma ferramenta excelente para trabalhar autoconhecimento e desenvolvimento pessoal.',
                rating: 5,
                avatar: 'RL',
                color: 'from-teal-500 to-green-500'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 border-2 border-purple-200 dark:border-purple-700/50 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
                Precisa de Ajuda?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Nossa equipe está pronta para atender você pelos canais abaixo
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <a
                href="https://wa.me/5511999999999?text=Olá!%20Preciso%20de%20ajuda%20com%20o%20Quiz%20de%20Maturidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white p-6 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-10 h-10" />
                <div className="text-center">
                  <p className="font-bold text-lg">WhatsApp</p>
                  <p className="text-sm opacity-90">Resposta imediata</p>
                </div>
              </a>

              <a
                href="mailto:contato@quizmaturidade.com?subject=Dúvida sobre o Quiz de Maturidade"
                className="flex flex-col items-center gap-3 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <Mail className="w-10 h-10" />
                <div className="text-center">
                  <p className="font-bold text-lg">E-mail</p>
                  <p className="text-sm opacity-90">Até 24h de resposta</p>
                </div>
              </a>

              <a
                href="https://t.me/quizmaturidade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-[#0088cc] hover:bg-[#006699] text-white p-6 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <Send className="w-10 h-10" />
                <div className="text-center">
                  <p className="font-bold text-lg">Telegram</p>
                  <p className="text-sm opacity-90">Chat em tempo real</p>
                </div>
              </a>

              <button
                onClick={() => setShowSupportModal(true)}
                className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-6 rounded-xl transition-all hover:scale-105 shadow-lg"
              >
                <HelpCircle className="w-10 h-10" />
                <div className="text-center">
                  <p className="font-bold text-lg">Suporte</p>
                  <p className="text-sm opacity-90">Central de ajuda</p>
                </div>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-600 shadow-md">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 dark:text-white mb-1">Horário de Atendimento</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Segunda a Sexta: 9h às 18h</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Sábados: 9h às 13h</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-600 shadow-md">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 dark:text-white mb-1">Tempo de Resposta</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">WhatsApp: Imediato</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">E-mail: Até 24h</p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-600 shadow-md">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 dark:text-white mb-1">Suporte Especializado</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Equipe treinada</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Psicólogos disponíveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Perguntas Frequentes
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'O quiz é realmente gratuito?',
                answer: 'Sim! O quiz completo com 40 perguntas e resultados básicos é 100% gratuito. Você só paga se quiser o relatório completo em PDF com mapa mental e análise detalhada.'
              },
              {
                question: 'Quanto tempo leva para completar?',
                answer: 'Em média, 15 minutos. Você pode pausar e continuar depois, seu progresso é salvo automaticamente no seu navegador. Não há limite de tempo.'
              },
              {
                question: 'Como é calculada a idade de maturidade?',
                answer: 'Utilizamos algoritmos baseados em psicologia do desenvolvimento que analisam suas respostas em 5 dimensões de maturidade: emocional, social, profissional, tomada de decisão e autoconsciência. A pontuação é comparada com padrões de desenvolvimento típicos.'
              },
              {
                question: 'Posso fazer o quiz mais de uma vez?',
                answer: 'Sim! Recomendamos refazer a cada 3-6 meses para acompanhar sua evolução. O sistema salva seu histórico e mostra seu progresso ao longo do tempo com gráficos comparativos.'
              },
              {
                question: 'O que vem no relatório completo em PDF?',
                answer: 'Mapa mental personalizado em alta resolução, análise detalhada por área com interpretações, plano de ação de 30 dias com ações específicas, comparativo com avaliações anteriores, certificado digital e recomendações de livros e recursos.'
              },
              {
                question: 'Meus dados são seguros?',
                answer: 'Sim! Seus dados são armazenados apenas no seu navegador (LocalStorage) e não são enviados para servidores externos. Você tem controle total e pode apagar seus dados a qualquer momento.'
              },
              {
                question: 'O teste tem base científica?',
                answer: 'Sim! Foi desenvolvido com base em teorias consolidadas de psicologia do desenvolvimento de Piaget, Erikson e Kohlberg. Cada pergunta foi validada por psicólogos profissionais.'
              },
              {
                question: 'Posso compartilhar meus resultados?',
                answer: 'Sim! Você pode compartilhar seus resultados nas redes sociais, exportar em JSON para análise posterior, ou baixar o PDF completo para compartilhar com profissionais.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden hover:border-purple-400 dark:hover:border-purple-600 transition-all shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-800 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-600 dark:text-purple-400 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 dark:from-purple-900 dark:via-pink-900 dark:to-orange-900 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Junte-se a 50.000+ pessoas</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pronto para Descobrir Sua Verdadeira Maturidade?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Milhares de pessoas já descobriram insights valiosos sobre si mesmas e transformaram suas vidas. Sua vez de começar essa jornada de autoconhecimento!
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-100 text-purple-700 font-bold text-lg rounded-xl transition-all shadow-2xl hover:scale-105"
              >
                Começar Agora Gratuitamente
                <ArrowRight className="w-6 h-6" />
              </Link>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sem cadastro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Resultados instantâneos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-black dark:to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6" />
                <span className="font-bold">Quiz de Maturidade</span>
              </div>
              <p className="text-sm text-white/70 mb-4">
                Descubra sua verdadeira idade de maturidade através de ciência e autoconhecimento.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Share2 className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/quiz" className="hover:text-white transition-colors">Fazer Quiz</Link></li>
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#exemplo-mapa" className="hover:text-white transition-colors">Exemplo de Resultado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => setShowSupportModal(true)} className="hover:text-white transition-colors">Central de Ajuda</button></li>
                <li><a href="mailto:contato@quizmaturidade.com" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Sobre</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Nossa Missão</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Base Científica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Parcerias</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
              <p>&copy; 2024 Quiz de Maturidade. Todos os direitos reservados.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Termos</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal de Suporte */}
      {showSupportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-purple-200 dark:border-purple-700/50 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Central de Suporte</h3>
              <button
                onClick={() => setShowSupportModal(false)}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <X className="w-5 h-5 text-gray-800 dark:text-white" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 p-6 rounded-xl border border-purple-200 dark:border-purple-700/50">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Como podemos ajudar?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Escolha o canal de atendimento que preferir. Nossa equipe está pronta para responder suas dúvidas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/5511999999999?text=Olá!%20Preciso%20de%20ajuda%20com%20o%20Quiz%20de%20Maturidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl transition-all shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-xs opacity-90">Resposta imediata</p>
                  </div>
                </a>

                <a
                  href="mailto:contato@quizmaturidade.com"
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                  <div>
                    <p className="font-bold">E-mail</p>
                    <p className="text-xs opacity-90">Até 24h</p>
                  </div>
                </a>

                <a
                  href="https://t.me/quizmaturidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-[#0088cc] hover:bg-[#006699] text-white rounded-xl transition-all shadow-lg"
                >
                  <Send className="w-6 h-6" />
                  <div>
                    <p className="font-bold">Telegram</p>
                    <p className="text-xs opacity-90">Chat em tempo real</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                  <HelpCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">FAQ</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Perguntas frequentes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Instruções Rápidas</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Para fazer o quiz, clique em "Começar Agora" na página inicial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Seu progresso é salvo automaticamente, você pode pausar a qualquer momento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Após completar, você pode baixar o PDF completo ou exportar em JSON</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Para refazer o quiz, basta clicar em "Refazer Quiz" na página de resultados</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
