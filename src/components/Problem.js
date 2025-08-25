'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Heart, TrendingDown } from 'lucide-react';
import Image from 'next/image';

export default function Problem() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Alimentar seu aumiguinho errado',
      consequence: 'Pode causar obesidade e problemas digestivos',
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: 'Reforçar comportamento ruim',
      consequence: 'Cria hábitos difíceis de quebrar',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Encurtar significativamente a vida do seu pet',
      consequence: 'Menos tempo com quem você mais ama',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-red-100/30 to-orange-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-red-50/40 to-orange-50/30 rounded-full blur-2xl"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Sad overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent rounded-3xl z-10"></div>

              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/saddog/500/400.jpg"
                  alt="Shih Tzu precisando de cuidados adequados"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay badge */}
                <div className="absolute bottom-6 left-6 bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-semibold text-sm">
                      Precisa de ajuda
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating warning */}
              <motion.div
                className="absolute -top-4 -right-4 bg-red-100 border-2 border-red-200 rounded-2xl p-4 shadow-xl"
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-center">
                  <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-red-700 font-semibold text-sm">
                    Sinais de alerta
                  </p>
                  <p className="text-red-600 text-xs">
                    que você pode estar perdendo
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header Badge */}
            <motion.div
              className="inline-flex items-center gap-3 bg-red-50 border border-red-200 px-6 py-3 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-red-700 font-semibold text-sm tracking-wide">
                  DIVA FALANDO
                </p>
                <p className="text-red-600 text-xs">A verdade que dói...</p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C1810] leading-tight mb-6 text-balance">
                Mesmo <span className="text-red-600">amando</span> o seu peludo,
                você pode estar cometendo esses erros...
              </h2>
            </motion.div>

            {/* Problems List */}
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shrink-0">
                      {problem.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-[#2C1810] mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-[#6B5335] text-sm leading-relaxed">
                        {problem.consequence}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emotional Appeal */}
            <motion.div
              className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">😢</div>
                <p className="text-[#2C1810] font-semibold text-lg mb-2">
                  Você não sabia... mas seu Shih Tzu sente a diferença!
                </p>
                <p className="text-[#6B5335] text-sm">
                  Cada erro pode estar afetando a felicidade e saúde do seu
                  melhor amigo
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
