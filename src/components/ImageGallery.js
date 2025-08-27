'use client';
import { motion } from 'framer-motion';
import { Camera, Palette, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ImageGallery() {
  // Array para suas imagens - você pode facilmente substituir
  const galleryImages = [
    {
      src: 'https://picsum.photos/seed/shihtzu1/600/400.jpg',
      alt: 'Shih Tzu feliz e bem cuidado',
      caption: 'Resultado com alimentação correta',
      tag: 'Antes & Depois',
    },
    {
      src: 'https://picsum.photos/seed/shihtzu2/600/600.jpg',
      alt: 'Shih Tzu durante o banho',
      caption: 'Cuidados de higiene adequados',
      tag: 'Rotina',
    },
    {
      src: 'https://picsum.photos/seed/shihtzu3/600/400.jpg',
      alt: 'Shih Tzu brincando',
      caption: 'Pet ativo e saudável',
      tag: 'Exercícios',
    },
    {
      src: 'https://picsum.photos/seed/shihtzu4/600/500.jpg',
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
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
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
                <div className="image-overlay group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Sua arte vai aqui */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={index === 1 ? 600 : 400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay com informações */}
                <div className="image-content">
                  {/* Tag */}
                  <div className="absolute top-4 left-4 bg-[#8B6F47] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {image.tag}
                  </div>

                  {/* Caption no hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold mb-1">
                      {image.caption}
                    </h3>
                    <p className="text-white/80 text-sm">
                      Resultado comprovado
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção de Arte de Fundo Destacada */}
        <motion.div
          className="section-art-container rounded-3xl overflow-hidden mb-16"
          style={{
            backgroundImage:
              'url("https://picsum.photos/seed/hero-bg/1200/600.jpg")',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-art-overlay flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-8">
              <Palette className="w-16 h-16 mx-auto mb-6 text-[#D4A574]" />
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Espaço Reservado Para Sua Arte Principal
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Aqui você pode colocar sua ilustração principal, logo, ou
                qualquer arte que represente seu produto
              </p>
              <div className="flex justify-center gap-4">
                <Sparkles className="w-6 h-6 text-[#D4A574]" />
                <span className="text-[#D4A574] font-semibold">
                  Arte personalizada aqui
                </span>
                <Sparkles className="w-6 h-6 text-[#D4A574]" />
              </div>
            </div>
          </div>
        </motion.div>

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
