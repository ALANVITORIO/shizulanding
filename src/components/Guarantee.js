'use client';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Lock, ArrowRight, Heart } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] via-white to-[#F4EDE5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-blue-200/20 to-indigo-100/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/50 px-6 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.1 }}
            viewport={{ once: true }}
          >
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold text-sm tracking-[0.05em] uppercase">
              Garantia Total
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
            Garantia de{' '}
            <span className="gradient-text">Risco Zero</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#6B5335] max-w-3xl mx-auto leading-relaxed">
            Sua satisfação é nossa prioridade absoluta
          </p>
        </motion.div>

        {/* Main Guarantee Card */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-100/50 p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
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
                  <Shield className="w-16 h-16 md:w-20 md:h-20 text-green-600" fill="currentColor" />
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
                  <span className="font-bold text-green-600">R$ 37</span> integralmente.
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
                    <span className="font-semibold text-[#2C1810]">{benefit}</span>
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
              <span className="font-semibold text-blue-700">Compra 100% segura e protegida</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="group bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 mx-auto">
              <span>QUERO TESTAR SEM RISCO</span>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                R$ 37
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E5E1DC]/50 shadow-lg max-w-2xl mx-auto">
            <Heart className="w-6 h-6 text-red-500 mx-auto mb-3" fill="currentColor" />
            <p className="text-[#6B5335] font-medium italic text-lg leading-relaxed">
              &ldquo;Sua satisfação é nossa prioridade. Queremos que você e seu Shih Tzu sejam completamente felizes!&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
