'use client';
import { useQuiz } from '../contexts/QuizContext';
import { questions } from '../data/questions';

export default function ProgressHeart() {
  const { state } = useQuiz();
  const { currentQuestion, yearsGained, petName } = state;

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const heartScale = 0.8 + (progress / 100) * 0.4; // Grows from 0.8 to 1.2

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '1rem',
      padding: '1rem'
    }}>
      {/* Heart Progress Indicator */}
      <div style={{
        position: 'relative',
        width: '4rem',
        height: '4rem',
        marginBottom: '0.5rem'
      }}>
        {/* Background Circle */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'conic-gradient(#DC2626 0deg, #DC2626 ' + (progress * 3.6) + 'deg, #E5E7EB ' + (progress * 3.6) + 'deg, #E5E7EB 360deg)',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Heart */}
          <div style={{
            fontSize: '2rem',
            transform: `scale(${heartScale})`,
            transition: 'transform 0.5s ease',
            animation: yearsGained > 0 ? 'heartbeat 1s infinite' : 'none',
            filter: progress > 50 ? 'hue-rotate(120deg)' : 'none' // Red to green
          }}>
            ❤️
          </div>
        </div>
      </div>

      {/* Progress Text */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: 'bold',
        color: '#374151'
      }}>
        Pergunta {currentQuestion + 1} de {questions.length}
      </div>

      {/* Years Gained Counter */}
      {yearsGained > 0 && (
        <div style={{
          marginTop: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#10B981',
          color: 'white',
          borderRadius: '1rem',
          fontSize: '0.875rem',
          fontWeight: 'bold',
          animation: 'bounceIn 0.5s ease',
          textAlign: 'center'
        }}>
          🎉 {petName} ganhou {yearsGained.toFixed(1)} anos!
        </div>
      )}

      {/* Lives Impacted */}
      <div style={{
        marginTop: '0.25rem',
        fontSize: '0.75rem',
        color: '#6B7280',
        textAlign: 'center'
      }}>
        🎯 {state.livesImpacted} pets ajudados hoje
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(${heartScale}); }
          50% { transform: scale(${heartScale + 0.1}); }
        }

        @keyframes bounceIn {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}