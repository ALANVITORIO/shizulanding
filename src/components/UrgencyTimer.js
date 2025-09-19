'use client';
import { useState, useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';

export default function UrgencyTimer({ timeLimit = 30, onTimeout }) {
  const { state } = useQuiz();
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const { petName } = state;

  useEffect(() => {
    setTimeLeft(timeLimit);
  }, [timeLimit]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout?.();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeout]);

  const isUrgent = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  const percentage = (timeLeft / timeLimit) * 100;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      backgroundColor: isCritical ? '#FEF2F2' : isUrgent ? '#FEF3C7' : '#F9FAFB',
      borderRadius: '0.75rem',
      border: `2px solid ${isCritical ? '#DC2626' : isUrgent ? '#F59E0B' : '#E5E7EB'}`,
      marginBottom: '1rem',
      transition: 'all 0.3s ease',
      animation: isCritical ? 'shake 0.5s infinite' : 'none'
    }}>
      {/* Timer Display */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <div style={{
          fontSize: '1.5rem',
          animation: isCritical ? 'heartbeat 0.6s infinite' : 'none'
        }}>
          {isCritical ? '💔' : isUrgent ? '⚠️' : '⏰'}
        </div>

        <div>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            color: isCritical ? '#DC2626' : isUrgent ? '#D97706' : '#374151',
            animation: isUrgent ? 'pulse 1s infinite' : 'none'
          }}>
            {timeLeft}s
          </div>
          {isCritical && (
            <div style={{
              fontSize: '0.75rem',
              color: '#DC2626',
              fontWeight: '600'
            }}>
              DECIDE RÁPIDO!
            </div>
          )}
        </div>
      </div>

      {/* Urgency Message */}
      <div style={{
        textAlign: 'right',
        flex: 1,
        marginLeft: '1rem'
      }}>
        {isCritical ? (
          <div style={{
            fontSize: '0.875rem',
            fontWeight: 'bold',
            color: '#DC2626'
          }}>
            {petName} precisa de você!
          </div>
        ) : isUrgent ? (
          <div style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#D97706'
          }}>
            Cada segundo conta para {petName}
          </div>
        ) : (
          <div style={{
            fontSize: '0.875rem',
            color: '#6B7280'
          }}>
            Pense bem sobre {petName}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: '#E5E7EB',
        borderRadius: '0 0 0.75rem 0.75rem',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: `${percentage}%`,
          backgroundColor: isCritical ? '#DC2626' : isUrgent ? '#F59E0B' : '#10B981',
          transition: 'width 1s linear, background-color 0.3s ease',
          animation: isCritical ? 'pulse 0.5s infinite' : 'none'
        }} />
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}