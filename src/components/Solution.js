'use client';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Calculator,
  ClipboardCheck,
  TrendingUp,
  BookOpen,
  Users,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';

export default function Solution() {
  const mainBenefits = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Apertar 1 botão',
      description: 'e saber a quantidade EXATA de ração (em gramas)',
      color: 'from-[#7A9B76] to-[#6B8967]',
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: 'Marcar um checklist',
      description: 'e NUNCA mais esquecer a limpeza dos olhos',
      color: 'from-[#D4A574] to-[#A0845C]',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Ver seu filhote crescer',
      description: 'dentro da curva ideal (sem surpresas no vet)',
      color: 'from-[#7A9B76] to-[#6B8967]',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Tirar dúvidas de treinamento',
      description: 'como treinar seu Pet de forma eficaz',
      color: 'from-[#D4A574] to-[#A0845C]',
    },
  ];

  const additionalFeatures = [
    {
      title: 'Descobrir comportamentos',
      description: 'porque ele se comporta de tal jeito',
      accent: 'border-[#8B6F47]',
    },
    {
      title: 'Escolher filhote',
      description: 'saber como escolher um filhote',
      accent: 'border-[#7A9B76]',
    },
    {
      title: 'E MUITO MAIS',
      description: 'conteúdo exclusivo',
      accent: 'border-[#D4A574]',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-gradient-to-br from-[#7A9B76]/10 to-[#6B8967]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#D4A574]/10 to-[#A0845C]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-[#F0F7F0] border border-[#7A9B76]/30 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CheckCircle className="w-5 h-5 text-[#7A9B76]" />
            <span className="text-[#7A9B76] font-semibold text-sm tracking-wide">
              A TRANSFORMAÇÃO
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
            A Promessa
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2C1810] text-balance">
            Imagine Se Você Pudesse...
          </h3>
        </motion.div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="card-elevated p-8 hover:shadow-2xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-heading text-xl font-bold text-[#2C1810] mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-[#6B5335] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="w-full h-1 bg-[#E5E1DC] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${benefit.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.1 }}
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white border-2 ${feature.accent} p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              whileHover={{ scale: 1.02 }}
            >
              <h5 className="font-heading text-lg font-semibold gradient-text mb-2">
                {feature.title}
              </h5>
              <p className="text-[#6B5335] text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-6 text-balance">
              Isso é exatamente o que o Guia Interativo faz por você.
            </h3>

            <p className="text-[#6B5335] text-lg mb-12 text-balance">
              Transforme a relação com seu Shih Tzu em questão de dias, não
              meses.
            </p>

            <Image
              src="/ctadiva.webp"
              alt="Shih Tzu feliz e saudável"
              width={300}
              height={200}
              className="mx-auto mb-12"
              priority={false}
            />

            <div className="flex flex-col gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-[#7A9B76] to-[#6B8967] text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
                <span>QUERO COMEÇAR AGORA</span>
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                  R$ 37
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="flex items-center gap-2 text-[#6B5335] text-sm">
                <Users className="w-4 h-4" />
                <span>Junte-se a +500 tutores satisfeitos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
