'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, CheckCircle, Lock, ArrowRight, Heart } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] via-white to-[#F4EDE5] relative overflow-hidden">
  {/* Background decorations */}
  {/* removed large pale green decorative circle to ensure no green shows behind the photo */}
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-blue-200/20 to-indigo-100/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
            <span className="text-green-700 font-semibold text-xs md:text-sm tracking-[0.05em] uppercase">
              Garantia Total
            </span>
          </motion.div>

          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C1810] mb-4 md:mb-6 leading-tight px-2">
            Garantia de{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Risco Zero
            </span>
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-[#6B5335] max-w-3xl mx-auto leading-relaxed px-4">
            Sua satisfação é nossa prioridade absoluta
          </p>
        </motion.div>

        {/* Rectangular image placed above the card so it's not clipped by card's rounded overflow */}
        <div className="flex justify-center -mt-8 relative z-30">
          <div className="w-full max-w-2xl">
            <Image
              src="/comprasegura.webp"
              alt="Compra 100% segura"
              width={1000}
              height={260}
              className="object-contain w-full h-auto rounded-none"
            />
          </div>
        </div>

        {/* Main Guarantee Card (no boxed appearance on mobile; boxed on md+) */}
        <motion.div
          className="bg-transparent md:bg-white/90 md:backdrop-blur-sm rounded-none md:rounded-2xl md:shadow-2xl md:border md:border-green-100/50 p-0 md:p-8 lg:p-12 relative overflow-visible md:overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements (green accent removed to ensure photo shows cleanly) */}
          {/* removed pale green decorative circle to prevent it showing behind the photo */}
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-indigo-100/10 rounded-full blur-lg"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Shield/Icon column intentionally left blank — photo moved above the title as a rectangular image */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.1 }}
              viewport={{ once: true }}
            >
              <div aria-hidden className="w-full h-full" />
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                {/* no inner image here — only the single rectangular image above the card is used */}

                <h3 className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-4">
                  Teste por 7 dias completos
                </h3>
                <p className="text-lg md:text-xl text-[#6B5335] leading-relaxed mb-6">
                  Se seu Shih Tzu não parecer mais feliz, devolvemos{' '}
                  <span className="font-bold text-green-600">R$ 37</span>{' '}
                  integralmente.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  'Sem perguntas ou justificativas',
                  'Sem burocracia ou formulários',
                  '100% do seu dinheiro de volta',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-green-50/50 rounded-xl border border-green-100/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-[#2C1810]">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Security Badge */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-6 py-4 rounded-2xl shadow-lg">
              <Lock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">
                Compra 100% segura e protegida
              </span>
            </div>
          </motion.div>

          {/* CTA SECTION - NOVO DESIGN MODERNO DE STARTUP */}
          <motion.div
            className="mt-8 md:mt-12 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Container principal com glassmorphism */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-lg mx-auto overflow-hidden">
              {/* Background gradient decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 rounded-3xl"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-200/20 rounded-full blur-2xl"></div>

              {/* Badge de urgência premium */}
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                🔥 ÚLTIMA CHANCE - OFERTA LIMITADA
              </motion.div>

              {/* Título persuasivo */}
              <div className="relative z-10 mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-2 leading-tight">
                  Transforme seu Shih Tzu em
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {' '}
                    7 dias
                  </span>
                </h3>
                <p className="text-gray-600 font-medium text-base md:text-lg">
                  ou receba 100% do seu dinheiro de volta
                </p>
              </div>

              {/* BOTÃO OVAL CLÁSSICO - CONTRASTE MELHORADO */}
              <motion.button
                onClick={() => window.open('https://pay.kiwify.com.br/992CSb6', '_blank')}
                className="w-full max-w-md mx-auto bg-gradient-to-b from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:from-green-700 active:to-green-800 text-white font-black py-5 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-200 mb-4 text-xl border-4 border-gray-900 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Brilho superior do botão clássico - mais forte */}
                <div className="absolute top-1 left-4 right-4 h-4 bg-white/60 rounded-full blur-sm"></div>

                <div className="relative z-10 flex items-center justify-center gap-4">
                  {/* Círculo com preço - contraste melhorado */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-3 border-gray-800 shadow-xl">
                    <span className="text-gray-900 font-black text-sm">
                      R$37
                    </span>
                  </div>

                  {/* Texto COMPRAR - contraste melhorado */}
                  <span className="font-black text-2xl tracking-widest drop-shadow-lg text-white">
                    COMPRAR
                  </span>
                </div>

                {/* Efeito de pressão mais visível */}
                <div className="absolute inset-0 bg-black/30 rounded-full opacity-0 group-active:opacity-100 transition-opacity duration-100"></div>
              </motion.button>

              {/* Trust badges modernos */}
              <div className="relative z-10 grid grid-cols-3 gap-2 text-xs font-semibold">
                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-2 rounded-lg border border-green-200/50">
                  <Shield className="w-3 h-3" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-2 rounded-lg border border-blue-200/50">
                  <CheckCircle className="w-3 h-3" />
                  <span>Garantido</span>
                </div>
                <div className="flex items-center gap-1 bg-purple-50 text-purple-700 px-2 py-2 rounded-lg border border-purple-200/50">
                  <Lock className="w-3 h-3" />
                  <span>Protegido</span>
                </div>
              </div>

              {/* Linha de benefício final */}
              <motion.p
                className="relative z-10 mt-4 text-sm text-gray-600 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                ⚡ <strong>Centenas de tutores</strong> já transformaram seus
                Shih Tzus
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          className="mt-8 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#E5E1DC]/50 shadow-lg max-w-2xl mx-auto">
            {/* Foto da Diva com fundo falso */}
            <motion.div
              className="relative mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto">
                {/* Fundo decorativo falso */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-sm scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-full"></div>

                {/* Imagem da Diva */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/ctadiva.webp"
                    alt="Eva - Especialista em Shih Tzu"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                </div>

                {/* Badge de verificação */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Heart
                    className="w-3 h-3 md:w-4 md:h-4 text-white"
                    fill="currentColor"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-[#6B5335] font-medium italic text-sm md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              viewport={{ once: true }}
            >
              &ldquo;Sua satisfação é nossa prioridade. Queremos que você e seu
              Shih Tzu sejam completamente felizes!&rdquo;
            </motion.p>

            {/* Nome da especialista */}
            <motion.div
              className="mt-3 text-[#8B6F47] font-semibold text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <span>Eva</span>
              <span className="text-[#6B5335] font-normal ml-2">
                • Especialista em Shih Tzu
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
