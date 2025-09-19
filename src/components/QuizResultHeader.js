'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function QuizResultHeader() {
  const [quizData, setQuizData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Ler dados do quiz completed
    try {
      const storedData = sessionStorage.getItem('quizComplete');
      if (storedData) {
        const data = JSON.parse(storedData);
        setQuizData(data);

        // Mostrar com delay para efeito dramático
        setTimeout(() => {
          setIsVisible(true);
        }, 500);

        // Limpar dados após usar para não mostrar em futuras visitas
        setTimeout(() => {
          sessionStorage.removeItem('quizComplete');
        }, 30000); // Remove após 30 segundos
      }
    } catch (error) {
      console.error('Erro ao ler dados do quiz:', error);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: `linear-gradient(135deg, ${getSeverityColor()}15 0%, ${getSeverityColor()}25 100%)`,
        backdropFilter: 'blur(10px)',
        borderBottom: `3px solid ${getSeverityColor()}`,
        padding: '1rem 1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Resultado Principal */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            style={{
              fontSize: '2.5rem',
              animation: quizData.years_lost >= 2 ? 'pulse 2s infinite' : 'none'
            }}
          >
            {getSeverityEmoji()}
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                fontWeight: 'bold',
                color: getSeverityColor(),
                margin: '0',
                lineHeight: '1.2'
              }}
            >
              🎯 SEU RESULTADO: {quizData.name} pode perder {quizData.years_lost} anos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                color: '#374151',
                margin: '0.25rem 0 0 0',
                fontWeight: '600'
              }}
            >
              Perfil: {quizData.profile} | Conhecimento: {quizData.score}%
            </motion.p>
          </div>
        </div>

        {/* CTA Rápido */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <button
            onClick={() => {
              // Scroll suave para primeiro CTA da página
              const firstCTA = document.querySelector('[data-cta]');
              if (firstCTA) {
                firstCTA.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }
            }}
            style={{
              background: `linear-gradient(135deg, ${getSeverityColor()} 0%, ${getSeverityColor()}CC 100%)`,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
              fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            🚨 SALVAR {quizData.name} AGORA
          </button>
        </motion.div>
      </div>

      {/* Indicador de anos perdidos - visual dramático */}
      {quizData.years_lost > 0 && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 1.2, duration: 2 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '4px',
            background: `linear-gradient(90deg, ${getSeverityColor()} 0%, ${getSeverityColor()}66 ${(quizData.years_lost/15)*100}%, #E5E7EB ${(quizData.years_lost/15)*100}%, #E5E7EB 100%)`,
            borderRadius: '0 0 0.75rem 0.75rem'
          }}
        />
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </motion.div>
  );
}