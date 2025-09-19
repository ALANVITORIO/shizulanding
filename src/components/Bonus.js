'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Calculator,
  ClipboardCheck,
  TrendingUp,
  Smartphone,
  Play,
  Zap,
  ArrowRight,
  Sparkles,
  BookOpen,
  Settings,
  Dog,
  Crown,
  Diamond,
  Home,
  Heart,
  Stethoscope,
  Shield,
  UtensilsCrossed,
  Wand2,
  Tent,
  Brain,
  Gamepad2,
  PartyPopper,
  BarChart3,
  Save,
  Monitor,
  Lock,
  FileText,
} from 'lucide-react';

// Hooks para otimização mobile apenas desta seção
import { useState, useEffect } from 'react';

export default function Bonus() {
  // Hook simples para detectar mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const interactiveTools = [
    {
      icon: <Calculator className="w-10 h-10" />,
      title: 'Calculadora de Ração',
      subtitle: 'BÔNUS #1 - Ferramenta Interativa',
      description: 'Calcule a quantidade ideal de ração para seu Shih Tzu',
      features: [
        'Cálculo por peso e idade',
        'Resultados instantâneos',
        'Diferentes tipos de ração',
      ],
      mockupImage: '/calc.webp',
      primaryColor: 'from-[#8B6F47] to-[#A0845C]',
      accentColor: 'bg-[#8B6F47]',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: 'Checklist Diário',
      subtitle: 'BÔNUS #2 - Rotina Personalizada',
      description: 'Acompanhe todos os cuidados diários do seu pet',
      features: [
        'Lista de tarefas interativa',
        'Progresso visual',
        'Lembretes personalizados',
      ],
      mockupImage: '/check.webp',
      primaryColor: 'from-[#7A9B76] to-[#6B8967]',
      accentColor: 'bg-[#7A9B76]',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Gráfico de Crescimento',
      subtitle: 'BÔNUS #3 - Acompanhamento Visual',
      description: 'Monitore o desenvolvimento saudável do seu Shih Tzu',
      features: [
        'Gráficos interativos',
        'Marcos de desenvolvimento',
        'Comparação com padrões',
      ],
      mockupImage: '/grafico.webp',
      primaryColor: 'from-[#D4A574] to-[#A0845C]',
      accentColor: 'bg-[#D4A574]',
      bgGradient: 'from-yellow-50 to-amber-50',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Bloco de Anotações',
      subtitle: 'BÔNUS #4 - Salvamento Automático',
      description: 'Anote tudo sobre seu Shih Tzu - salvo direto no navegador',
      features: [
        'Anotações ilimitadas',
        'Salvamento automático',
        'Funciona sem internet',
      ],
      mockupImage: '/anotacao.webp',
      primaryColor: 'from-[#9B7BA3] to-[#7A5B82]',
      accentColor: 'bg-[#9B7BA3]',
      bgGradient: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-[#F8F6F3] to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-[#7A9B76]/15 to-[#6B8967]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Seção: Tudo que você vai aprender */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-6 py-3 rounded-full mb-8 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <BookOpen className="w-5 h-5 text-blue-700" />
              <span className="text-blue-700 font-semibold text-sm tracking-[0.05em] uppercase">
                CONTEÚDO + 4 BÔNUS GRÁTIS
              </span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-[1.1] tracking-tight">
              Tudo que Você Vai Aprender + 4 Bônus Exclusivos GRÁTIS
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#6B5335]/90 text-balance max-w-4xl mx-auto leading-relaxed">
              13 capítulos completos +{' '}
              <span className="gradient-text font-semibold">
                4 bônus exclusivos GRÁTIS
              </span>{' '}
              para você se tornar um{' '}
              <span className="gradient-text font-semibold">
                expert em Shih Tzu
              </span>
            </p>
          </div>

          {/* Grid de Capítulos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {[
              {
                title: 'Shih Tzu é o Pet Ideal Para Você?',
                time: '15 min',
                points: '10 pontos',
                icon: <Dog className="w-6 h-6" />,
                color: 'from-[#8B6F47] to-[#A0845C]',
              },
              {
                title: 'Por Que Seu Shih Tzu Age Como Realeza?',
                time: '20 min',
                points: '10 pontos',
                icon: <Crown className="w-6 h-6" />,
                color: 'from-[#D4A574] to-[#A0845C]',
              },
              {
                title: 'Como Escolher o Shih Tzu Perfeito?',
                time: '25 min',
                points: '10 pontos',
                icon: <Diamond className="w-6 h-6" />,
                color: 'from-[#7A9B76] to-[#6B8967]',
              },
              {
                title: 'Preparando Sua Casa Para o Novo Amigo',
                time: '20 min',
                points: '10 pontos',
                icon: <Home className="w-6 h-6" />,
                color: 'from-[#9B7BA3] to-[#7A5B82]',
              },
              {
                title: 'Como Educar Seu Shih Tzu Com Amor',
                time: '30 min',
                points: '10 pontos',
                icon: <Heart className="w-6 h-6" />,
                color: 'from-[#E57373] to-[#C62828]',
              },
              {
                title: 'Cuidando da Saúde do Seu Companheiro',
                time: '25 min',
                points: '10 pontos',
                icon: <Stethoscope className="w-6 h-6" />,
                color: 'from-[#4FC3F7] to-[#0288D1]',
              },
              {
                title: 'Mantendo Seu Pet Sempre Saudável',
                time: '30 min',
                points: '10 pontos',
                icon: <Shield className="w-6 h-6" />,
                color: 'from-[#81C784] to-[#388E3C]',
              },
              {
                title: 'A Alimentação Ideal Para Cada Fase',
                time: '25 min',
                points: '10 pontos',
                icon: <UtensilsCrossed className="w-6 h-6" />,
                color: 'from-[#FFB74D] to-[#F57C00]',
              },
              {
                title: 'Cuidados de Beleza Para Seu Pet',
                time: '20 min',
                points: '10 pontos',
                icon: <Wand2 className="w-6 h-6" />,
                color: 'from-[#F8BBD9] to-[#E91E63]',
              },
              {
                title: 'Ensinando Truques Divertidos',
                time: '25 min',
                points: '10 pontos',
                icon: <Tent className="w-6 h-6" />,
                color: 'from-[#BA68C8] to-[#7B1FA2]',
              },
              {
                title: 'Entendendo o Comportamento do Seu Pet',
                time: '30 min',
                points: '10 pontos',
                icon: <Brain className="w-6 h-6" />,
                color: 'from-[#64B5F6] to-[#1976D2]',
              },
              {
                title: 'Brincadeiras e Exercícios Divertidos',
                time: '20 min',
                points: '10 pontos',
                icon: <Gamepad2 className="w-6 h-6" />,
                color: 'from-[#A5D6A7] to-[#2E7D32]',
              },
              {
                title: 'Tudo Para Uma Vida Feliz Juntos',
                time: '15 min',
                points: '10 pontos',
                icon: <PartyPopper className="w-6 h-6" />,
                color: 'from-[#FFD54F] to-[#F57F17]',
              },
            ].map((chapter, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E5E1DC]/50 group backdrop-blur-sm"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02, duration: 0.2 }}
                viewport={{ once: true, margin: '-20px' }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className={`h-1 bg-gradient-to-r ${chapter.color}`}></div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${chapter.color} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}
                    >
                      {chapter.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-[0.05em] mb-2 block">
                        Capítulo {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-lg lg:text-xl font-bold text-[#2C1810] leading-tight mb-3 line-clamp-2">
                        {chapter.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-6">
                      <span className="flex items-center gap-2 text-[#6B5335]">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">{chapter.time}</span>
                      </span>
                      <span className="flex items-center gap-2 text-[#6B5335]">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium">{chapter.points}</span>
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#8B6F47] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resumo dos benefícios */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-3xl p-8 lg:p-12 shadow-sm"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            viewport={{ once: true, margin: '-30px' }}
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-blue-900 mb-4 leading-tight flex items-center justify-center gap-3">
                <BarChart3 className="w-7 h-7 text-blue-600" />
                Resumo dos Bônus Que Você Receberá
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                  13
                </div>
                <div className="text-blue-800 font-medium text-sm lg:text-base">
                  Capítulos Completos
                </div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                  300+
                </div>
                <div className="text-blue-800 font-medium text-sm lg:text-base">
                  Minutos de Conteúdo
                </div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                  130
                </div>
                <div className="text-blue-800 font-medium text-sm lg:text-base">
                  Pontos de Aprendizado
                </div>
              </div>
              <div className="group">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                  4
                </div>
                <div className="text-blue-800 font-medium text-sm lg:text-base">
                  Bônus Exclusivos
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E5E1DC] px-6 py-3 rounded-full mb-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Sparkles className="w-5 h-5 text-[#D4A574]" />
            <span className="text-[#8B6F47] font-semibold text-sm tracking-[0.05em] uppercase">
              BÔNUS EXCLUSIVOS
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C1810] mb-6 leading-[1.1] tracking-tight">
            Bônus Exclusivos GRÁTIS
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#6B5335] text-balance max-w-4xl mx-auto leading-relaxed">
            4 bônus profissionais que você recebe{' '}
            <span className="text-[#8B6F47] font-semibold">gratuitamente</span>{' '}
            para revolucionar o cuidado do seu Shih Tzu
          </p>
        </motion.div>

        {/* Bônus Grid */}
        <div className="space-y-20 lg:space-y-24 mb-20">
          {interactiveTools.map((tool, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
              viewport={{ once: true, margin: '-30px' }}
            >
              {/* Mockup da ferramenta */}
              <div
                className={`relative ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E5E1DC]/50 hover:shadow-3xl transition-all duration-500 group backdrop-blur-sm">
                  {/* Mockup image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                    <Image
                      src={tool.mockupImage}
                      alt={`Interface da ${tool.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      priority={index === 0}
                    />

                    {/* Overlay interativo */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Botão de demo */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/30 transition-all">
                        <Play className="w-5 h-5" />
                        Ver Demo
                      </button>
                    </motion.div>
                  </div>

                  {/* Floating features */}
                  <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm border border-[#E5E1DC]/50 px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 ${tool.accentColor} rounded-full animate-pulse`}
                      ></div>
                      <span className="text-[#2C1810] font-semibold text-sm">
                        Interativo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos flutuantes */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-[#E5E1DC]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${tool.primaryColor} rounded-lg flex items-center justify-center shadow-sm`}
                  >
                    <Smartphone className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Conteúdo da ferramenta */}
              <div
                className={`space-y-8 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                {/* Header da ferramenta */}
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br ${tool.primaryColor} rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`inline-block bg-gradient-to-r ${tool.bgGradient} px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-3 shadow-sm`}
                    >
                      {tool.subtitle}
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C1810] mb-4 leading-tight">
                      {tool.title}
                    </h3>
                    <p className="text-[#6B5335]/90 text-lg lg:text-xl leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-4">
                  {tool.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-[#E5E1DC]/50 shadow-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.02 + featureIndex * 0.02,
                        duration: 0.2,
                      }}
                      viewport={{ once: true, margin: '-20px' }}
                    >
                      <div
                        className={`w-7 h-7 bg-gradient-to-br ${tool.primaryColor} rounded-lg flex items-center justify-center shadow-sm`}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-[#2C1810] font-medium text-lg">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Indicador de bônus */}
                <div className="text-center py-4">
                  <div
                    className={`inline-block bg-gradient-to-r ${tool.primaryColor} px-6 py-2 rounded-full`}
                  >
                    <span className="text-white font-bold text-sm">
                      BÔNUS INCLUÍDO
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sistema Completo de Acompanhamento */}
        <motion.div
          className="bg-gradient-to-br from-white to-gray-50/80 rounded-3xl p-8 lg:p-12 shadow-2xl border border-[#E5E1DC]/50 mb-20 sistema-completo-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B6F47]/10 to-[#A0845C]/10 border border-[#8B6F47]/20 px-6 py-3 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delFay: 0.1, duration: 0.2 }}
              viewport={{ once: true }}
            >
              <Settings className="w-5 h-5 text-[#8B6F47]" />
              <span className="text-[#8B6F47] font-semibold text-sm tracking-[0.05em] uppercase">
                SISTEMA COMPLETO
              </span>
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-6 leading-tight">
              Sistema Completo de Acompanhamento
            </h2>
            <p className="text-lg md:text-xl text-[#6B5335] text-balance max-w-3xl mx-auto leading-relaxed">
              Tudo que você precisa para cuidar do seu Shih Tzu como um
              profissional, sem gastar uma fortuna
            </p>
          </div>

          {/* Grid de bônus com valores - Otimizado para mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 bonus-grid-mobile">
            {[
              {
                icon: (
                  <Calculator className={isMobile ? 'w-5 h-5' : 'w-8 h-8'} />
                ),
                title: 'Calculadora de Ração',
                description: isMobile
                  ? 'Calcule a quantidade perfeita baseada no peso, idade e atividade'
                  : 'Calcule a quantidade perfeita de ração baseada no peso, idade e atividade do seu pet',
                value: 'R$ 47',
                color: 'from-[#8B6F47] to-[#A0845C]',
                image: '/calc.webp',
              },
              {
                icon: (
                  <ClipboardCheck
                    className={isMobile ? 'w-5 h-5' : 'w-8 h-8'}
                  />
                ),
                title: 'Checklist Diário',
                description: isMobile
                  ? 'Lista inteligente que se adapta ao perfil do seu Shih Tzu'
                  : 'Lista inteligente de cuidados diários que se adapta ao perfil do seu Shih Tzu',
                value: 'R$ 39',
                color: 'from-[#7A9B76] to-[#6B8967]',
                image: '/check.webp',
              },
              {
                icon: (
                  <TrendingUp className={isMobile ? 'w-5 h-5' : 'w-8 h-8'} />
                ),
                title: 'Gráfico de Crescimento',
                description: isMobile
                  ? 'Acompanhe visualmente o desenvolvimento saudável'
                  : 'Acompanhe visualmente o desenvolvimento saudável do seu companheiro',
                value: 'R$ 59',
                color: 'from-[#D4A574] to-[#A0845C]',
                image: '/grafico.webp',
              },
              {
                icon: <FileText className={isMobile ? 'w-5 h-5' : 'w-8 h-8'} />,
                title: 'Bloco de Anotações',
                description: isMobile
                  ? 'Registre comportamentos, vacinas e consultas'
                  : 'Registre tudo sobre seu pet - comportamentos, vacinas, consultas veterinárias',
                value: 'R$ 34',
                color: 'from-[#9B7BA3] to-[#7A5B82]',
                image: '/anotacao.webp',
              },
            ].map((bonus, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-[#E5E1DC]/50 shadow-lg hover:shadow-xl transition-all duration-300 group bonus-card-mobile"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                viewport={{ once: true, margin: '-20px' }}
                whileHover={!isMobile ? { scale: 1.02, y: -4 } : {}}
              >
                <div className="flex items-start gap-4 mb-4 bonus-content">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${bonus.color} rounded-xl flex items-center justify-center text-white shadow-sm shrink-0 bonus-icon`}
                  >
                    {bonus.icon}
                  </div>
                  <div className="flex-1 min-w-0 bonus-info">
                    <div className="bonus-header">
                      <h3 className="font-display text-xl lg:text-2xl font-bold text-[#2C1810] mb-2 leading-tight bonus-title">
                        {bonus.title}
                      </h3>
                      <div className="bonus-price-container">
                        <span className="bonus-price">{bonus.value}</span>
                        <span className="bonus-free">GRÁTIS</span>
                      </div>
                    </div>
                    <p className="text-[#6B5335]/90 text-base leading-relaxed bonus-description">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total e economia */}
          <motion.div
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 rounded-2xl p-6 lg:p-8 text-center bonus-total-mobile"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-4 text-3xl lg:text-4xl font-bold mb-4 total-amounts">
              <span className="text-gray-400 line-through total-old">
                R$ 179
              </span>
              <span className="text-green-600 total-new">TOTAL: GRÁTIS</span>
            </div>
            <p className="text-lg lg:text-xl text-green-700 font-semibold total-description">
              Você economiza R$ 179 com estes 4 bônus exclusivos!
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Final Poderoso */}
        <motion.div
          className="text-center bg-gradient-to-r from-[#F8F6F3] to-[#F4EDE5] p-12 lg:p-16 rounded-3xl shadow-xl border border-[#E5E1DC]/50 backdrop-blur-sm cta-final-mobile"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Urgência */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#D4A574]/20 backdrop-blur-sm border border-[#D4A574]/30 px-4 py-2 rounded-full mb-6 cta-urgency"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></span>
              <span className="text-[#A0845C] font-semibold text-sm uppercase tracking-wide">
                Oferta Limitada - Garanta Agora
              </span>
            </motion.div>

            <motion.h2
              className="font-display text-3xl lg:text-5xl font-bold text-[#2C1810] mb-6 leading-tight cta-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Não Perca Esta Oportunidade Única!
            </motion.h2>

            {/* Benefícios principais */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 cta-benefits-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center benefit-item">
                <div className="text-4xl font-bold text-[#8B6F47] mb-2 benefit-number">
                  13
                </div>
                <div className="text-[#6B5335] font-medium benefit-label">
                  Capítulos Completos
                </div>
              </div>
              <div className="text-center benefit-item">
                <div className="text-4xl font-bold text-[#8B6F47] mb-2 benefit-number">
                  4
                </div>
                <div className="text-[#6B5335] font-medium benefit-label">
                  Bônus Exclusivos
                </div>
              </div>
              <div className="text-center benefit-item">
                <div className="text-4xl font-bold text-[#8B6F47] mb-2 benefit-number">
                  R$ 179
                </div>
                <div className="text-[#6B5335] font-medium benefit-label">
                  Economizados
                </div>
              </div>
            </motion.div>

            {/* Valor destacado */}
            <motion.div
              className="bg-white/70 border-2 border-[#D4A574]/30 rounded-2xl p-8 mb-8 cta-price-mobile"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-lg text-[#6B5335] mb-3 price-label">
                  Valor Normal
                </div>
                <div className="text-4xl line-through text-[#6B5335]/60 mb-3 price-old">
                  R$ 179
                </div>
                <div className="text-6xl font-bold text-[#8B6F47] mb-4 price-new">
                  R$ 37
                </div>
                <div className="text-2xl text-[#D4A574] font-bold price-urgency">
                  APENAS HOJE!
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => window.open('https://pay.kiwify.com.br/992CSb6', '_blank')}
                className="group bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-white font-bold py-6 px-12 rounded-full text-2xl lg:text-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 cta-button-mobile"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>QUERO RECEBER TUDO POR R$ 37</span>
                <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>

              <motion.div
                className="flex items-center justify-center gap-3 text-[#6B5335] cta-security-mobile"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Shield className="w-5 h-5 text-[#7A9B76]" />
                <span className="font-medium">
                  100% Seguro • Sem compromisso • Acesso imediato
                </span>
              </motion.div>

              {/* One-time payment note */}
              <motion.div
                className="text-center text-sm text-[#6B5335] mt-2 w-full max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                viewport={{ once: true }}
              >
                <strong className="text-[#2C1810]">Pagamento único — acesso vitalício.</strong>
                <div className="text-[#6B5335]">Não é assinatura. Você não precisa renovar.</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
