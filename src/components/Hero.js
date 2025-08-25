'use client';
import { motion } from 'framer-motion';
import { Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF7F4] via-white to-[#F4EDE5]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#7A9B76]/20 to-[#6B8967]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-[#D4A574]/15 to-[#A0845C]/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Brand Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#E5E1DC]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B6F47] to-[#A0845C] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div>
                <p className="text-[#8B6F47] font-semibold text-sm tracking-wide">
                  GUIA COMPLETO
                </p>
                <h1 className="font-display text-lg font-bold gradient-text">
                  SHIH TZU
                </h1>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C1810] leading-tight mb-6 text-balance">
                O primeiro manual{' '}
                <span className="gradient-text">100% interativo</span> para
                tutores de Shih Tzu
              </h2>
              <h3 className="text-xl md:text-2xl font-medium text-[#6B5335] mb-6 text-balance">
                (Mesmo que você{' '}
                <em className="gradient-text-accent font-semibold">nunca</em>{' '}
                tenha tido um cachorro)
              </h3>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-[#8B6F47] shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-[#4A3823] font-medium italic text-lg leading-relaxed">
                &ldquo;Da escolha do pet à alimentação e treinamento &mdash;
                tudo que você sempre quis saber e não encontrava em lugar
                nenhum&rdquo;
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-[#6B5335]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7A9B76]" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7A9B76]" />
                <span>Funciona offline</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#D4A574]" fill="currentColor" />
                <span>Garantia de 7 dias</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <button className="group bg-gradient-to-r from-[#7A9B76] to-[#6B8967] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
                <span>QUERO VER MEU SHIH TZU TRANSFORMADO</span>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  R$ 37
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-[#6B5335] text-sm mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7A9B76] rounded-full animate-pulse"></span>
                Mais de 500 tutores já transformaram a vida dos seus pets
              </p>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-3xl"></div>

              {/* Main image */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/shihtzu-hero/500/600.jpg"
                  alt="Shih Tzu adorável e bem cuidado"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Floating badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#7A9B76] rounded-full animate-pulse"></div>
                    <span className="text-[#2C1810] font-semibold text-sm">
                      Pet Feliz & Saudável
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-[#E5E1DC]"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#7A9B76] to-[#6B8967] rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[#2C1810] font-semibold text-sm">
                      Calculadora
                    </p>
                    <p className="text-[#6B5335] text-xs">de ração incluída</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-[#E5E1DC]"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#D4A574] to-[#A0845C] rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[#2C1810] font-semibold text-sm">
                      Checklist
                    </p>
                    <p className="text-[#6B5335] text-xs">diário interativo</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
