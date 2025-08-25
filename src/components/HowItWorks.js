'use client';
import { motion } from 'framer-motion';
import {
  Smartphone,
  BookOpen,
  Calculator,
  CheckSquare,
  Play,
  ArrowRight,
} from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Acesse',
      description: 'pelo celular (2 minutos)',
      detail: 'Download instantâneo após o pagamento',
      color: 'from-[#8B6F47] to-[#A0845C]',
      bgColor: 'bg-[#FAF7F4]',
    },
    {
      number: 2,
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Leia e Revise',
      description: 'os capítulos que te interessam',
      detail: 'Faça anotações e acesse o que importa no momento',
      color: 'from-[#D4A574] to-[#8B6F47]',
      bgColor: 'bg-[#F4EDE5]',
    },
    {
      number: 3,
      icon: <Calculator className="w-6 h-6" />,
      title: 'Use a Calculadora',
      description: 'de ração hoje mesmo',
      detail: 'Resultados precisos em segundos',
      color: 'from-[#7A9B76] to-[#6B8967]',
      bgColor: 'bg-[#F0F7F0]',
    },
    {
      number: 4,
      icon: <CheckSquare className="w-6 h-6" />,
      title: 'Siga o Checklist',
      description: 'diário (viciante!)',
      detail: 'Nunca mais esqueça os cuidados essenciais',
      color: 'from-[#7A9B76] to-[#6B8967]',
      bgColor: 'bg-[#F0F7F0]',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-[#F4EDE5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-[#D4A574]/10 to-[#A0845C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#7A9B76]/10 to-[#6B8967]/5 rounded-full blur-3xl"></div>

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
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E5E1DC] px-6 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Play className="w-5 h-5 text-[#8B6F47]" />
            <span className="text-[#8B6F47] font-semibold text-sm tracking-wide">
              COMO FUNCIONA
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
            Como Funciona
          </h2>
          <p className="text-xl md:text-2xl text-[#6B5335] text-balance">
            Em 4 passos simples:
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#D4A574] to-[#A0845C]/30 z-0 transform translate-x-4"></div>
              )}

              <div
                className={`${step.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative z-10 group hover:-translate-y-2`}
              >
                {/* Step number */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center`}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-heading text-xl font-bold text-[#2C1810] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6B5335] font-medium mb-3">
                    {step.description}
                  </p>
                  <p className="text-[#6B5335] text-sm opacity-75">
                    {step.detail}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-[#8B6F47]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-white/60 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-[#E5E1DC]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="group bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 mx-auto mb-6">
                <Play className="w-5 h-5" />
                <span>VER DEMONSTRAÇÃO DE 30 SEGUNDOS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[#6B5335]">
                <Smartphone className="w-5 h-5" />
                <span>Funciona em qualquer dispositivo</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
