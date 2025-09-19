'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function QuizResultSection() {
  const [quizData, setQuizData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ler dados do quiz completed
    try {
      const storedData = sessionStorage.getItem('quizComplete');
      if (storedData) {
        const data = JSON.parse(storedData);
        setQuizData(data);
        setIsVisible(true);

        // Limpar dados após usar (24 horas)
        setTimeout(() => {
          sessionStorage.removeItem('quizComplete');
        }, 86400000);
      }
    } catch (error) {
      console.error('Erro ao ler dados do quiz:', error);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  if (!quizData || !isVisible) return null;

  const getSeverityColor = () => {
    if (quizData.years_lost >= 5) return '#DC2626'; // Vermelho
    if (quizData.years_lost >= 2) return '#D97706'; // Laranja
    return '#059669'; // Verde
  };

  const getSeverityEmoji = () => {
    if (quizData.years_lost >= 5) return '🚨';
    if (quizData.years_lost >= 2) return '⚠️';
    return '✅';
  };

  const getSeverityTitle = () => {
    if (quizData.years_lost >= 5) return 'SITUAÇÃO CRÍTICA';
    if (quizData.years_lost >= 2) return 'ATENÇÃO NECESSÁRIA';
    return 'PARABÉNS';
  };

  // Layout mobile ultra-compacto
  if (isMobile) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full py-2"
        style={{
          background: `linear-gradient(135deg, ${getSeverityColor()}15 0%, ${getSeverityColor()}25 100%)`,
          borderBottom: `3px solid ${getSeverityColor()}`
        }}
      >
        <div className="max-w-sm mx-auto px-3">
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            style={{ border: `2px solid ${getSeverityColor()}` }}
          >
            {/* Header compacto */}
            <div
              className="px-3 py-2 text-white text-center"
              style={{ background: `linear-gradient(135deg, ${getSeverityColor()} 0%, ${getSeverityColor()}DD 100%)` }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg">{getSeverityEmoji()}</span>
                <h1 className="text-sm font-bold">{getSeverityTitle()}</h1>
              </div>
            </div>

            {/* Conteúdo ultra-compacto */}
            <div className="px-3 py-3">
              {/* Linha única com info principal */}
              <div className="flex items-center justify-between mb-2">
                <div className="text-center">
                  <div className="text-lg font-bold" style={{ color: getSeverityColor() }}>
                    {quizData.years_lost} anos
                  </div>
                  <div className="text-xs text-gray-600">podem ser perdidos</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold" style={{ color: getSeverityColor() }}>
                    {quizData.score}%
                  </div>
                  <div className="text-xs text-gray-600">conhecimento</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-700 font-semibold">
                    {quizData.profile}
                  </div>
                  <div className="text-xs text-gray-600">perfil</div>
                </div>
              </div>

              {/* CTA compacto */}
              <button
                onClick={() => {
                  const firstCTA = document.querySelector('[data-cta="main-hero-button"]');
                  if (firstCTA) {
                    firstCTA.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="w-full py-2 px-3 rounded-md font-bold text-sm text-white transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${getSeverityColor()} 0%, ${getSeverityColor()}CC 100%)` }}
              >
                🎯 SALVAR {quizData.name.toUpperCase()}
              </button>

              <p className="text-center text-xs text-gray-500 mt-1">
                Veja como pode reverter isso ↓
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  // Layout desktop (mantém o original)
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full py-4 md:py-6"
      style={{
        background: `linear-gradient(135deg, ${getSeverityColor()}10 0%, ${getSeverityColor()}20 100%)`,
        borderBottom: `4px solid ${getSeverityColor()}`
      }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div
          className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden"
          style={{
            border: `3px solid ${getSeverityColor()}`
          }}
        >
          {/* Header com resultado */}
          <div
            className="px-4 md:px-6 py-4 md:py-5 text-white text-center"
            style={{
              background: `linear-gradient(135deg, ${getSeverityColor()} 0%, ${getSeverityColor()}CC 100%)`
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="text-2xl md:text-3xl mb-2"
            >
              {getSeverityEmoji()}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-2xl font-bold mb-1"
            >
              {getSeverityTitle()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm md:text-base opacity-90"
            >
              Resultado do seu quiz sobre {quizData.name}
            </motion.p>
          </div>

          {/* Conteúdo principal */}
          <div className="px-4 md:px-6 py-4 md:py-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

              {/* Lado esquerdo - Resultado principal */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="mb-4">
                  <p className="text-sm md:text-base text-gray-600 mb-1">
                    Com seus conhecimentos atuais:
                  </p>
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: getSeverityColor() }}
                  >
                    {quizData.years_lost} anos
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold">
                    podem ser perdidos da vida de {quizData.name}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div
                        className="text-xl md:text-2xl font-bold"
                        style={{ color: getSeverityColor() }}
                      >
                        {quizData.score}%
                      </div>
                      <p className="text-sm md:text-base text-gray-600">Conhecimento</p>
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-gray-700">
                        {quizData.profile}
                      </div>
                      <p className="text-sm md:text-base text-gray-600">Seu perfil</p>
                    </div>
                  </div>
                </div>

                {/* Urgência */}
                <div
                  className="bg-opacity-10 rounded-lg p-3 md:p-4 border-2"
                  style={{
                    backgroundColor: `${getSeverityColor()}15`,
                    borderColor: getSeverityColor()
                  }}
                >
                  <p
                    className="font-bold text-sm md:text-base text-center"
                    style={{ color: getSeverityColor() }}
                  >
                    🎯 A boa notícia: Você pode reverter isso HOJE!
                  </p>
                </div>
              </motion.div>

              {/* Lado direito - Chamada para ação */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <div className="text-center lg:text-left mb-4">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    Quer que {quizData.name} viva todos os 15 anos?
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    O mesmo método que você acabou de experimentar pode ensinar
                    <strong> tudo</strong> sobre cuidados com Shih Tzus.
                  </p>
                </div>

                {/* CTA Principal */}
                <button
                  onClick={() => {
                    // Scroll para o primeiro CTA da página
                    const firstCTA = document.querySelector('[data-cta="main-hero-button"]');
                    if (firstCTA) {
                      firstCTA.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                      });
                    }
                  }}
                  className="w-full py-3 md:py-4 px-4 md:px-6 rounded-lg font-bold text-base md:text-lg text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${getSeverityColor()} 0%, ${getSeverityColor()}CC 100%)`
                  }}
                >
                  🚨 SALVAR {quizData.name.toUpperCase()} AGORA
                </button>

                <p className="text-center text-xs md:text-sm text-gray-500 mt-2">
                  Clique para ver como o Sistema Eva pode ajudar
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}