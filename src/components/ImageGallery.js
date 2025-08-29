'use client';
import { motion } from 'framer-motion';
import { Camera, Palette, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMobileOptimizations } from '../hooks/useMobileOptimizations';
import { mobileVariants } from '../utils/mobileAnimations';

export default function ImageGallery() {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const { isMobile, reducedMotion } = useMobileOptimizations();

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

  // Configurações de animação baseadas no dispositivo e preferências
  const animationConfig = {
    duration: reducedMotion ? 0 : isMobile ? 0.3 : 0.5,
    ease: isMobile ? 'easeOut' : [0.25, 0.46, 0.45, 0.94],
  };

  return (
    <section
      ref={elementRef}
      className="py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden"
    >
      {/* Background decorativo para suas artes - otimizado para mobile */}
      <div
        className="absolute inset-0 bg-art-primary opacity-30 md:opacity-50"
        style={{
          backgroundImage:
            'url("https://picsum.photos/seed/background1/1920/1080.jpg")',
        }}
      >
        <div className="bg-art-overlay-light absolute inset-0"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header removed per request - gallery grid begins below */}

        {/* Grid de Imagens Otimizado para mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: isMobile ? 25 : 50 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ ...animationConfig, delay: index * 0.1 }}
            >
              {/* Container da imagem com aspect ratio otimizado */}
              <div
                className={`relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 1 ? 'aspect-square' : 'aspect-[4/3] md:aspect-[3/2]'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  style={{ willChange: 'transform' }}
                />

                {/* Overlay com informações - otimizado para mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full text-white text-xs md:text-sm font-medium mb-2">
                      {image.tag}
                    </div>
                    <p className="text-white font-semibold text-sm md:text-base leading-tight">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cards com conteúdo sobre Shih Tzu - otimizada para mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div
            className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ ...animationConfig, delay: 0.1 }}
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/shi1.webp"
                alt="Alimentação do Shih Tzu"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <h4 className="text-white font-bold text-base md:text-lg p-4 md:p-6 leading-tight">
                  Aprenda tudo sobre a alimentação do seu Shih Tzu
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ ...animationConfig, delay: 0.2 }}
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/shi2.webp"
                alt="Cuidados médicos do Shih Tzu"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <h4 className="text-white font-bold text-base md:text-lg p-4 md:p-6 leading-tight">
                  Aprenda tudo sobre cuidados médicos do seu Shih Tzu
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ ...animationConfig, delay: 0.3 }}
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/shi3.webp"
                alt="Truques para Shih Tzu"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <h4 className="text-white font-bold text-base md:text-lg p-4 md:p-6 leading-tight">
                  Quem disse que Shih Tzu não aprende truques. Aprenda técnicas
                  milenares de ensino
                </h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
