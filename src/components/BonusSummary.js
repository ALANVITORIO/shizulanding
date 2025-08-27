'use client';
import { motion } from 'framer-motion';
import {
  Calculator,
  ClipboardCheck,
  TrendingUp,
  FileText,
  ArrowRight,
  Shield,
} from 'lucide-react';

export default function BonusSummary() {
  const bonuses = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Calculadora de Ração",
      price: "R$ 47",
      description: "Calcule a quantidade perfeita de ração baseada no peso, idade e atividade do seu pet"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Checklist Diário",
      price: "R$ 39",
      description: "Lista inteligente de cuidados diários que se adapta ao perfil do seu Shih Tzu"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Gráfico de Crescimento",
      price: "R$ 59",
      description: "Acompanhe visualmente o desenvolvimento saudável do seu companheiro"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Bloco de Anotações",
      price: "R$ 34",
      description: "Registre tudo sobre seu pet - comportamentos, vacinas, consultas veterinárias"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-[#F4EDE5] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-[#D4A574]/10 to-[#A0845C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#7A9B76]/10 to-[#6B8967]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C1810] mb-4">
            Sistema Completo de Acompanhamento
          </h2>
          <p className="text-lg text-[#6B5335]">
            Tudo que você precisa para cuidar do seu Shih Tzu como um profissional, 
            <span className="font-semibold"> sem gastar uma fortuna</span>
          </p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E5E1DC] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B6F47] to-[#A0845C] rounded-xl flex items-center justify-center text-white shadow-md">
                    {bonus.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C1810] text-lg mb-1">{bonus.title}</h3>
                    <p className="text-[#6B5335] text-sm">{bonus.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-base line-through text-gray-500 block">{bonus.price}</span>
                  <span className="text-xl font-bold text-[#7A9B76]">GRÁTIS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-[#F0F7F0]/80 backdrop-blur-sm rounded-2xl border-2 border-[#7A9B76]/20 p-6 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-2xl font-bold text-[#6B8967] mb-2">
            <span className="line-through text-gray-500 text-lg mr-2">R$ 179</span>
            <span>TOTAL: GRÁTIS</span>
          </div>
          <p className="text-[#6B5335] font-medium">
            Você economiza R$ 179 com estes 4 bônus exclusivos!
          </p>
        </motion.div>

        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E5E1DC]">
              <div className="text-3xl font-bold text-[#8B6F47] mb-1">13</div>
              <div className="text-[#6B5335] font-medium">Capítulos Completos</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E5E1DC]">
              <div className="text-3xl font-bold text-[#8B6F47] mb-1">4</div>
              <div className="text-[#6B5335] font-medium">Bônus Exclusivos</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#E5E1DC]">
              <div className="text-3xl font-bold text-[#8B6F47] mb-1">R$ 179</div>
              <div className="text-[#6B5335] font-medium">Economizados</div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-[#D4A574]/30 p-6 mb-8 text-center">
            <div className="text-lg text-[#6B5335] mb-2">Valor Normal</div>
            <div className="text-3xl line-through text-[#6B5335]/60 mb-2">R$ 179</div>
            <div className="text-5xl font-bold text-[#8B6F47] mb-3">R$ 37</div>
            <div className="text-xl text-[#D4A574] font-bold">APENAS HOJE!</div>
          </div>

          <button className="group bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-white font-bold py-5 px-8 rounded-full text-xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 mx-auto mb-4">
            <span>QUERO RECEBER TUDO POR R$ 37</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[#6B5335] text-sm">
            <Shield className="w-4 h-4 text-[#7A9B76]" />
            <span className="font-medium">100% Seguro • Sem compromisso • Acesso imediato</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}