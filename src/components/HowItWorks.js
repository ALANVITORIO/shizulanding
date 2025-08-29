'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  BookOpen,
  Calculator,
  CheckSquare,
  Play,
  ArrowRight,
  ArrowDown,
  X,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';
import { mobileVariants } from '../utils/mobileAnimations';

export default function HowItWorks() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();
  const [videoOpen, setVideoOpen] = useState(false);

  // Video modal control functions
  const openVideo = useCallback(() => setVideoOpen(true), []);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

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

        {/* Diferencial do Guia - quebra fora do container para largura total */}
        <motion.div
          className="relative -mx-4 md:-mx-8 lg:-mx-16 mt-16 md:mt-20 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ ...animationConfig, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-[#2C1810] to-[#1A0F08] p-6 md:p-12 lg:p-16 rounded-none md:rounded-2xl lg:rounded-3xl shadow-2xl border-0 md:border border-[#8B6F47]/20 relative overflow-hidden md:max-w-6xl md:mx-auto">
            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-tr from-[#7A9B76]/20 to-[#6B8967]/10 rounded-full blur-xl"></div>
            
            <div className="relative z-10 max-w-4xl">
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed text-left">
                Diferente de <span className="text-white/50">manuais genéricos</span> ou <span className="text-white/50">livros veterinários</span>, ou até mesmo de <span className="text-white/50">livros que tratam o Shih Tzu como qualquer outra raça</span>,
              </p>
              
              <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mt-4 md:mt-6">
                o <span className="font-bold bg-gradient-to-r from-[#D4A574] to-[#A0845C] bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl">Guia Interativo Eva Ensina</span> te direciona através de cada situação que você vai enfrentar <span className="font-bold text-[#D4A574]">exatamente para o porte e personalidade única do seu Shih Tzu.</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Video Demo Section - otimizada para mobile */}
        <motion.div
          className="text-center bg-white/60 backdrop-blur-sm p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-xl border border-[#E5E1DC] relative overflow-hidden mt-12 md:mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
          transition={{ ...animationConfig, delay: 0.6 }}
        >
          {/* Background pattern - reduzido para mobile */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 md:top-4 left-2 md:left-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#D4A574] to-[#A0845C] rounded-full blur-xl md:blur-2xl"></div>
            <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#7A9B76] to-[#6B8967] rounded-full blur-lg md:blur-xl"></div>
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            {/* Demo Video Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: 0.7 }}
              className="mb-6 md:mb-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#2C1810]">
                Veja uma demonstração rápida do guia
              </h3>
            </motion.div>
            
            {/* Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: 0.8 }}
              className="mb-4 md:mb-6"
            >
              <div 
                className="relative group cursor-pointer mx-auto max-w-2xl overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={openVideo}
              >
                {/* YouTube Thumbnail with High Quality Option */}
                <div className="relative aspect-video w-full overflow-hidden">
                  {/* Use YouTube's high-quality thumbnail */}
                  <img
                    src="https://img.youtube.com/vi/VZdLTE5nbbY/maxresdefault.jpg"
                    alt="Demonstração do guia interativo para Shih Tzu"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to medium quality if high quality isn't available
                      e.target.src = "https://img.youtube.com/vi/VZdLTE5nbbY/mqdefault.jpg"
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur rounded-full w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0845C] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                        <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Video duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">
                    0:30
                  </div>
                </div>

                {/* Video title and device compatibility */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white text-left">
                      <h4 className="font-bold text-base md:text-lg">VER DEMONSTRAÇÃO</h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/90 text-xs md:text-sm">
                      <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Funciona em qualquer dispositivo</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional info below thumbnail */}
              <p className="text-[#6B5335] text-sm mt-3 max-w-md mx-auto">
                Clique no vídeo para assistir a demonstração completa do guia interativo
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Modal - With accessibility, performance optimization, and responsive design */}
        {videoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={closeVideo}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-title"
          >
            <div 
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                aria-label="Fechar vídeo"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              
              <div className="aspect-video w-full">
                <iframe
                  title="Demonstração do Guia Shih Tzu"
                  id="video-title"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/VZdLTE5nbbY?autoplay=1&rel=0&modestbranding=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
