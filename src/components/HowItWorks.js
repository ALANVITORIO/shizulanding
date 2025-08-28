'use client';
import { motion } from 'framer-motion';
import {
  Smartphone,
  BookOpen,
  Calculator,
  CheckSquare,
  Play,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';
import { mobileVariants } from '../utils/mobileAnimations';

export default function HowItWorks() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();

  const steps = [
    {
      number: 1,
      icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Acesse',
      description: 'pelo celular (2 minutos)',
      detail: 'Download instantâneo após o pagamento',
      color: 'from-[#8B6F47] to-[#A0845C]',
      bgColor: 'bg-[#FAF7F4]',
    },
    {
      number: 2,
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Leia e Revise',
      description: 'os capítulos que te interessam',
      detail: 'Faça anotações e acesse o que importa no momento',
      color: 'from-[#D4A574] to-[#8B6F47]',
      bgColor: 'bg-[#F4EDE5]',
    },
    {
      number: 3,
      icon: <Calculator className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Use a Calculadora',
      description: 'de ração hoje mesmo',
      detail: 'Resultados precisos em segundos',
      color: 'from-[#7A9B76] to-[#6B8967]',
      bgColor: 'bg-[#F0F7F0]',
    },
    {
      number: 4,
      icon: <CheckSquare className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Siga o Checklist',
      description: 'diário (viciante!)',
      detail: 'Nunca mais esqueça os cuidados essenciais',
      color: 'from-[#7A9B76] to-[#6B8967]',
      bgColor: 'bg-[#F0F7F0]',
    },
  ];

  // Configurações de animação baseadas no dispositivo e preferências
  const animationConfig = {
    duration: reducedMotion ? 0 : isMobile ? 0.3 : 0.5,
    ease: isMobile ? 'easeOut' : [0.25, 0.46, 0.45, 0.94],
  };

  return (
    <section
      ref={elementRef}
      className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-[#F4EDE5] relative overflow-hidden"
    >
      {/* Background decorations - otimizadas para mobile */}
      <div className="absolute top-8 md:top-10 left-6 md:left-10 w-32 h-32 md:w-60 md:h-60 bg-gradient-to-br from-[#D4A574]/8 to-[#A0845C]/4 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-8 md:bottom-10 right-6 md:right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-[#7A9B76]/8 to-[#6B8967]/4 rounded-full blur-2xl md:blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section - otimizada para mobile */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={animationConfig}
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 bg-white/80 backdrop-blur-sm border border-[#E5E1DC] px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...animationConfig, delay: 0.2 }}
          >
            <Play className="w-4 h-4 md:w-5 md:h-5 text-[#8B6F47]" />
            <span className="text-[#8B6F47] font-semibold text-xs md:text-sm tracking-wide">
              COMO FUNCIONA
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 md:mb-6 relative tracking-tight">
            Como Funciona
            <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#D4A574] to-[#A0845C] rounded-full"></div>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#6B5335] text-balance font-medium leading-tight">
            Em 4 passos simples:
          </p>
        </motion.div>

        {/* Steps Section - Layout mobile-first completamente redesenhado */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile: Stack vertical simples, Desktop: Roadmap alternado */}
          {isMobile ? (
            // Layout Mobile: Stack vertical limpo
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 25 }}
                  animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...animationConfig, delay: index * 0.1 }}
                >
                  {/* Connector line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-[#D4A574] to-[#8B6F47] rounded-full z-0"></div>
                  )}

                  <div
                    className={`${step.bgColor} p-5 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm relative z-10`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number badge */}
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg shrink-0`}
                      >
                        {step.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-8 h-8 bg-gradient-to-br ${step.color} text-white rounded-lg flex items-center justify-center shadow-md`}
                          >
                            {step.icon}
                          </div>
                          <h3 className="font-heading text-lg font-bold text-[#2C1810] leading-tight">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-[#6B5335] font-semibold mb-2 text-base leading-snug">
                          {step.description}
                        </p>
                        <p className="text-[#6B5335] text-sm opacity-80 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator for next step */}
                    {index < steps.length - 1 && (
                      <div className="flex justify-center mt-4">
                        <ArrowDown className="w-5 h-5 text-[#8B6F47] opacity-60" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Layout Desktop: Roadmap alternado original (otimizado)
            <div className="relative">
              {/* Journey path line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#D4A574] via-[#8B6F47] to-[#7A9B76] rounded-full"
                style={{ height: 'calc(100% - 80px)', top: '40px' }}
              ></div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center mb-20 last:mb-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...animationConfig, delay: index * 0.15 }}
                >
                  {/* Journey node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 top-1/2">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-2xl border-4 border-white`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content card - Left side */}
                  {index % 2 === 0 && (
                    <div className="w-5/12 mr-auto pr-8">
                      <div
                        className={`${step.bgColor} p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative`}
                      >
                        <div className="flex justify-start mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}
                          >
                            {step.icon}
                          </div>
                        </div>

                        <div className="text-left">
                          <h3 className="font-heading text-xl font-bold text-[#2C1810] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#6B5335] font-semibold mb-3 text-base">
                            {step.description}
                          </p>
                          <p className="text-[#6B5335] text-sm opacity-80 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>

                        <div className="absolute top-1/2 transform -translate-y-1/2 -right-4">
                          <ArrowRight className="w-6 h-6 text-[#8B6F47]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content card - Right side */}
                  {index % 2 === 1 && (
                    <div className="w-5/12 ml-auto pl-8">
                      <div
                        className={`${step.bgColor} p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative`}
                      >
                        <div className="flex justify-start mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}
                          >
                            {step.icon}
                          </div>
                        </div>

                        <div className="text-left">
                          <h3 className="font-heading text-xl font-bold text-[#2C1810] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[#6B5335] font-semibold mb-3 text-base">
                            {step.description}
                          </p>
                          <p className="text-[#6B5335] text-sm opacity-80 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>

                        <div className="absolute top-1/2 transform -translate-y-1/2 -left-4">
                          <ArrowRight className="w-6 h-6 text-[#8B6F47] rotate-180" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA Section - otimizada para mobile */}
        <motion.div
          className="text-center bg-white/60 backdrop-blur-sm p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-[#E5E1DC] relative overflow-hidden mt-12 md:mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
          transition={{ ...animationConfig, delay: 0.6 }}
        >
          {/* Background pattern - reduzido para mobile */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 md:top-4 left-2 md:left-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#D4A574] to-[#A0845C] rounded-full blur-xl md:blur-2xl"></div>
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#7A9B76] to-[#6B8967] rounded-full blur-lg md:blur-xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: 0.8 }}
            >
              <button className="group bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 md:gap-3 mx-auto mb-4 md:mb-6 relative overflow-hidden min-h-[44px]">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                <Play className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                <span className="relative z-10 text-sm md:text-base">
                  {isMobile
                    ? 'VER DEMONSTRAÇÃO'
                    : 'VER DEMONSTRAÇÃO DE 30 SEGUNDOS'}
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>

              <div className="flex items-center justify-center gap-1.5 md:gap-2 text-[#6B5335] text-sm">
                <Smartphone className="w-4 h-4 md:w-5 md:h-5" />
                <span>Funciona em qualquer dispositivo</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
