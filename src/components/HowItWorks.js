'use client';
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  BookOpen,
  Calculator,
  CheckSquare,
  Play,
  ArrowRight,
  ArrowDown,
  X,
  ExternalLink,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';

export default function HowItWorks() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef(null);

  // Função simplificada para abrir modal
  const openModal = useCallback((e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    
    // Mobile: abrir direto em fullscreen sem delays
    if (isMobile) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Desktop: manter comportamento original
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }, [isMobile]);
  
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  }, []);
  
  // ESC para fechar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isModalOpen, closeModal]);
  
  // Cleanup ao desmontar
  useEffect(() => {
    return () => {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
      }
    };
  }, []);

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

  // Configurações de animação apenas para desktop
  const animationConfig = {
    duration: reducedMotion ? 0 : 0.5,
    ease: [0.25, 0.46, 0.45, 0.94],
  };

  // Componente de Step para Mobile (sem animações)
  const MobileStep = ({ step, index }) => (
    <div className="relative">
      {index < steps.length - 1 && (
        <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-[#D4A574] to-[#8B6F47] rounded-full z-0"></div>
      )}
      <div className={`${step.bgColor} p-5 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm relative z-10`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg shrink-0`}>
            {step.number}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-8 h-8 bg-gradient-to-br ${step.color} text-white rounded-lg flex items-center justify-center shadow-md`}>
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
        {index < steps.length - 1 && (
          <div className="flex justify-center mt-4">
            <ArrowDown className="w-5 h-5 text-[#8B6F47] opacity-60" />
          </div>
        )}
      </div>
    </div>
  );

  // Componente de Step para Desktop (com animações)
  const DesktopStep = ({ step, index }) => (
    <motion.div
      className="relative flex items-center mb-20 last:mb-0"
      initial={{ opacity: 0, y: 30 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
      transition={{ ...animationConfig, delay: index * 0.15 }}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 top-1/2">
        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-2xl border-4 border-white`}>
          {step.number}
        </div>
      </div>
      {index % 2 === 0 ? (
        <div className="w-5/12 mr-auto pr-8">
          <div className={`${step.bgColor} p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative`}>
            <div className="flex justify-start mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
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
      ) : (
        <div className="w-5/12 ml-auto pl-8">
          <div className={`${step.bgColor} p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative`}>
            <div className="flex justify-start mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}>
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
  );

  return (
    <section
      ref={elementRef}
      className="md:py-8 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-[#F4EDE5] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4A574]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7A9B76]/20 to-transparent"></div>
      <div className="absolute top-8 md:top-10 left-6 md:left-10 w-32 h-32 md:w-60 md:h-60 bg-gradient-to-br from-[#D4A574]/5 to-[#A0845C]/3 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-8 md:bottom-10 right-6 md:right-10 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-br from-[#7A9B76]/5 to-[#6B8967]/3 rounded-full blur-2xl md:blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Demo Section - Renderização condicional mobile/desktop */}
        {isMobile ? (
          // Mobile: Versão sem animações
          <div className="text-center relative overflow-hidden mt-0 border-t border-b border-[#E5E1DC]/50 py-8">
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="mb-6">
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#2C1810] relative inline-block mb-2">
                    EXPERIMENTE O GUIA AGORA MESMO
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#8B6F47]/40"></div>
                  </h3>
                  <p className="text-[#6B5335] text-base font-medium">
                    O guia real funcionando!
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <div 
                  className="relative cursor-pointer mx-auto overflow-hidden max-w-sm"
                  onClick={openModal}
                  role="button"
                  aria-label="Abrir demonstração interativa do guia"
                  tabIndex={0}
                >
                  <div className="relative border-2 border-[#8B6F47] rounded-lg overflow-hidden">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src="/calc.webp"
                        alt="Demonstração interativa do guia para Shih Tzu"
                        className="w-full h-full object-cover"
                        loading="eager"
                        width="800"
                        height="450"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                      <div className="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs px-4 py-1.5 rounded-full">
                        AO VIVO
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
                          <span className="bg-red-600 rounded-full h-3 w-3"></span>
                          <span className="text-[#2C1810] font-bold text-sm">INTERAGIR AGORA</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-8 px-4 pb-4">
                        <div className="text-white text-center">
                          <h4 className="font-bold text-base uppercase">
                            Demonstração Interativa
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#8B6F47] text-white text-center py-2 font-medium text-sm">
                      <span>CLIQUE PARA USAR O GUIA REAL</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-[#2C1810] font-bold">
                    É INTERATIVO!
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Desktop: Com animações
          <motion.div
            className="text-center relative overflow-hidden mt-0 md:mt-0 border-t border-b border-[#E5E1DC]/50 py-8 md:py-10"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...animationConfig, delay: 0.6 }}
          >
            <div className="max-w-3xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ ...animationConfig, delay: 0.7 }}
                className="mb-6 md:mb-8"
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2C1810] relative inline-block mb-2">
                    EXPERIMENTE O GUIA AGORA MESMO
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-[#8B6F47]/40"></div>
                  </h3>
                  <p className="text-[#6B5335] text-base md:text-lg font-medium">
                    O guia real funcionando!
                  </p>
                </div>
              </motion.div>
              
              <div className="mb-4 md:mb-6">
                <div 
                  className="relative cursor-pointer mx-auto overflow-hidden max-w-sm md:max-w-2xl"
                  onClick={openModal}
                  role="button"
                  aria-label="Abrir demonstração interativa do guia"
                  tabIndex={0}
                >
                  <div className="relative border-2 border-[#8B6F47] rounded-lg overflow-hidden">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src="/calc.webp"
                        alt="Demonstração interativa do guia para Shih Tzu"
                        className="w-full h-full object-cover"
                        loading="eager"
                        width="800"
                        height="450"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70"></div>
                      <div className="absolute top-3 left-3 bg-red-600 text-white font-bold text-xs px-4 py-1.5 rounded-full">
                        AO VIVO
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
                          <span className="bg-red-600 rounded-full h-3 w-3"></span>
                          <span className="text-[#2C1810] font-bold text-sm">INTERAGIR AGORA</span>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-8 px-4 pb-4">
                        <div className="text-white text-center">
                          <h4 className="font-bold text-base uppercase">
                            Demonstração Interativa
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#8B6F47] text-white text-center py-2 font-medium text-sm">
                      <span>CLIQUE PARA USAR O GUIA REAL</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-[#2C1810] font-bold">
                    É INTERATIVO!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Header Section */}
        {isMobile ? (
          // Mobile: Sem animações
          <div className="text-center mb-8 mt-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#E5E1DC] px-4 py-2 rounded-full mb-4 shadow-lg">
              <Play className="w-4 h-4 text-[#8B6F47]" />
              <span className="text-[#8B6F47] font-semibold text-xs tracking-wide">
                COMO FUNCIONA
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold gradient-text mb-4 relative tracking-tight">
              Como Funciona
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#D4A574] to-[#A0845C] rounded-full"></div>
            </h2>
            <p className="text-lg text-[#6B5335] text-balance font-medium leading-tight">
              Em 4 passos simples:
            </p>
          </div>
        ) : (
          // Desktop: Com animações
          <motion.div
            className="text-center mb-8 md:mb-10 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 50 }}
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
        )}

        {/* Steps Section */}
        <div className="max-w-4xl mx-auto">
          {isMobile ? (
            // Mobile: Sem animações
            <div className="space-y-6">
              {steps.map((step, index) => (
                <MobileStep key={index} step={step} index={index} />
              ))}
            </div>
          ) : (
            // Desktop: Com animações
            <div className="relative">
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#D4A574] via-[#8B6F47] to-[#7A9B76] rounded-full"
                style={{ height: 'calc(100% - 80px)', top: '40px' }}
              ></div>
              {steps.map((step, index) => (
                <DesktopStep key={index} step={step} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Diferencial Section */}
        {isMobile ? (
          // Mobile: Sem animações
          <div className="relative -mx-4 mt-16 mb-12">
            <div className="bg-gradient-to-br from-[#2C1810] to-[#1A0F08] p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-tr from-[#7A9B76]/20 to-[#6B8967]/10 rounded-full blur-xl"></div>
              <div className="relative z-10 max-w-4xl">
                <p className="text-white text-base leading-relaxed text-left">
                  Diferente de <span className="text-white/50">manuais genéricos</span> ou <span className="text-white/50">livros veterinários</span>, ou até mesmo de <span className="text-white/50">livros que tratam o Shih Tzu como qualquer outra raça</span>,
                </p>
                <p className="text-white text-base leading-relaxed mt-4">
                  o <span className="font-bold bg-gradient-to-r from-[#D4A574] to-[#A0845C] bg-clip-text text-transparent text-lg">Guia Interativo Eva Ensina</span> te direciona através de cada situação que você vai enfrentar <span className="font-bold text-[#D4A574]">exatamente para o porte e personalidade única do seu Shih Tzu.</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Desktop: Com animações
          <motion.div
            className="relative -mx-4 md:-mx-8 lg:-mx-16 mt-16 md:mt-20 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ ...animationConfig, delay: 0.5 }}
          >
            <div className="bg-gradient-to-br from-[#2C1810] to-[#1A0F08] p-6 md:p-12 lg:p-16 rounded-none md:rounded-2xl lg:rounded-3xl shadow-2xl border-0 md:border border-[#8B6F47]/20 relative overflow-hidden md:max-w-6xl md:mx-auto">
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
        )}
      </div>

      {/* Modal - Versão simplificada para mobile */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 overflow-hidden">
          <div className="fixed inset-0 bg-white overflow-hidden flex flex-col">
            {/* Header simples */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#8B6F47] text-white">
              <h3 className="font-bold text-sm flex items-center gap-1 truncate">
                <BookOpen className="w-3 h-3" />
                <span className="truncate">Guia Eva Ensina: Shih Tzu</span>
              </h3>
              <button
                onClick={closeModal}
                className="p-1 bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Iframe direto para mobile */}
            <div className="relative flex-1 w-full bg-white">
              <iframe
                ref={iframeRef}
                src="https://alanvitorio.github.io/guia-demonstrartivo/shih-tzu-ebook/index.html"
                title="Guia Interativo para Shih Tzu"
                className="w-full h-full border-0"
                style={{height: "calc(100vh - 36px)"}}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
              
              {/* Botão de fallback sempre visível no mobile */}
              {isMobile && (
                <div className="absolute bottom-4 right-4">
                  <a 
                    href="https://alanvitorio.github.io/guia-demonstrartivo/shih-tzu-ebook/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8B6F47] text-white p-2 rounded-full shadow-lg flex items-center justify-center"
                    title="Abrir em nova aba"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}