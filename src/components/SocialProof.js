'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import Image from 'next/image';

export default function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Jéssica',
      age: '27 anos',
      text: 'Minha Lully estava rolando de dor por causa de nós. Com o guia, aprendi a escovar em 2 minutos. Agora ela dorme no meu colo toda noite.',
      avatar: 'https://picsum.photos/seed/jessica/120/120.jpg',
      detail: 'dona de 2 Shih Tzus',
      rating: 5,
      before: 'Problemas com nós',
      after: 'Pet feliz e relaxado',
    },
    {
      name: 'Carlos',
      age: '34 anos',
      text: 'Nunca pensei que alimentar errado pudesse causar tantos problemas. Depois do guia, meu Bento está mais ativo e saudável que nunca!',
      avatar: 'https://picsum.photos/seed/carlos/120/120.jpg',
      detail: 'tutor iniciante',
      rating: 5,
      before: 'Alimentação inadequada',
      after: 'Pet ativo e saudável',
    },
    {
      name: 'Marina',
      age: '29 anos',
      text: 'A calculadora de ração mudou tudo! Minha Mel parou de ter problemas digestivos e está no peso ideal. Recomendo demais!',
      avatar: 'https://picsum.photos/seed/marina/120/120.jpg',
      detail: 'tutora há 3 anos',
      rating: 5,
      before: 'Problemas digestivos',
      after: 'Peso ideal e saudável',
    },
    {
      name: 'Roberto',
      age: '45 anos',
      text: 'O checklist diário é viciante mesmo! Meu Shih Tzu nunca esteve tão bem cuidado. Vale cada centavo!',
      avatar: 'https://picsum.photos/seed/roberto/120/120.jpg',
      detail: 'pai de pet dedicado',
      rating: 5,
      before: 'Cuidados inconsistentes',
      after: 'Rotina perfeita de cuidados',
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

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#D4A574]/10 to-[#A0845C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-gradient-to-br from-[#7A9B76]/10 to-[#6B8967]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-[#F0F7F0] border border-[#7A9B76]/30 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users className="w-5 h-5 text-[#7A9B76]" />
            <span className="text-[#7A9B76] font-semibold text-sm tracking-wide">
              PROVA SOCIAL
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
            Transformações Reais
          </h2>
          <p className="text-xl text-[#6B5335] text-balance max-w-2xl mx-auto">
            Veja como outros tutores transformaram a vida dos seus Shih Tzus
          </p>
        </motion.div>

        {/* Testimonial Section */}
        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="bg-gradient-warm p-8 md:p-12 rounded-3xl shadow-2xl border border-[#E5E1DC]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Profile Section */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-6">
                      <Image
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        width={120}
                        height={120}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg"
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
                    <p className="text-[#8B6F47] text-sm font-medium">
                      {currentTestimonial.detail}
                    </p>

                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start gap-1 mt-4">
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
                    <blockquote className="text-[#2C1810] text-lg md:text-xl font-medium italic leading-relaxed mb-6">
                      &ldquo;{currentTestimonial.text}&rdquo;
                    </blockquote>

                    {/* Before/After */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                        <h5 className="font-semibold text-red-700 text-sm mb-2">
                          ANTES:
                        </h5>
                        <p className="text-red-600 text-sm">
                          {currentTestimonial.before}
                        </p>
                      </div>
                      <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                        <h5 className="font-semibold text-green-700 text-sm mb-2">
                          DEPOIS:
                        </h5>
                        <p className="text-green-600 text-sm">
                          {currentTestimonial.after}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white border-2 border-[#E5E1DC] rounded-full flex items-center justify-center hover:border-[#8B6F47] hover:bg-[#FAF7F4] transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-[#6B5335] group-hover:text-[#8B6F47]" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white border-2 border-[#E5E1DC] rounded-full flex items-center justify-center hover:border-[#8B6F47] hover:bg-[#FAF7F4] transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-[#6B5335] group-hover:text-[#8B6F47]" />
              </button>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-gradient-to-r from-[#8B6F47] to-[#A0845C] w-8'
                    : 'bg-[#E5E1DC] hover:bg-[#D0C8BD]'
                }`}
              />
            ))}
          </div>

          {/* Trust Indicator */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E5E1DC] px-6 py-3 rounded-full shadow-lg">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <Image
                    key={index}
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-[#6B5335] font-medium text-sm">
                +500 tutores já transformaram seus pets
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#D4A574] fill-current"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
