'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  Heart,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';
import { mobileVariants } from '../utils/mobileAnimations';

export default function SocialProof() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Testimonials redesenhados para mobile-first
  const testimonials = [
    {
      name: 'Jéssica',
      age: '27 anos',
      text: 'Minha Lully estava rolando de dor por causa de nós. Com o guia, aprendi a escovar em 2 minutos.',
      shortText: 'Aprendi a escovar em 2 min. Lully agora dorme no meu colo!',
      avatar: 'https://picsum.photos/seed/jessica/120/120.jpg',
      detail: 'dona de 2 Shih Tzus',
      rating: 5,
      resultIcon: <Heart className="w-4 h-4" />,
      result: 'Pet feliz e relaxado',
    },
    {
      name: 'Carlos',
      age: '34 anos',
      text: 'Nunca pensei que alimentar errado pudesse causar tantos problemas. Depois do guia, meu Bento está mais ativo!',
      shortText: 'Bento está mais ativo e saudável que nunca!',
      avatar: 'https://picsum.photos/seed/carlos/120/120.jpg',
      detail: 'tutor iniciante',
      rating: 5,
      resultIcon: <Zap className="w-4 h-4" />,
      result: 'Pet ativo e saudável',
    },
    {
      name: 'Marina',
      age: '29 anos',
      text: 'A calculadora de ração mudou tudo! Minha Mel parou de ter problemas digestivos e está no peso ideal.',
      shortText: 'Calculadora mudou tudo! Mel no peso ideal.',
      avatar: 'https://picsum.photos/seed/marina/120/120.jpg',
      detail: 'tutora há 3 anos',
      rating: 5,
      resultIcon: <Star className="w-4 h-4" />,
      result: 'Peso ideal e saudável',
    },
    {
      name: 'Roberto',
      age: '45 anos',
      text: 'O checklist diário é viciante mesmo! Meu Shih Tzu nunca esteve tão bem cuidado. Vale cada centavo!',
      shortText: 'Checklist é viciante! Pet nunca esteve tão bem.',
      avatar: 'https://picsum.photos/seed/roberto/120/120.jpg',
      detail: 'pai de pet dedicado',
      rating: 5,
      resultIcon: <Heart className="w-4 h-4" />,
      result: 'Rotina perfeita de cuidados',
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[activeTestimonial];

  // Configurações de animação baseadas no dispositivo
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
      <div className="absolute top-8 md:top-10 right-6 md:right-10 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-[#D4A574]/8 to-[#A0845C]/4 rounded-full blur-xl md:blur-3xl"></div>
      <div className="absolute bottom-16 md:bottom-20 left-6 md:left-10 w-32 h-32 md:w-60 md:h-60 bg-gradient-to-br from-[#7A9B76]/8 to-[#6B8967]/4 rounded-full blur-xl md:blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section - otimizada para mobile */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: isMobile ? 30 : 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={animationConfig}
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 bg-[#F0F7F0] border border-[#7A9B76]/30 px-4 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
            transition={{ ...animationConfig, delay: 0.2 }}
          >
            <Users className="w-4 h-4 md:w-5 md:h-5 text-[#7A9B76]" />
            <span className="text-[#7A9B76] font-semibold text-xs md:text-sm tracking-wide">
              PROVA SOCIAL
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4 md:mb-6 tracking-tight">
            Transformações Reais
          </h2>
          <p className="text-lg md:text-xl text-[#6B5335] text-balance max-w-2xl mx-auto leading-relaxed">
            Veja como outros tutores transformaram a vida dos seus Shih Tzus
          </p>
        </motion.div>

        {/* Testimonial Section - Redesenhado completamente para mobile */}
        <div className="max-w-5xl mx-auto">
          {isMobile ? (
            // Layout Mobile: Cards compactos empilhados
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-warm p-4 rounded-2xl shadow-lg border border-[#E5E1DC] relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                  transition={{ ...animationConfig, delay: index * 0.1 }}
                >
                  {/* Mobile Card Layout */}
                  <div className="flex items-start gap-3">
                    {/* Avatar compacto */}
                    <div className="relative shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-[#7A9B76] text-white p-1 rounded-full">
                        <Quote className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    {/* Content compacto */}
                    <div className="flex-1 min-w-0">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-heading text-base font-bold text-[#2C1810] leading-tight">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#8B6F47] text-xs font-medium">
                            {testimonial.detail}
                          </p>
                        </div>

                        {/* Rating compacto */}
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-[#D4A574] fill-current"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial text otimizado */}
                      <blockquote className="text-[#2C1810] text-sm font-medium leading-snug mb-3">
                        &ldquo;{testimonial.shortText}&rdquo;
                      </blockquote>

                      {/* Result tag */}
                      <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200 px-2.5 py-1 rounded-lg">
                        <div className="text-green-600">
                          {testimonial.resultIcon}
                        </div>
                        <span className="text-green-700 text-xs font-medium">
                          {testimonial.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Layout Desktop: Carousel otimizado
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  className="bg-gradient-warm p-6 md:p-8 rounded-3xl shadow-2xl border border-[#E5E1DC]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    {/* Profile Section */}
                    <div className="text-center lg:text-left">
                      <div className="relative inline-block mb-4">
                        <Image
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          width={96}
                          height={96}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg"
                          loading="lazy"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-[#7A9B76] text-white p-2 rounded-full">
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="font-heading text-xl font-bold text-[#2C1810] mb-1">
                        {currentTestimonial.name}
                      </h4>
                      <p className="text-[#6B5335] text-sm mb-2">
                        {currentTestimonial.age}
                      </p>
                      <p className="text-[#8B6F47] text-sm font-medium mb-3">
                        {currentTestimonial.detail}
                      </p>

                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-[#D4A574] fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      <blockquote className="text-[#2C1810] text-lg md:text-xl font-medium italic leading-relaxed mb-4">
                        &ldquo;{currentTestimonial.text}&rdquo;
                      </blockquote>

                      {/* Result highlight */}
                      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-xl">
                        <div className="text-green-600">
                          {currentTestimonial.resultIcon}
                        </div>
                        <span className="text-green-700 text-sm font-semibold">
                          Resultado: {currentTestimonial.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-white border-2 border-[#E5E1DC] rounded-full flex items-center justify-center hover:border-[#8B6F47] hover:bg-[#FAF7F4] transition-all duration-300 group min-h-[44px]"
                >
                  <ChevronLeft className="w-5 h-5 text-[#6B5335] group-hover:text-[#8B6F47]" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-white border-2 border-[#E5E1DC] rounded-full flex items-center justify-center hover:border-[#8B6F47] hover:bg-[#FAF7F4] transition-all duration-300 group min-h-[44px]"
                >
                  <ChevronRight className="w-5 h-5 text-[#6B5335] group-hover:text-[#8B6F47]" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] ${
                      index === activeTestimonial
                        ? 'bg-gradient-to-r from-[#8B6F47] to-[#A0845C] w-8'
                        : 'bg-[#E5E1DC] hover:bg-[#D0C8BD] w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicator - Redesenhado para mobile */}
        <motion.div
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ ...animationConfig, delay: 0.6 }}
        >
          {isMobile ? (
            // Layout Mobile: Stack vertical compacto
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 p-4 rounded-2xl shadow-lg">
              {/* Avatars em linha */}
              <div className="flex justify-center items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((testimonial, index) => (
                    <Image
                      key={index}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  +100
                </div>
              </div>

              {/* Texto principal */}
              <div className="text-center">
                <p className="text-green-800 font-bold text-sm leading-tight mb-2">
                  Centenas de tutores já transformaram
                  <br />
                  <span className="text-green-600">seus pets</span>
                </p>

                {/* Rating compacto */}
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-yellow-500 fill-current"
                    />
                  ))}
                  <span className="text-green-700 text-xs font-medium ml-1">
                    4.9/5
                  </span>
                </div>
              </div>
            </div>
          ) : (
            // Layout Desktop: Horizontal elegante
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm border border-[#E5E1DC] px-8 py-4 rounded-full shadow-xl">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <Image
                      key={index}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="text-[#6B5335] font-semibold">
                  <span className="text-lg">Centenas de tutores</span>
                  <span className="text-sm block -mt-1">
                    já transformaram seus pets
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#D4A574] fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
