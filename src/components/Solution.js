'use client';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  BookOpen,
  Users,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';
import { mobileVariants } from '../utils/mobileAnimations';

export default function Solution() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();

  // Updated benefits list based on user-provided copy. Each item keeps the
  // same card layout but with the richer copy requested.
  const benefitsCombined = [
    {
      icon: <Calculator className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Apertar 1 botão',
      description:
        'e saber a quantidade EXATA de ração em gramas (sem matemática, sem erro, sem culpa)',
      color: 'from-[#7A9B76] to-[#6B8967]',
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Olhar para seu Shih Tzu',
      description:
        'e entender EXATAMENTE o que cada comportamento significa',
      color: 'from-[#D4A574] to-[#A0845C]',
    },
    {
      icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Ter uma emergência',
      description:
        'e saber INSTANTANEAMENTE se é grave ou normal da raça',
      color: 'from-[#7A9B76] to-[#6B8967]',
    },
    {
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Receber visitas',
      description:
        'e seu Shih Tzu se comportar como o mais educado da vizinhança',
      color: 'from-[#D4A574] to-[#A0845C]',
    },
    {
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Dormir tranquila',
      description:
        'sabendo que você está fazendo TUDO certo para ele viver mais e melhor',
      color: 'from-[#7A9B76] to-[#6B8967]',
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Finalmente se sentir',
      description: 'uma mãe/pai competente que sabe o que está fazendo',
      color: 'from-[#D4A574] to-[#A0845C]',
    },
    {
      icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'E MUITO MAIS',
      description: 'conteúdo exclusivo',
      color: 'from-[#8B6F47] to-[#A0845C]',
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
      className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
    >
      {/* Background decorations - otimizadas para mobile */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-br from-[#7A9B76]/8 to-[#6B8967]/4 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-16 md:bottom-20 right-6 md:right-10 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-[#D4A574]/8 to-[#A0845C]/4 rounded-full blur-2xl md:blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section - otimizada para mobile */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={animationConfig}
        >
          <motion.div
            className="flex justify-center mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...animationConfig, delay: 0.2 }}
          >
            <img
              src="/logodark.webp"
              alt="Logo Guia Shih Tzu"
              className="h-36 md:h-20 w-auto"
            />
          </motion.div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2C1810] text-balance leading-tight">
            Imagine Se Você Pudesse...
          </h3>
        </motion.div>

        {/* Main Benefits Grid - otimizada para mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefitsCombined.map((benefit, index) => (
            <motion.div
              key={index}
              className="card-elevated p-6 md:p-8 hover:shadow-2xl group"
              initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${benefit.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  style={{ willChange: 'transform' }}
                >
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-lg md:text-xl font-bold text-[#2C1810] mb-2 md:mb-3 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-[#6B5335] leading-relaxed text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Progress indicator - otimizada para mobile */}
              <div className="w-full h-1 bg-[#E5E1DC] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${benefit.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={hasIntersected ? { width: '100%' } : {}}
                  transition={{ ...animationConfig, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features are now included in the benefits grid above to keep
            consistent styling with the main benefits (benefitsCombined). */}

        {/* Bottom CTA Section - otimizada para mobile */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
          transition={{ ...animationConfig, delay: 0.6 }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C1810] mb-4 md:mb-6 text-balance leading-tight tracking-tight">
              Isso é exatamente o que o Guia Interativo Eva Ensina faz por você
            </h3>

            <p className="text-[#6B5335] text-base md:text-lg mb-8 md:mb-12 text-balance leading-relaxed">
              Seu Shih Tzu feliz, bem cuidado e saudável em questão de dias, não de meses.
            </p>

            <div className="mb-8 md:mb-12">
              <Image
                src="/ctadiva.webp"
                alt="Shih Tzu feliz e saudável"
                width={isMobile ? 250 : 300}
                height={isMobile ? 167 : 200}
                className="mx-auto"
                priority={false}
                loading="lazy"
                sizes="(max-width: 768px) 250px, 300px"
                style={{ willChange: 'transform' }}
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
              <button onClick={() => window.open('https://pay.kiwify.com.br/992CSb6', '_blank')} className="group bg-gradient-to-r from-[#7A9B76] to-[#6B8967] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 md:gap-3 min-h-[44px]">
                <span className="text-sm md:text-base">
                  QUERO COMEÇAR AGORA
                </span>
                <div className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                  R$ 37
                </div>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-sm md:text-sm text-[#6B5335] mt-2 text-center">
                Cada dia da vida de um Shih Tzu equivale a cerca de uma semana da sua vida.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
