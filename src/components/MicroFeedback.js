'use client';
import { useEffect, useState } from 'react';

export default function MicroFeedback({ answer, petName, onComplete }) {
  const [showImpact, setShowImpact] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const isCorrect = answer.impact >= 0;
  const yearsImpact = Math.abs(answer.impact);

  useEffect(() => {
    // Sequence of reveals
    const timer1 = setTimeout(() => setShowImpact(true), 300);
    const timer2 = setTimeout(() => setShowDetails(true), 800);
    const timer3 = setTimeout(() => onComplete?.(), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        padding: '2rem',
        maxWidth: '90vw',
        width: '32rem',
        textAlign: 'center',
        transform: showImpact ? 'scale(1)' : 'scale(0.8)',
        transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }}>
        {/* Initial Reaction */}
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem',
          animation: isCorrect ? 'bounce 0.6s ease' : 'shake 0.6s ease'
        }}>
          {isCorrect ? '🎉' : '💔'}
        </div>

        {/* Immediate Impact */}
        {showImpact && (
          <div style={{
            animation: 'slideUp 0.5s ease',
            marginBottom: '1rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: isCorrect ? '#10B981' : '#DC2626',
              marginBottom: '0.5rem'
            }}>
              {isCorrect ? `${petName} ganhou ${yearsImpact} anos! 🌟` : `${petName} perdeu ${yearsImpact} anos... 😢`}
            </h3>

            {/* Visual Years Impact */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.25rem',
              marginBottom: '1rem'
            }}>
              {[...Array(Math.min(5, yearsImpact))].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    backgroundColor: isCorrect ? '#10B981' : '#DC2626',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.875rem',
                    animation: `popIn 0.3s ease ${i * 0.1}s both`
                  }}
                >
                  {isCorrect ? '+' : '-'}{i + 1}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Feedback */}
        {showDetails && (
          <div style={{
            animation: 'slideUp 0.5s ease 0.3s both',
            textAlign: 'left'
          }}>
            <div style={{
              backgroundColor: isCorrect ? '#F0FDF4' : '#FEF2F2',
              border: `2px solid ${isCorrect ? '#10B981' : '#DC2626'}`,
              borderRadius: '0.75rem',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#374151',
                margin: '0'
              }}>
                {answer.consequence}
              </p>
            </div>

            {/* Progress Indicator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              color: '#6B7280',
              fontSize: '0.875rem'
            }}>
              <div style={{
                width: '2rem',
                height: '0.25rem',
                backgroundColor: '#E5E7EB',
                borderRadius: '0.125rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#10B981',
                  animation: 'fillBar 2s ease'
                }} />
              </div>
              <span>Próxima pergunta...</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-30px); }
          60% { transform: translateY(-15px); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fillBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}