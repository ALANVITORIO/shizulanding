'use client';
import { motion } from 'framer-motion';
import { Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[750px] lg:h-[750px] flex items-start lg:items-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile background */}
        <div
          className="w-full h-full bg-cover bg-center md:hidden"
          style={{ backgroundImage: "url('/hero-mobile.webp')" }}
        ></div>
        {/* Desktop background */}
        <div
          className="w-full h-full bg-cover bg-center hidden md:block"
          style={{ backgroundImage: "url('/hero.webp')" }}
        ></div>
      </div>

      {/* Decorative elements - APENAS DESKTOP */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#D4A574]/25 to-[#A0845C]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#7A9B76]/25 to-[#6B8967]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-full blur-xl"></div>
      </div>

      {/* Badge no topo APENAS para mobile */}
      <motion.div
        className="md:hidden inline-flex items-center gap-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-[#E5E1DC]/70 absolute top-4 left-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.1 }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-[#8B6F47] to-[#A0845C] rounded-full flex items-center justify-center">
          <Heart className="w-4 h-4 text-white" fill="currentColor" />
        </div>
        <div>
          <p className="text-[#8B6F47] font-semibold text-xs tracking-wide">
            GUIA COMPLETO
          </p>
          <h1 className="font-display text-sm font-bold gradient-text">
            SHIH TZU
          </h1>
        </div>
      </motion.div>

      <div className="w-full md:container md:mx-auto px-0 md:px-8 lg:px-16 relative z-10">
        {/* Em mobile deixamos um espaço vazio no topo (arte futura) empurrando o texto para baixo. */}
        <div className="w-full md:max-w-3xl pr-0 md:pr-6 pt-[600px] md:pt-[300px] pb-12 lg:py-16">
          {/* Content Section */}
          <motion.div
            className="space-y-8 px-4 md:px-0 md:bg-white/10 md:backdrop-blur-[2px] md:rounded-2xl lg:bg-transparent lg:backdrop-blur-0 md:p-4 lg:p-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Brand Badge - APENAS DESKTOP */}
            <motion.div
              className="hidden md:inline-flex items-center gap-3 bg-white/85 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#E5E1DC]/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.1 }}
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
              transition={{ delay: 0.4, duration: 0.1 }}
            >
              <h2 className="font-display text-lg md:text-5xl lg:text-xl font-bold text-[#2C1810] leading-tight mb-6 text-balance">
                O primeiro manual{' '}
                <span className="gradient-text">100% interativo</span> para
                tutores de Shih Tzu
              </h2>
              <h3 className="text-sm md:text-2xl font-medium text-[#6B5335] mb-6 text-balance">
                (Mesmo que você{' '}
                <em className="gradient-text-accent font-semibold">nunca</em>{' '}
                tenha tido um cachorro)
              </h3>
            </motion.div>

            {/* Quote Section */}
            <motion.div
              className="md:bg-white/70 md:backdrop-blur-sm md:p-6 md:rounded-2xl md:border-l-4 md:border-[#8B6F47] md:shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.1 }}
            >
              <p className="text-[#4A3823] font-medium italic text-sm md:text-lg leading-relaxed">
                &ldquo;Da escolha do pet à alimentação e treinamento &mdash;
                tudo que você sempre quis saber e não encontrava em lugar
                nenhum&rdquo;
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-[#2C1810] drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.1 }}
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
              transition={{ delay: 1, duration: 0.1 }}
            >
              <button className="group bg-gradient-to-r from-[#7A9B76] to-[#6B8967] text-white font-bold py-2 px-4 md:py-4 md:px-8 rounded-full text-sm md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
                <span>QUERO VER MEU SHIH TZU TRANSFORMADO</span>
                <div className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                  R$ 37
                </div>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <p className="text-[#6B5335] text-xs md:text-sm mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7A9B76] rounded-full animate-pulse"></span>
                Mais de 500 tutores já transformaram a vida dos seus pets
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating badges restaurados */}
        <motion.div
          className="hidden lg:block absolute top-28 right-20 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl border border-[#E5E1DC]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7A9B76] to-[#6B8967] rounded-xl flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[#2C1810] font-semibold text-sm leading-tight">
                Calculadora
              </p>
              <p className="text-[#6B5335] text-xs leading-tight">
                de ração incluída
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-60 right-10 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl border border-[#E5E1DC]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#D4A574] to-[#A0845C] rounded-xl flex items-center justify-center">
              <Star className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <div>
              <p className="text-[#2C1810] font-semibold text-sm leading-tight">
                Checklist
              </p>
              <p className="text-[#6B5335] text-xs leading-tight">
                diário interativo
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex absolute bottom-32 right-28 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg border border-[#E5E1DC] items-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-3 h-3 bg-[#7A9B76] rounded-full animate-pulse"></div>
          <span className="text-[#2C1810] font-semibold text-sm">
            Pet Feliz & Saudável
          </span>
        </motion.div>
      </div>
    </header>
  );
}
