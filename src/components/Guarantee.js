'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, CheckCircle, Lock, ArrowRight, Heart } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] via-white to-[#F4EDE5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-100/20 rounded-full blur-3xl"></div>
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
            transition={{ delay: 0.1, duration: 0.3 }}
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

        {/* Main Guarantee Card */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border border-green-100/50 p-4 md:p-8 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-100/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-indigo-100/10 rounded-full blur-lg"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Shield Icon Section */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-xl">
                  <Shield
                    className="w-16 h-16 md:w-20 md:h-20 text-green-600"
                    fill="currentColor"
                  />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <CheckCircle className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
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
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
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
            transition={{ delay: 1.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-6 py-4 rounded-2xl shadow-lg">
              <Lock className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-700">
                Compra 100% segura e protegida
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-8 md:mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Urgência/Destacque */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 px-4 py-2 rounded-full mb-6 text-red-700 font-semibold text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span>⏰ Garantia por tempo limitado</span>
            </motion.div>

            {/* Botão principal redesenhado */}
            <motion.button
              className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-5 md:py-6 px-8 md:px-12 rounded-2xl text-lg md:text-xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 w-full max-w-md mx-auto flex items-center justify-center gap-3 border border-green-500/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Efeito brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <span className="relative z-10 flex-1 text-center font-black tracking-wide">
                QUERO TESTAR SEM RISCO
              </span>

              {/* Badge do preço destacado */}
              <div className="relative z-10 bg-white text-green-700 px-4 py-2 rounded-xl font-black text-lg shadow-lg">
                R$ 37
              </div>

              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.button>

            {/* Texto de segurança melhorado */}
            <motion.div
              className="mt-4 flex items-center justify-center gap-2 text-green-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Lock className="w-4 h-4" />
              <span className="text-sm font-semibold">
                🔒 Pagamento 100% Seguro | ✅ Sem Compromisso | ⚡ Acesso
                Imediato
              </span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          className="mt-8 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#E5E1DC]/50 shadow-lg max-w-2xl mx-auto">
            {/* Foto da Diva com fundo falso */}
            <motion.div
              className="relative mb-4 md:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto">
                {/* Fundo decorativo falso */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-sm scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-full"></div>

                {/* Imagem da Diva */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image
                    src="/diva.webp"
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
              transition={{ delay: 1.4, duration: 0.3 }}
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
              transition={{ delay: 1.6, duration: 0.3 }}
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
