'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Heart, TrendingDown } from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';
import { mobileVariants } from '../utils/mobileAnimations';

export default function Problem() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();

  const problems = [
    {
      icon: <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Alimentar seu aumiguinho errado',
      consequence: 'Pode causar obesidade e problemas digestivos',
    },
    {
      icon: <TrendingDown className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Reforçar comportamento ruim',
      consequence: 'Cria hábitos difíceis de quebrar',
    },
    {
      icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Encurtar significativamente a vida do seu pet',
      consequence: 'Menos tempo com quem você mais ama',
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
      className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-white relative overflow-hidden"
    >
      {/* Background decorations - otimizadas para mobile */}
      <div className="absolute top-8 md:top-10 right-6 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-red-100/20 to-orange-100/15 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-16 md:bottom-20 left-6 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-red-50/30 to-orange-50/20 rounded-full blur-xl md:blur-2xl"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section (circular mascarada) - otimizada para mobile */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{
              opacity: 0,
              x: isMobile ? 0 : -50,
              y: isMobile ? 30 : 0,
            }}
            animate={hasIntersected ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={animationConfig}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] lg:w-[34rem] lg:h-[34rem] mx-auto">
              {/* Halo / ring - reduzido em mobile */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-200/40 via-orange-100/30 to-transparent blur-lg md:blur-xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-500/10 via-transparent to-orange-400/8"></div>

              {/* Main circular image - com lazy loading otimizado */}
              <div className="absolute inset-0 rounded-full shadow-xl md:shadow-2xl ring-2 md:ring-4 ring-white overflow-hidden">
                <Image
                  src="/problema.webp"
                  alt="Shih Tzu demonstrando sinais que precisam de atenção"
                  fill
                  priority={false}
                  loading="lazy"
                  sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 416px, 544px"
                  className="object-cover rounded-full select-none"
                  style={{ willChange: 'transform' }}
                />
              </div>

              {/* Badge over circle - responsivo */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg z-10">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <AlertTriangle className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="font-semibold text-xs md:text-sm">
                    Precisa de ajuda
                  </span>
                </div>
              </div>

              {/* Floating warning card - simplificado para mobile */}
              <motion.div
                className="absolute -top-6 -right-4 md:-top-8 md:-right-6 bg-white/90 border border-red-200 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg md:shadow-xl backdrop-blur-sm w-36 md:w-44"
                animate={
                  isMobile
                    ? mobileVariants.floatingCard.animateMobile
                    : mobileVariants.floatingCard.animate
                }
              >
                <div className="text-center">
                  <AlertTriangle className="w-5 h-5 md:w-7 md:h-7 text-red-500 mx-auto mb-1" />
                  <p className="text-red-700 font-semibold text-xs">
                    Sinais de alerta
                  </p>
                  <p className="text-red-600 text-[10px] leading-tight">
                    que você pode estar perdendo
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section - otimizada para mobile */}
          <motion.div
            className="order-1 lg:order-2 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
            animate={hasIntersected ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ ...animationConfig, delay: 0.2 }}
          >
            {/* Header with Diva photo recortada - melhorado para mobile */}
            <motion.div
              className="flex items-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: 0.4 }}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 select-none pointer-events-none">
                <Image
                  src="/ctadiva.webp"
                  alt="Diva falando"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                  className="object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.2)] md:drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
                />
                {/* Fake cutout glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/0 via-white/15 to-orange-200/0 rounded-full mix-blend-overlay"></div>
              </div>
              <div className="bg-red-50/80 backdrop-blur-sm border border-red-200/70 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl shadow-lg">
                <p className="text-red-700 font-extrabold text-xs md:text-sm tracking-wide leading-tight">
                  DIVA FALANDO
                </p>
                <p className="text-red-600 text-xs font-medium">
                  A verdade que dói...
                </p>
              </div>
            </motion.div>

            {/* Main Headline - tipografia otimizada para mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: 0.6 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1810] leading-tight md:leading-tight mb-4 md:mb-6 text-balance tracking-tight">
                Mesmo <span className="text-red-600">amando</span> o seu peludo,
                você pode estar cometendo esses erros...
              </h2>
            </motion.div>

            {/* Problems List - otimizada para mobile */}
            <div className="space-y-4 md:space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{
                    opacity: 0,
                    x: isMobile ? 0 : 20,
                    y: isMobile ? 15 : 0,
                  }}
                  animate={hasIntersected ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ ...animationConfig, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0">
                      {problem.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base md:text-lg text-[#2C1810] mb-1.5 md:mb-2 leading-snug">
                        {problem.title}
                      </h3>
                      <p className="text-[#6B5335] text-sm leading-relaxed">
                        {problem.consequence}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emotional Appeal - melhorado para mobile */}
            <motion.div
              className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
              transition={{ ...animationConfig, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3">😢</div>
                <p className="text-[#2C1810] font-semibold text-base md:text-lg mb-1.5 md:mb-2 leading-snug">
                  Você não sabia... mas seu Shih Tzu sente a diferença!
                </p>
                <p className="text-[#6B5335] text-sm leading-relaxed">
                  Cada erro pode estar afetando a felicidade e saúde do seu
                  melhor amigo
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
