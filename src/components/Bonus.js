'use client';
import { motion } from 'framer-motion';
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

export default function Bonus() {
  const interactiveTools = [
    {
      icon: <Calculator className="w-10 h-10" />,
      title: 'Calculadora de Ração',
      subtitle: 'Ferramenta Interativa',
      description: 'Calcule a quantidade ideal de ração para seu Shih Tzu',
      features: [
        'Cálculo por peso e idade',
        'Resultados instantâneos',
        'Diferentes tipos de ração',
      ],
      mockupImage: 'https://picsum.photos/seed/calculator/400/300.jpg',
      primaryColor: 'from-[#8B6F47] to-[#A0845C]',
      accentColor: 'bg-[#8B6F47]',
      bgGradient: 'from-amber-50 to-orange-50',
    },
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: 'Checklist Diário',
      subtitle: 'Rotina Personalizada',
      description: 'Acompanhe todos os cuidados diários do seu pet',
      features: [
        'Lista de tarefas interativa',
        'Progresso visual',
        'Lembretes personalizados',
      ],
      mockupImage: 'https://picsum.photos/seed/checklist/400/300.jpg',
      primaryColor: 'from-[#7A9B76] to-[#6B8967]',
      accentColor: 'bg-[#7A9B76]',
      bgGradient: 'from-green-50 to-emerald-50',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Gráfico de Crescimento',
      subtitle: 'Acompanhamento Visual',
      description: 'Monitore o desenvolvimento saudável do seu Shih Tzu',
      features: [
        'Gráficos interativos',
        'Marcos de desenvolvimento',
        'Comparação com padrões',
      ],
      mockupImage: 'https://picsum.photos/seed/growth/400/300.jpg',
      primaryColor: 'from-[#D4A574] to-[#A0845C]',
      accentColor: 'bg-[#D4A574]',
      bgGradient: 'from-yellow-50 to-amber-50',
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Bloco de Anotações',
      subtitle: 'Salvamento Automático',
      description: 'Anote tudo sobre seu Shih Tzu - salvo direto no navegador',
      features: [
        'Anotações ilimitadas',
        'Salvamento automático',
        'Funciona sem internet',
      ],
      mockupImage: 'https://picsum.photos/seed/notes/400/300.jpg',
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
          transition={{ duration: 0.3 }}
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
                CONTEÚDO COMPLETO
              </span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-[1.1] tracking-tight">
              Tudo que Você Vai Aprender
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-[#6B5335]/90 text-balance max-w-4xl mx-auto leading-relaxed">
              13 capítulos completos + ferramentas interativas para você se
              tornar um{' '}
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
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true, margin: '-30px' }}
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-blue-900 mb-4 leading-tight flex items-center justify-center gap-3">
                <BarChart3 className="w-7 h-7 text-blue-600" />
                Resumo do Que Você Receberá
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
                  Ferramentas Interativas
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
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200/50 px-6 py-3 rounded-full mb-8 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm tracking-[0.05em] uppercase flex items-center gap-2">
              <Settings className="w-4 h-4" />
              FERRAMENTAS
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-[1.1] tracking-tight">
            Ferramentas Interativas
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#6B5335]/90 text-balance max-w-4xl mx-auto leading-relaxed">
            Transforme o cuidado do seu Shih Tzu com{' '}
            <span className="gradient-text font-semibold">tecnologia</span>
          </p>
        </motion.div>

        {/* Ferramentas Grid */}
        <div className="space-y-20 lg:space-y-24 mb-20">
          {interactiveTools.map((tool, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
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
                    <img
                      src={tool.mockupImage}
                      alt={`Interface da ${tool.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

                {/* CTA específico */}
                <motion.button
                  className={`group bg-gradient-to-r ${tool.primaryColor} text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 text-lg`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Experimentar Agora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Destaque especial para o Bloco de Anotações */}
        <motion.div
          className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 p-8 lg:p-12 rounded-3xl mb-20 shadow-sm"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
              <h3 className="font-display text-2xl font-bold text-purple-900">
                Bonus Especial: Bloco de Anotações
              </h3>
            </div>

            <p className="text-purple-700 text-lg mb-6">
              Anote comportamentos, datas importantes, observações veterinárias
              -{' '}
              <span className="font-semibold">
                tudo salvo automaticamente no seu navegador!
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Save className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-purple-800 font-medium">
                  Salvamento Automático
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Monitor className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-purple-800 font-medium">
                  Sem App Necessário
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-purple-800 font-medium">
                  Dados Locais e Seguros
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seção final com destaque */}
        <motion.div
          className="text-center bg-gradient-to-r from-[#F8F6F3] to-white p-12 lg:p-16 rounded-3xl shadow-xl border border-[#E5E1DC]/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          viewport={{ once: true, margin: '-30px' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-[#D4A574]" />
              <h3 className="font-display text-3xl lg:text-4xl font-bold gradient-text leading-tight">
                4 Ferramentas Interativas Incluídas
              </h3>
              <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-[#D4A574]" />
            </div>

            <p className="text-xl lg:text-2xl text-[#6B5335]/90 mb-10 text-balance leading-relaxed">
              Acesso completo às 4 ferramentas que vão revolucionar o cuidado
              com seu Shih Tzu
            </p>

            <motion.button
              className="group bg-gradient-to-r from-[#7A9B76] to-[#6B8967] text-white font-bold py-5 px-10 rounded-full text-xl lg:text-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-6 h-6 lg:w-7 lg:h-7" />
              <span>ACESSAR FERRAMENTAS AGORA</span>
              <div className="bg-white/25 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-bold shadow-sm">
                R$ 37
              </div>
              <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <p className="text-[#6B5335]/80 text-base lg:text-lg mt-6 flex items-center justify-center gap-3 font-medium">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              Todas as ferramentas funcionam 100% offline
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
