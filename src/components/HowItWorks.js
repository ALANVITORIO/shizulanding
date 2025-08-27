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
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-[#E5E1DC] px-6 py-3 rounded-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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

          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6 relative">
            Como Funciona
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#D4A574] to-[#A0845C] rounded-full"></div>
          </h2>
          <p className="text-xl md:text-2xl text-[#6B5335] text-balance font-medium">
            Em 4 passos simples:
          </p>
        </motion.div>

        {/* Roadmap Journey */}
        <div className="relative max-w-6xl mx-auto">
          {/* Journey path line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#D4A574] via-[#8B6F47] to-[#7A9B76] rounded-full" style={{height: 'calc(100% - 80px)', top: '40px'}}></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-center mb-20 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Journey node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 top-1/2">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl border-4 border-white`}
                >
                  {step.number}
                </div>
              </div>
              
              {/* Content card - Left side */}
              {index % 2 === 0 && (
                <div className="w-5/12 mr-auto pr-12">
                  <div
                    className={`${step.bgColor} p-8 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative`}
                  >
                    {/* Icon */}
                    <div className="flex justify-start mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-left">
                      <h3 className="font-heading text-2xl font-bold text-[#2C1810] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#6B5335] font-semibold mb-4 text-lg">
                        {step.description}
                      </p>
                      <p className="text-[#6B5335] text-base opacity-80 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    
                    {/* Journey arrow */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 -right-6">
                      <ArrowRight className="w-8 h-8 text-[#8B6F47]" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Content card - Right side */}
              {index % 2 === 1 && (
                <div className="w-5/12 ml-auto pl-12">
                  <div
                    className={`${step.bgColor} p-8 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative`}
                  >
                    {/* Icon */}
                    <div className="flex justify-start mb-6">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-left">
                      <h3 className="font-heading text-2xl font-bold text-[#2C1810] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#6B5335] font-semibold mb-4 text-lg">
                        {step.description}
                      </p>
                      <p className="text-[#6B5335] text-base opacity-80 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                    
                    {/* Journey arrow */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 -left-6">
                      <ArrowRight className="w-8 h-8 text-[#8B6F47] rotate-180" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center bg-white/60 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-[#E5E1DC] relative overflow-hidden mt-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4 w-32 h-32 bg-gradient-to-br from-[#D4A574] to-[#A0845C] rounded-full blur-2xl"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 bg-gradient-to-br from-[#7A9B76] to-[#6B8967] rounded-full blur-xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="group bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 mx-auto mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                <Play className="w-5 h-5 relative z-10" />
                <span className="relative z-10">VER DEMONSTRAÇÃO DE 30 SEGUNDOS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
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
