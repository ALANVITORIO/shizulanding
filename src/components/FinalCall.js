'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  XCircle,
  Clock,
  ArrowRight,
  Zap,
  DollarSign,
  AlertTriangle,
  Heart,
  Calculator,
  ClipboardCheck,
  Shield,
  Lock,
} from 'lucide-react';

export default function FinalCall() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 31,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] via-white to-[#F4EDE5] relative overflow-hidden">
      {/* Background decorations - otimizado mobile */}
      <div className="absolute top-10 md:top-20 left-4 md:left-10 w-20 md:w-40 h-20 md:h-40 bg-gradient-to-br from-green-200/20 to-emerald-100/10 rounded-full blur-2xl md:blur-3xl"></div>
      <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-32 md:w-60 h-32 md:h-60 bg-gradient-to-br from-red-200/15 to-pink-100/5 rounded-full blur-2xl md:blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header otimizado mobile */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
            <span className="text-orange-700 font-semibold text-xs md:text-sm tracking-[0.05em] uppercase">
              Decisão Inteligente
            </span>
          </motion.div>

          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C1810] mb-4 md:mb-6 leading-tight px-2">
            Qual é o{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Preço da Dúvida
            </span>
            ?
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-[#6B5335] max-w-3xl mx-auto leading-relaxed px-4">
            Pare de arriscar a saúde do seu Shih Tzu por causa de dúvidas
          </p>
        </motion.div>

        {/* Comparison Cards - otimizado mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mb-8 md:mb-16">
          {/* Positive Option */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border-2 border-green-200/50 p-4 md:p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative elements menores */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-green-200/20 to-emerald-100/10 rounded-full blur-lg md:blur-xl"></div>

              {/* Header compacto */}
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  R$ 37
                </h3>
                <p className="text-base md:text-lg font-semibold text-green-700">
                  para ter 100% de certeza
                </p>
              </div>

              {/* Benefits compactos */}
              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    icon: <Heart className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Guia completo',
                  },
                  {
                    icon: <Calculator className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Calculadora de ração',
                  },
                  {
                    icon: <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Checklist diário',
                  },
                  {
                    icon: <Zap className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Todos os bônus',
                  },
                  {
                    icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Garantia de 7 dias',
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 p-2 md:p-3 bg-green-50/50 rounded-xl border border-green-100/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                      {benefit.icon}
                    </div>
                    <span className="font-semibold text-[#2C1810] text-sm md:text-base">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Negative Option */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl border-2 border-red-200/50 p-4 md:p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative elements menores */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-16 md:h-16 bg-gradient-to-br from-red-200/20 to-pink-100/10 rounded-full blur-lg md:blur-xl"></div>

              {/* Header compacto */}
              <div className="text-center mb-6 md:mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <XCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-2">
                  OU
                </h3>
                <p className="text-base md:text-lg font-semibold text-red-700">
                  continuar apostando no achômetro...
                </p>
              </div>

              {/* Problems compactos */}
              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    icon: <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Erros custosos',
                  },
                  {
                    icon: <Heart className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Pet com problemas',
                  },
                  {
                    icon: <DollarSign className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Gastos com veterinário',
                  },
                  {
                    icon: <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Dúvidas constantes',
                  },
                  {
                    icon: <XCircle className="w-4 h-4 md:w-5 md:h-5" />,
                    text: 'Arrependimento',
                  },
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 p-2 md:p-3 bg-red-50/50 rounded-xl border border-red-100/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                      {problem.icon}
                    </div>
                    <span className="font-semibold text-[#2C1810] text-sm md:text-base">
                      {problem.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgency Section - otimizado mobile */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative elements menores */}
            <div className="absolute top-3 right-3 md:top-6 md:right-6 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-lg md:blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
                <h4 className="text-lg md:text-2xl lg:text-3xl font-bold text-white">
                  OFERTA EXPIRA EM:
                </h4>
              </div>

              <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-8 mb-3 md:mb-4">
                {[
                  { value: timeLeft.hours, label: 'HORAS' },
                  { value: timeLeft.minutes, label: 'MINUTOS' },
                  { value: timeLeft.seconds, label: 'SEGUNDOS' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-1 md:mb-2 shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                    >
                      <span className="text-lg md:text-2xl lg:text-3xl font-bold text-white">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </motion.div>
                    <span className="text-xs md:text-sm text-gray-300 font-semibold">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - ESTILO COPIADO DA GUARANTEE */}
        <motion.div
          className="text-center relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Container principal com glassmorphism */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-lg mx-auto overflow-hidden mb-6 md:mb-8">
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
          </div>

          {/* Final urgency message */}
          <motion.div
            className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-200/50 rounded-xl p-4 max-w-lg mx-auto"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-black text-orange-800 text-base md:text-lg">
                ⚠️ ÚLTIMAS VAGAS COM DESCONTO!
              </span>
            </div>
            <p className="text-sm md:text-base text-orange-700 font-semibold">
              Após o tempo esgotar, volta ao preço normal de R$ 97
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
