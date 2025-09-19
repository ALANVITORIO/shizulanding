'use client';
import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuiz, QUIZ_STATES, ACTIONS } from '../contexts/QuizContext';
import { usePreload, useMomentum } from '../hooks/usePreload';
import { calculateLifeImpact } from '../utils/calculateImpact';
import { questions } from '../data/questions';

import ProgressHeart from './ProgressHeart';
import UrgencyTimer from './UrgencyTimer';
import MicroFeedback from './MicroFeedback';
import SmoothTransition, { FadeTransition } from './SmoothTransition';

// Quiz Intro Component
function QuizIntro() {
  const { state, dispatch, actions } = useQuiz();
  const [petName, setPetName] = useState('');
  const [isStarting, setIsStarting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (petName.trim()) {
      setIsStarting(true);
      dispatch({ type: actions.SET_PET_NAME, payload: petName });

      setTimeout(() => {
        dispatch({
          type: actions.START_QUIZ,
          payload: { timeLimit: questions[0]?.timeLimit || 30 }
        });
      }, 800);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 177, 153, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 30%, #F0FDF4 70%, #FEF3C7 100%)
      `,
      display: 'flex',
      alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
      justifyContent: 'center',
      padding: window.innerWidth <= 768 ? '1rem 1rem 1rem 1rem' : '1rem',
      paddingTop: window.innerWidth <= 768 ? '2rem' : '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating background elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '100px',
        height: '100px',
        background: 'linear-gradient(45deg, #F59E0B20, #DC262620)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        filter: 'blur(20px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(45deg, #10B98120, #059669 20)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        filter: 'blur(25px)'
      }} />

      <SmoothTransition isVisible={!isStarting} direction="up">
        <div style={{ maxWidth: '50rem', width: '100%', position: 'relative' }}>
          {/* Header with urgency */}
          <FadeTransition isVisible={true}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              {/* Hero image placeholder */}
              <div style={{
                width: '120px',
                height: '120px',
                margin: window.innerWidth <= 768 ? '0 auto 1rem' : '0 auto 1.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F59E0B, #DC2626)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                boxShadow: '0 20px 40px rgba(220, 38, 38, 0.3)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                🐕
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #FEF2F2, #FEFEFE)',
                border: '3px solid #DC2626',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                boxShadow: '0 10px 25px rgba(220, 38, 38, 0.2)',
                animation: 'slideInDown 0.8s ease-out'
              }}>
                <span style={{ fontSize: '1.5rem', animation: 'rotate 2s linear infinite' }}>⚠️</span>
                <span style={{
                  color: '#DC2626',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>ALERTA CRÍTICO</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #DC2626, #F59E0B, #DC2626)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(0,0,0,0.1)',
                lineHeight: '1.1',
                animation: 'slideInUp 1s ease-out 0.3s both'
              }}>
                ⏰ Máquina do Tempo<br />Shih Tzu
              </h1>

              <div style={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: '1px solid rgba(255,255,255,0.2)',
                animation: 'slideInUp 1s ease-out 0.6s both'
              }}>
                <p style={{
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
                  color: '#374151',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  Descubra <strong style={{
                    color: '#DC2626',
                    background: 'linear-gradient(135deg, #DC2626, #F59E0B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>quantos anos de vida</strong> você está
                </p>
                <p style={{
                  fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)',
                  fontWeight: 'bold',
                  color: '#DC2626',
                  textShadow: '0 2px 4px rgba(220, 38, 38, 0.2)'
                }}>
                  ROUBANDO do seu pet sem saber 💔
                </p>
              </div>
            </div>
          </FadeTransition>

          {/* Main Card */}
          <FadeTransition isVisible={true} delay={300}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              {/* Stats Header */}
              <div style={{
                background: `
                  linear-gradient(135deg, #1F2937 0%, #374151 50%, #1F2937 100%),
                  radial-gradient(circle at 30% 20%, rgba(239, 68, 68, 0.3), transparent 50%),
                  radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.3), transparent 50%)
                `,
                padding: '2rem 1.5rem',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative elements */}
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
                  animation: 'shimmer 3s ease-in-out infinite'
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                  gap: '1.5rem',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.2)',
                    borderRadius: '1rem',
                    padding: '1rem',
                    border: '1px solid rgba(239, 68, 68, 0.3)'
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                      fontWeight: '900',
                      marginBottom: '0.5rem',
                      background: 'linear-gradient(135deg, #FEF2F2, #FECACA)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>93%</div>
                    <div style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                      opacity: 0.9,
                      fontWeight: '600'
                    }}>dos tutores cometem<br />erros fatais 💀</div>
                  </div>

                  <div style={{
                    background: 'rgba(245, 158, 11, 0.2)',
                    borderRadius: '1rem',
                    padding: '1rem',
                    border: '1px solid rgba(245, 158, 11, 0.3)'
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                      fontWeight: '900',
                      marginBottom: '0.5rem',
                      background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>12 anos</div>
                    <div style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                      opacity: 0.9,
                      fontWeight: '600'
                    }}>perdidos por<br />ignorância ⏰</div>
                  </div>

                  <div style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    borderRadius: '1rem',
                    padding: '1rem',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <div style={{
                      fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                      fontWeight: '900',
                      marginBottom: '0.5rem',
                      background: 'linear-gradient(135deg, #ECFDF5, #A7F3D0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>3 anos</div>
                    <div style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                      opacity: 0.9,
                      fontWeight: '600'
                    }}>expectativa real<br />no Brasil 📉</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '2.5rem' }}>
                {/* Form */}
                <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #F9FAFB, #F3F4F6)',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    marginBottom: '1.5rem',
                    border: '2px solid #E5E7EB'
                  }}>
                    <label style={{
                      display: 'block',
                      fontSize: '1.3rem',
                      fontWeight: '800',
                      background: 'linear-gradient(135deg, #374151, #1F2937)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}>
                      Qual o nome do seu Shih Tzu? 🐕💕
                    </label>

                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="Digite o nome do seu pet..."
                        style={{
                          width: '100%',
                          padding: '1.25rem 1.5rem',
                          border: '3px solid #E5E7EB',
                          borderRadius: '1rem',
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          marginBottom: '1.5rem',
                          transition: 'all 0.3s ease',
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                          textAlign: 'center'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#F59E0B';
                          e.target.style.boxShadow = '0 0 0 4px rgba(245, 158, 11, 0.1)';
                          e.target.style.transform = 'scale(1.02)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#E5E7EB';
                          e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                          e.target.style.transform = 'scale(1)';
                        }}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isStarting}
                    style={{
                      width: '100%',
                      padding: '1.75rem 2rem',
                      borderRadius: '1.25rem',
                      fontWeight: '900',
                      fontSize: '1.2rem',
                      border: 'none',
                      cursor: isStarting ? 'not-allowed' : 'pointer',
                      background: isStarting
                        ? 'linear-gradient(135deg, #10B981, #059669, #047857)'
                        : 'linear-gradient(135deg, #DC2626, #B91C1C, #991B1B)',
                      color: 'white',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transform: isStarting ? 'scale(0.98)' : 'scale(1)',
                      boxShadow: isStarting
                        ? '0 10px 25px rgba(16, 185, 129, 0.3)'
                        : '0 15px 35px rgba(220, 38, 38, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      if (!isStarting) {
                        e.target.style.transform = 'scale(1.05) translateY(-2px)';
                        e.target.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isStarting) {
                        e.target.style.transform = 'scale(1) translateY(0)';
                        e.target.style.boxShadow = '0 15px 35px rgba(220, 38, 38, 0.4)';
                      }
                    }}
                  >
                    <span style={{
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem'
                    }}>
                      {isStarting ? (
                        <>
                          <span style={{ animation: 'spin 1s linear infinite' }}>🚀</span>
                          INICIANDO A MÁQUINA DO TEMPO...
                        </>
                      ) : (
                        <>
                          🚨 DESCOBRIR A VERDADE SOBRE {petName.toUpperCase() || 'MEU PET'}
                          <span style={{ fontSize: '1.5rem' }}>→</span>
                        </>
                      )}
                    </span>

                    {!isStarting && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                        animation: 'slideRight 2s ease-in-out infinite'
                      }} />
                    )}
                  </button>
                </form>

                {/* Trust indicators */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  fontSize: '0.875rem',
                  color: '#6B7280',
                  textAlign: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span>⏱️</span>
                    <span>5 minutos para completar</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span>🏆</span>
                    <span>Baseado em dados veterinários</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <span>❤️</span>
                    <span>+1.247 tutores testaram</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeTransition>
        </div>
      </SmoothTransition>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes slideRight {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}

// Quiz Question Component
function QuizQuestion() {
  const { state, dispatch, actions } = useQuiz();
  const { preloadQuestion } = usePreload();
  const { updateMomentum, getStreakBonus } = useMomentum();
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = questions[state.currentQuestion];
  const isLastQuestion = state.currentQuestion >= questions.length - 1;

  // Preload next question
  useEffect(() => {
    if (!isLastQuestion) {
      preloadQuestion(state.currentQuestion + 1);
    }
  }, [state.currentQuestion, isLastQuestion, preloadQuestion]);

  const handleAnswer = useCallback((option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    // Update quiz state
    dispatch({
      type: actions.ANSWER_QUESTION,
      payload: {
        ...option,
        questionId: question.id,
        timeRemaining: state.timeLeft
      }
    });

    // Update momentum
    updateMomentum(option.impact >= 0, (question.timeLimit || 30) - state.timeLeft);

    // Show feedback
    setShowFeedback(true);
  }, [selectedAnswer, dispatch, actions, question, state.timeLeft, updateMomentum]);

  const handleFeedbackComplete = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);

    if (isLastQuestion) {
      // Calculate final results
      const results = calculateLifeImpact(state.answers);
      dispatch({ type: actions.SHOW_RESULTS, payload: results });
    } else {
      // Next question
      dispatch({
        type: actions.NEXT_QUESTION,
        payload: { timeLimit: questions[state.currentQuestion + 1]?.timeLimit || 30 }
      });
    }
  }, [isLastQuestion, state.answers, dispatch, actions, state.currentQuestion]);

  const handleTimeout = useCallback(() => {
    if (selectedAnswer) return;

    // Auto-select worst option on timeout
    const worstOption = question.options.reduce((worst, current) =>
      current.impact < worst.impact ? current : worst
    );
    handleAnswer(worstOption);
  }, [selectedAnswer, question.options, handleAnswer]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 50%, #FEF3C7 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ maxWidth: '56rem', width: '100%' }}>
        {/* Progress Heart */}
        <ProgressHeart />

        {/* Urgency Timer */}
        <UrgencyTimer
          timeLimit={question.timeLimit || 30}
          onTimeout={handleTimeout}
        />

        {/* Streak Bonus */}
        {getStreakBonus() && (
          <FadeTransition isVisible={true}>
            <div style={{
              textAlign: 'center',
              marginBottom: '1rem',
              padding: '0.75rem',
              backgroundColor: '#FEF3C7',
              border: '2px solid #F59E0B',
              borderRadius: '0.75rem',
              fontWeight: 'bold',
              color: '#92400E'
            }}>
              {getStreakBonus()}
            </div>
          </FadeTransition>
        )}

        {/* Question Card */}
        <SmoothTransition isVisible={!showFeedback} direction="left">
          <div style={{
            backgroundColor: 'white',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden'
          }}>
            {/* Question Image */}
            {question.image && (
              <div style={{
                height: 'clamp(8rem, 20vw, 12rem)',
                background: `linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={question.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  backgroundColor: question.type === 'myth' ? '#DC2626' : '#7C3AED',
                  color: 'white',
                  padding: '0.5rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 'bold'
                }}>
                  {question.type === 'myth' ? '🧠 MITO/VERDADE' : '⚡ CENÁRIO'}
                </div>
              </div>
            )}

            <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              {/* Context */}
              {question.context && (
                <div style={{
                  backgroundColor: '#FEF3C7',
                  borderLeft: '4px solid #F59E0B',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  borderRadius: '0 0.5rem 0.5rem 0',
                  fontStyle: 'italic',
                  color: '#78350F'
                }}>
                  {question.context.replace('seu Shih Tzu', state.petName)}
                </div>
              )}

              {/* Question */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: '#6B7280',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {question.title}
                </h2>

                <h3 style={{
                  fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                  fontWeight: 'bold',
                  color: '#111827',
                  lineHeight: '1.3'
                }}>
                  {question.type === 'myth' ? question.statement : question.question}
                </h3>

                {question.type === 'myth' && (
                  <p style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#D97706',
                    marginTop: '0.5rem'
                  }}>
                    {question.question}
                  </p>
                )}
              </div>

              {/* Options */}
              <div style={{
                display: question.type === 'myth' ? 'grid' : 'flex',
                gridTemplateColumns: question.type === 'myth' ? 'repeat(auto-fit, minmax(250px, 1fr))' : 'none',
                flexDirection: question.type === 'myth' ? 'none' : 'column',
                gap: '0.75rem'
              }}>
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedAnswer}
                    style={{
                      padding: 'clamp(1rem, 3vw, 1.5rem)',
                      borderRadius: '0.75rem',
                      border: '2px solid #D1D5DB',
                      backgroundColor: 'white',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      cursor: selectedAnswer ? 'default' : 'pointer',
                      opacity: selectedAnswer ? 0.6 : 1
                    }}
                    onMouseOver={(e) => {
                      if (!selectedAnswer) {
                        e.target.style.borderColor = '#F59E0B';
                        e.target.style.backgroundColor = '#FEFBF2';
                        e.target.style.transform = 'scale(1.02)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (!selectedAnswer) {
                        e.target.style.borderColor = '#D1D5DB';
                        e.target.style.backgroundColor = 'white';
                        e.target.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{
                        fontWeight: 'bold',
                        color: '#F59E0B',
                        marginRight: '0.75rem',
                        fontSize: '1rem',
                        minWidth: '2rem'
                      }}>
                        {question.type === 'myth'
                          ? (option.value ? '✓ VERDADEIRO' : '✗ FALSO')
                          : String.fromCharCode(65 + index) + ')'}
                      </span>
                      <span style={{
                        flex: 1,
                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                        lineHeight: '1.4',
                        color: '#374151'
                      }}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </SmoothTransition>

        {/* Micro Feedback */}
        {showFeedback && selectedAnswer && (
          <MicroFeedback
            answer={selectedAnswer}
            petName={state.petName}
            onComplete={handleFeedbackComplete}
          />
        )}
      </div>
    </div>
  );
}

