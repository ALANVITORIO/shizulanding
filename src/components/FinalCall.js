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
  Shield
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
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] via-white to-[#F4EDE5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-green-200/30 to-emerald-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-br from-red-200/20 to-pink-100/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-indigo-100/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 px-6 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-5 h-5 text-orange-600" />
            <span className="text-orange-700 font-semibold text-sm tracking-[0.05em] uppercase">
              Decisão Inteligente
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C1810] mb-6 leading-tight">
            Qual é o{' '}
            <span className="gradient-text">Preço da Dúvida</span>?
          </h2>
          <p className="text-xl md:text-2xl text-[#6B5335] max-w-3xl mx-auto leading-relaxed">
            Pare de arriscar a saúde do seu Shih Tzu por causa de dúvidas
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Positive Option */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-green-200/50 p-8 md:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-green-200/30 to-emerald-100/20 rounded-full blur-xl"></div>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  R$ 37
                </h3>
                <p className="text-lg font-semibold text-green-700">
                  para ter 100% de certeza
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {[
                  { icon: <Heart className="w-5 h-5" />, text: 'Guia completo' },
                  { icon: <Calculator className="w-5 h-5" />, text: 'Calculadora de ração' },
                  { icon: <ClipboardCheck className="w-5 h-5" />, text: 'Checklist diário' },
                  { icon: <Zap className="w-5 h-5" />, text: 'Todos os bônus' },
                  { icon: <Shield className="w-5 h-5" />, text: 'Garantia de 7 dias' },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-green-50/50 rounded-xl border border-green-100/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="font-semibold text-[#2C1810]">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Negative Option */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-red-200/50 p-8 md:p-10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-red-200/30 to-pink-100/20 rounded-full blur-xl"></div>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <XCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
                  OU
                </h3>
                <p className="text-lg font-semibold text-red-700">
                  continuar apostando no achômetro...
                </p>
              </div>

              {/* Problems */}
              <div className="space-y-4">
                {[
                  { icon: <AlertTriangle className="w-5 h-5" />, text: 'Erros custosos' },
                  { icon: <Heart className="w-5 h-5" />, text: 'Pet com problemas' },
                  { icon: <DollarSign className="w-5 h-5" />, text: 'Gastos com veterinário' },
                  { icon: <AlertTriangle className="w-5 h-5" />, text: 'Dúvidas constantes' },
                  { icon: <XCircle className="w-5 h-5" />, text: 'Arrependimento' },
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-3 bg-red-50/50 rounded-xl border border-red-100/50"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      {problem.icon}
                    </div>
                    <span className="font-semibold text-[#2C1810]">{problem.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Urgency Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/10 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-orange-400" />
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  OFERTA EXPIRA EM:
                </h4>
              </div>

              <div className="flex justify-center items-center gap-4 md:gap-8 mb-4">
                {[
                  { value: timeLeft.hours, label: 'HORAS' },
                  { value: timeLeft.minutes, label: 'MINUTOS' },
                  { value: timeLeft.seconds, label: 'SEGUNDOS' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <motion.div
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-2 shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </motion.div>
                    <span className="text-sm text-gray-300 font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 mx-auto mb-6">
            <span>QUERO TER CERTEZA ABSOLUTA</span>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
              R$ 37
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[#6B5335]">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="font-semibold">Acesso imediato após o pagamento</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
