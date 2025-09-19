'use client';
import { motion } from 'framer-motion';
import { Heart, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-[750px] lg:h-[750px] flex items-start lg:items-center overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile background */}
        <img
          src="/hero-mobile2.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="w-[390px] h-[750px] object-cover object-center md:hidden absolute top-0 left-1/2 transform -translate-x-1/2"
        />
        {/* Desktop background */}
        <img
          src="/hero.webp"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-center hidden md:block lg:object-none lg:object-right"
        />
      </div>

      {/* Decorative elements - APENAS DESKTOP */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-[#D4A574]/25 to-[#A0845C]/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 lg:w-48 lg:h-48 bg-gradient-to-br from-[#7A9B76]/25 to-[#6B8967]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 lg:w-36 lg:h-36 bg-gradient-to-br from-[#D4A574]/20 to-[#A0845C]/10 rounded-full blur-xl"></div>
        <div className="absolute top-64 left-3/4 w-0 h-0 lg:w-24 lg:h-24 bg-gradient-to-br from-[#8B6F47]/20 to-[#A0845C]/5 rounded-full blur-xl"></div>
      </div>

      {/* Logo no topo APENAS para mobile */}
      <motion.div
        className="md:hidden absolute top-4 left-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.1 }}
      >
        <img 
          src="/logodark.webp" 
          alt="Logo Guia Shih Tzu" 
          className="h-24 w-auto"
        />
      </motion.div>

      {/* Trust badges discretos em cima da foto - APENAS MOBILE */}
      <motion.div
        className="md:hidden absolute inset-0 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.1 }}
      >
        {/* Badge 1 - Top left area */}
        <div className="absolute top-20 left-6 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-[#2C1810] flex items-center gap-1 shadow-sm transform rotate-2">
          <CheckCircle className="w-3 h-3 text-[#7A9B76]" />
          <span>Acesso imediato</span>
        </div>
        
        {/* Badge 2 - Top right corner */}
        <div className="absolute top-12 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-[#2C1810] flex items-center gap-1 shadow-sm transform -rotate-3">
          <CheckCircle className="w-3 h-3 text-[#7A9B76]" />
          <span>Funciona offline</span>
        </div>
        
        {/* Badge 3 - Middle left */}
        <div className="absolute top-40 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-[#2C1810] flex items-center gap-1 shadow-sm transform rotate-1">
          <Star className="w-3 h-3 text-[#D4A574]" fill="currentColor" />
          <span>Pagamento único</span>
        </div>
      </motion.div>

      <div className="w-full md:container md:mx-auto px-0 md:px-8 lg:px-16 xl:px-20 relative z-10">
        {/* Em mobile deixamos um espaço vazio no topo (arte futura) empurrando o texto para baixo. */}
        <div className="w-full md:max-w-3xl pr-0 md:pr-6 pt-[330px] md:pt-[300px] pb-6 lg:py-16">
          {/* Content Section */}
          <motion.div
            className="space-y-3 md:space-y-8 px-6 md:px-0 md:bg-white/10 md:backdrop-blur-[2px] md:rounded-2xl lg:bg-white/10 lg:backdrop-blur-[2px] lg:rounded-3xl md:p-4 lg:p-8 lg:shadow-lg lg:border lg:border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Logo - APENAS DESKTOP */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <img 
                src="/logodark.webp" 
                alt="Logo Guia Shih Tzu" 
                className="h-28 lg:h-32 w-auto"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.1 }}
            >
              <h2 className="font-display text-lg md:text-5xl lg:text-4xl font-bold text-[#2C1810] leading-tight mb-2 md:mb-6">
                O primeiro e mais completo manual{' '}
                <span className="gradient-text">100% interativo</span> para
                apaixonados por Shih Tzu
              </h2>
              <h3 className="text-[0.65rem] md:text-xl lg:text-xl font-extrabold text-[#6B5335] mb-3 md:mb-6 tracking-normal w-full px-0" style={{letterSpacing: '-0.02em', lineHeight: '1.1'}}>
                Tudo que você precisa saber para garantir que o seu Shih Tzu tenha <em className="gradient-text-accent font-extrabold">uma vida longa, feliz e saudável ao seu lado</em>
              </h3>
            </motion.div>

            {/* Diferenciais Section */}
            <motion.div
              className="md:bg-white/70 md:backdrop-blur-sm md:p-6 lg:p-8 md:rounded-2xl md:border-l-4 lg:border-l-[6px] md:border-[#8B6F47] md:shadow-md lg:shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.1 }}
            >
              <div className="space-y-1 md:space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7A9B76]" />
                  <span className="text-[#4A3823] font-medium text-xs md:text-lg">13 capítulos interativos com Quiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7A9B76]" />
                  <span className="text-[#4A3823] font-medium text-xs md:text-lg">+4 ferramentas práticas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#7A9B76]" />
                  <span className="text-[#4A3823] font-medium text-xs md:text-lg">Tudo para seu Shih Tzu</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.1 }}
            >
              <button
                data-cta="main-hero-button"
                onClick={() => window.open('https://pay.kiwify.com.br/992CSb6', '_blank')}
                className="group w-full lg:w-auto lg:min-w-[400px] bg-gradient-to-r from-[#7A9B76] via-[#6B8967] to-[#5A9A58] text-white font-bold py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-full text-sm md:text-lg lg:text-lg shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/30 relative overflow-hidden"
              >
                <span className="relative z-10 font-extrabold tracking-wide">
                  TRANSFORMAR MEU SHIH TZU
                </span>
                <div className="bg-white/25 backdrop-blur-sm px-3 py-1.5 md:px-3 md:py-1 lg:px-4 lg:py-2 rounded-full text-sm md:text-sm lg:text-base font-bold text-white border border-white/30 relative z-10">
                  R$ 37
                </div>
                <ArrowRight className="w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              </button>

              <p className="text-[#6B5335] text-xs md:text-sm lg:text-base mt-1 md:mt-3 lg:mt-4 flex items-center gap-2">
                <span className="w-2 h-2 lg:w-3 lg:h-3 bg-[#7A9B76] rounded-full animate-pulse"></span>
                Centenas de tutores já transformaram a vida dos seus pets
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