// Results Component (simplified version that redirects to /quiz/resultado)
function QuizResults() {
  const { state } = useQuiz();
  const router = useRouter();

  useEffect(() => {
    if (state.results) {
      // Save to sessionStorage BEFORE redirect
      console.log('Salvando dados para sessionStorage:', {
        answers: state.answers,
        petName: state.petName
      });

      // Force save to sessionStorage with verification
      try {
        sessionStorage.setItem('quizAnswers', JSON.stringify(state.answers));
        sessionStorage.setItem('petName', state.petName);

        console.log('DADOS SALVOS NO SPA:', {
          answers: state.answers.length,
          petName: state.petName,
          storage_check: sessionStorage.getItem('quizAnswers') ? 'OK' : 'FALHOU'
        });

        // Larger delay to ensure storage is saved + verification
        setTimeout(() => {
          // Double check data is saved before redirect
          const saved = sessionStorage.getItem('quizAnswers');
          if (saved) {
            console.log('REDIRECIONANDO PARA RESULTADOS - DADOS CONFIRMADOS');
            router.push('/quiz/resultado');
          } else {
            console.error('ERRO: Dados não foram salvos, tentando fallback');
            // Fallback to URL params if storage fails
            const params = new URLSearchParams({
              answers: JSON.stringify(state.answers),
              name: state.petName
            });
            router.push(`/quiz/resultado?${params.toString()}`);
          }
        }, 300);
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
        // Fallback to URL params if sessionStorage fails
        const params = new URLSearchParams({
          answers: JSON.stringify(state.answers),
          name: state.petName
        });
        router.push(`/quiz/resultado?${params.toString()}`);
      }
    }
  }, [state.results, state.answers, state.petName, router]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 50%, #F0FDF4 100%)'
    }}>
      <div style={{
        textAlign: 'center',
        color: '#059669'
      }}>
        <div style={{
          width: '4rem',
          height: '4rem',
          border: '6px solid #10B981',
          borderTop: '6px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 2rem auto'
        }} />
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          Calculando seus resultados...
        </h2>
        <p style={{ marginTop: '0.5rem' }}>
          Redirecionando para a página de resultados
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// Main Quiz App Component
export default function QuizApp() {
  const { state } = useQuiz();

  const renderCurrentState = () => {
    switch (state.currentState) {
      case QUIZ_STATES.INTRO:
        return <QuizIntro />;
      case QUIZ_STATES.QUESTION:
      case QUIZ_STATES.FEEDBACK:
        return <QuizQuestion />;
      case QUIZ_STATES.RESULTS:
        return <QuizResults />;
      default:
        return <QuizIntro />;
    }
  };

  return renderCurrentState();
}