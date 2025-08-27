'use client';
import { motion } from 'framer-motion';
import { Camera, Palette, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ImageGallery() {
  // Array para suas imagens - você pode facilmente substituir
  const galleryImages = [
    {
      src: '/transformacao1.webp',
      alt: 'Shih Tzu feliz e bem cuidado',
      caption: 'Resultado com alimentação correta',
      tag: 'Antes & Depois',
    },
    {
      src: '/transformacao2.webp',
      alt: 'Shih Tzu durante o banho',
      caption: 'Cuidados de higiene adequados',
      tag: 'Rotina',
    },
    {
      src: '/transformacao3.webp',
      alt: 'Shih Tzu brincando',
      caption: 'Pet ativo e saudável',
      tag: 'Exercícios',
    },
    {
      src: '/transformacao4.webp',
      alt: 'Shih Tzu com tutor',
      caption: 'Vínculo fortalecido',
      tag: 'Relacionamento',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      {/* Background decorativo para suas artes */}
      <div
        className="absolute inset-0 bg-art-primary"
        style={{
          backgroundImage:
            'url("https://picsum.photos/seed/background1/1920/1080.jpg")',
        }}
      >
        <div className="bg-art-overlay-light absolute inset-0"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-[#E5E1DC] px-6 py-3 rounded-full mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Camera className="w-5 h-5 text-[#8B6F47]" />
            <span className="text-[#8B6F47] font-semibold text-sm tracking-wide">
              GALERIA DE TRANSFORMAÇÕES
            </span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
            Veja as Transformações
          </h2>
          <p className="text-xl text-[#6B5335] text-balance max-w-2xl mx-auto">
            Resultados reais de tutores que seguiram nosso guia
          </p>
        </motion.div>

        {/* Grid de Imagens Otimizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Container da imagem com aspect ratio otimizado */}
              <div
                className={
                  index === 1
                    ? 'image-container-square'
                    : 'image-container-standard'
                }
              >
                <div className="image-overlay"></div>

                {/* Sua arte vai aqui */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={index === 1 ? 600 : 400}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards Menores para Artes Complementares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="card-art-container"
              style={{
                backgroundImage: `url("https://picsum.photos/seed/card${item}/400/300.jpg")`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-art-overlay-light h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <h4 className="font-heading text-xl font-bold text-[#2C1810] mb-2">
                    Arte Complementar {item}
                  </h4>
                  <p className="text-[#6B5335] text-sm">
                    Espaço para elementos visuais secundários
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
