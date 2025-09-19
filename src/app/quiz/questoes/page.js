'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { questions } from '../../../data/questions';

function QuestionsContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(questions[0]?.timeLimit || 60);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const petName = searchParams.get('name') || 'seu Shih Tzu';
  
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;
  const isLargeScreen = windowWidth >= 1440;
  
  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !showFeedback) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showFeedback) {
      handleTimeOut();
    }
  }, [timeLeft, showFeedback]);
  
  // Reset timer when question changes
  useEffect(() => {
    setTimeLeft(questions[currentQuestion]?.timeLimit || 60);
  }, [currentQuestion]);
  
  const handleTimeOut = () => {
    // Choose worst option when time runs out
    const question = questions[currentQuestion];
    const worstOption = question.options.reduce((worst, current) => 
      current.impact < worst.impact ? current : worst
    );
    console.log('Timeout - escolhendo pior opção:', worstOption);
    handleSelect(worstOption);
  };
  
  const handleSelect = (option) => {
    setSelected(option);
    setShowFeedback(true);
    
    // Criar array de respostas imediatamente
    const newAnswers = [...answers, { 
      ...option, 
      questionId: questions[currentQuestion].id,
      timeSpent: (questions[currentQuestion].timeLimit || 60) - timeLeft
    }];
    setAnswers(newAnswers);
    
    console.log('Pergunta atual:', currentQuestion + 1, 'de', questions.length);
    console.log('Respostas:', newAnswers);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        // Próxima pergunta
        console.log('Indo para próxima pergunta');
        setIsLoading(true);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelected(null);
          setShowFeedback(false);
          setIsLoading(false);
        }, 100);
      } else {
        // Quiz completo - ir para RESULTADOS usando sessionStorage
        console.log('Quiz completo! Salvando dados e indo para RESULTADOS...');
        console.log('Respostas a serem salvas:', newAnswers);
        setIsLoading(true);
        
        // Salvar dados no sessionStorage em vez de URL
        sessionStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
        sessionStorage.setItem('petName', petName);
        
        router.push('/quiz/resultado');
      }
    }, 800); // 0.8 segundos apenas!
  };
  
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <>
      {/* CSS animations */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
      
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 50%, #FEF3C7 100%)',
      padding: isMobile ? '0.5rem' : isLargeScreen ? '1rem' : '1.5rem',
      position: 'relative'
    }}>
      {/* Loading overlay */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          transition: 'opacity 0.3s ease'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{
              width: '3rem',
              height: '3rem',
              border: '4px solid #F59E0B',
              borderTop: '4px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <p style={{
              fontSize: '1.125rem',
              fontWeight: 'bold',
              color: '#78350F'
            }}>
              {currentQuestion >= questions.length - 1 ? 'Calculando resultados...' : 'Próxima pergunta...'}
            </p>
          </div>
        </div>
      )}
      
      <div style={{ 
        maxWidth: isMobile ? '100%' : isLargeScreen ? '80rem' : '64rem', 
        width: '100%' 
      }}>
        {/* Progress Bar */}
        <div style={{ marginBottom: isMobile ? '0.5rem' : isLargeScreen ? '1rem' : '1.5rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem',
            padding: '0 0.5rem'
          }}>
            <span style={{
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              color: '#6B7280',
              fontWeight: '500'
            }}>
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span style={{
              fontSize: isMobile ? '0.875rem' : '1rem',
              fontWeight: 'bold',
              color: timeLeft <= 15 ? '#DC2626' : '#374151',
              animation: timeLeft <= 15 ? 'pulse 1s infinite' : 'none'
            }}>
              ⏱ {timeLeft}s
            </span>
          </div>
          
          <div style={{
            width: '100%',
            backgroundColor: '#E5E7EB',
            borderRadius: '9999px',
            height: isMobile ? '0.75rem' : '1rem',
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
              height: '100%',
              borderRadius: '9999px',
              width: `${progress}%`,
              transition: 'width 0.5s ease'
            }} />
          </div>
        </div>
        
        {/* Question Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          transform: showFeedback ? 'scale(0.98)' : 'scale(1)',
          transition: 'transform 0.3s ease'
        }}>
          {/* Image Header */}
          {question.image && (
            <div style={{
              height: isMobile ? '6rem' : isTablet ? '8rem' : isLargeScreen ? '10rem' : '12rem',
              background: `linear-gradient(135deg, #FEF3C7 0%, #F59E0B 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
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
                  opacity: '0.8'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                backgroundColor: question.type === 'myth' ? '#DC2626' : '#7C3AED',
                color: 'white',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 'bold'
              }}>
                {question.type === 'myth' ? '🧠 MITO/VERDADE' : '⚡ CENÁRIO'}
              </div>
            </div>
          )}
          
          <div style={{ padding: isMobile ? '1rem' : isTablet ? '1.5rem' : isLargeScreen ? '2rem' : '2.5rem' }}>
            {/* Context (para questões de cenário) */}
            {question.context && (
              <div style={{
                backgroundColor: '#FEF3C7',
                borderLeft: '4px solid #F59E0B',
                padding: isMobile ? '0.75rem' : '1rem',
                marginBottom: isMobile ? '1rem' : isLargeScreen ? '1rem' : '1.5rem',
                borderRadius: '0 0.5rem 0.5rem 0',
                fontStyle: 'italic',
                color: '#78350F',
                fontSize: isMobile ? '0.875rem' : '1rem',
                lineHeight: '1.5'
              }}>
                {question.context.replace('seu Shih Tzu', petName)}
              </div>
            )}
            
            {/* Question Title and Text */}
            <div style={{ marginBottom: isMobile ? '1rem' : isLargeScreen ? '1rem' : '2rem' }}>
              <h2 style={{
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: 'bold',
                color: '#6B7280',
                marginBottom: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {question.title}
              </h2>
              
              <h3 style={{
                fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.5rem',
                fontWeight: 'bold',
                color: '#111827',
                lineHeight: '1.3',
                marginBottom: question.type === 'myth' ? '0.5rem' : '0'
              }}>
                {question.type === 'myth' ? question.statement : question.question}
              </h3>
              
              {question.type === 'myth' && (
                <p style={{
                  fontSize: isMobile ? '1rem' : '1.125rem',
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
              gridTemplateColumns: question.type === 'myth' ? (isMobile ? '1fr' : 'repeat(2, 1fr)') : 'none',
              flexDirection: question.type === 'myth' ? 'none' : 'column',
              gap: isMobile ? '0.5rem' : isLargeScreen ? '0.5rem' : '0.75rem'
            }}>
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleSelect(option)}
                  disabled={showFeedback}
                  style={{
                    padding: isMobile ? '1rem' : isLargeScreen ? '1rem' : '1.25rem',
                    borderRadius: '0.75rem',
                    border: '2px solid',
                    borderColor: selected === option
                      ? (showFeedback
                        ? (option.impact >= 0 ? '#10B981' : '#DC2626')
                        : '#2563eb'
                      )
                      : showFeedback ? '#E5E7EB' : '#D1D5DB',
                    backgroundColor: selected === option
                      ? (showFeedback
                        ? (option.impact >= 0 ? '#F0FDF4' : '#FEF2F2')
                        : '#EBF4FF'
                      )
                      : showFeedback ? '#F9FAFB' : 'white',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    cursor: showFeedback ? 'default' : 'pointer',
                    opacity: showFeedback && selected !== option ? 0.5 : 1,
                    transform: showFeedback && selected === option ? 'scale(1.02)' : 'scale(1)'
                  }}
                  onMouseOver={(e) => {
                    if (!showFeedback) {
                      e.target.style.borderColor = '#F59E0B';
                      e.target.style.backgroundColor = '#FEFBF2';
                      e.target.style.transform = 'scale(1.01)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (!showFeedback) {
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
                      fontSize: isMobile ? '1rem' : '1rem',
                      minWidth: '1.5rem'
                    }}>
                      {String.fromCharCode(65 + index) + ') ' + 
                        (question.type === 'myth' 
                          ? (option.value ? 'VERDADEIRO' : 'FALSO')
                          : '')}
                    </span>
                    <span style={{
                      flex: 1,
                      fontSize: isMobile ? '1rem' : '1rem',
                      lineHeight: '1.4',
                      color: '#374151'
                    }}>
                      {option.text}
                    </span>
                    {selected === option && !showFeedback && (
                      <span style={{
                        marginLeft: '0.5rem',
                        fontSize: '1.2rem',
                        animation: 'bounce 0.6s ease-out'
                      }}>
                        ✨
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Feedback */}
            {showFeedback && selected && (
              <div style={{
                marginTop: isMobile ? '1rem' : isLargeScreen ? '1rem' : '1.5rem',
                padding: isMobile ? '1rem' : isLargeScreen ? '1.25rem' : '1.5rem',
                borderRadius: '0.75rem',
                backgroundColor: selected.impact === 0 ? '#F0FDF4' : '#FEF2F2',
                border: `2px solid ${selected.impact === 0 ? '#10B981' : '#DC2626'}`,
                animation: 'slideIn 0.5s ease-out'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span style={{ 
                    fontSize: '2rem', 
                    marginRight: '0.75rem',
                    animation: 'bounce 0.6s ease-out'
                  }}>
                    {selected.impact === 0 ? '✅' : '❌'}
                  </span>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontWeight: 'bold',
                      fontSize: isMobile ? '1rem' : '1.125rem',
                      color: selected.impact === 0 ? '#166534' : '#991B1B',
                      marginBottom: '0.5rem'
                    }}>
                      {selected.impact === 0 ? `Parabéns! ${petName} agradece! 🎉` : `Ops... Erro perigoso para ${petName}! ⚠️`}
                    </p>
                    
                    {/* Feedback simplificado para mitos, detalhado para cenários */}
                    {question.type === 'myth' ? (
                      // MITO/VERDADE: Apenas resultado
                      <p style={{
                        color: '#374151',
                        fontSize: isMobile ? '0.875rem' : '1rem',
                        fontWeight: '600'
                      }}>
                        {selected.impact === 0 ? 'Resposta correta!' : 'Resposta incorreta.'}
                      </p>
                    ) : (
                      // CENÁRIO: Feedback completo
                      <>
                        <p style={{
                          color: '#374151',
                          fontSize: isMobile ? '0.875rem' : '1rem',
                          lineHeight: '1.5',
                          marginBottom: '0.75rem'
                        }}>
                          {selected.consequence}
                        </p>
                        
                        {/* Detalhes para cenários */}
                        {selected.immediate && (
                          <div style={{ marginTop: '0.75rem' }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                              <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>📍 Imediatamente:</span>
                              <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>{selected.immediate}</span>
                            </div>
                            <div>
                              <span style={{ fontWeight: '600', fontSize: '0.875rem' }}>🔮 Longo prazo:</span>
                              <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>{selected.longTerm}</span>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                    
                    {/* Impacto em anos */}
                    {selected.impact < 0 && (
                      <div style={{
                        marginTop: '0.75rem',
                        backgroundColor: 'white',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #FCA5A5'
                      }}>
                        <p style={{
                          color: '#DC2626',
                          fontWeight: 'bold',
                          fontSize: isMobile ? '0.875rem' : '1rem',
                          margin: '0'
                        }}>
                          💔 Impacto: {Math.abs(selected.impact)} anos de vida perdidos
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Educational info - apenas para cenários */}
                {question.educational && question.type !== 'myth' && (
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#6B7280',
                    fontStyle: 'italic',
                    marginTop: '0.75rem',
                    borderTop: '1px solid #E5E7EB',
                    paddingTop: '0.75rem'
                  }}>
                    💡 {question.educational}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default function QuizQuestions() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 50%, #FEF3C7 100%)'
      }}>
        <div style={{
          fontSize: '1.5rem',
          color: '#78350F',
          fontWeight: 'bold'
        }}>
          Carregando quiz...
        </div>
      </div>
    }>
      <QuestionsContent />
    </Suspense>
  );
}