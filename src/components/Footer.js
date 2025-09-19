'use client';
import { motion } from 'framer-motion';
import { Heart, Shield, Smartphone, Clock } from 'lucide-react';

export default function Footer() {
  const features = [
    {
      icon: <Shield className="w-4 h-4" />,
      text: 'Compra segura',
    },
    {
      icon: <Heart className="w-4 h-4" />,
      text: 'Satisfação garantida',
    },
    {
      icon: <Smartphone className="w-4 h-4" />,
      text: 'Suporte 24h',
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: 'Acesso imediato',
    },
  ];

  return (
    <footer className="py-12 bg-gradient-to-br from-[#2C1810] to-[#4A3823] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B6F47] via-[#D4A574] to-[#7A9B76]"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#D4A574]/10 to-[#A0845C]/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-[#7A9B76]/10 to-[#6B8967]/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Main Content */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo Section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D4A574] to-[#A0845C] rounded-2xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            <div className="text-left">
              <h3 className="font-display text-2xl font-bold text-white">
                Guia Interativo Shih Tzu
              </h3>
              <p className="text-[#D4A574] text-sm font-medium">
                O manual mais completo para tutores de Shih Tzu
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#D4A574]">{feature.icon}</div>
                <span className="text-white/90 text-sm font-medium">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-white/80 text-sm">
              &copy; 2025 Guia Interativo Shih Tzu &mdash; Acesso imediato após
              pagamento
            </p>

            <div className="flex items-center justify-center gap-6 text-xs text-white/60">
              <span>Política de Privacidade</span>
              <span>•</span>
              <span>Termos de Uso</span>
              <span>•</span>
              <span>Contato</span>
            </div>

            {/* CTA removed as requested */}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
