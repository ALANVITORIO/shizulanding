'use client';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { calculateLifeImpact } from '../../../utils/calculateImpact';

function ResultsContent() {
  const [results, setResults] = useState(null);
  const [showPitch, setShowPitch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showTransitionLoading, setShowTransitionLoading] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  // Pegar nome do sessionStorage primeiro, depois dos params como fallback
  const petName = (typeof window !== 'undefined' ? sessionStorage.getItem('petName') : null) || 
                 searchParams.get('name') || 'seu Shih Tzu';
  
  
  useEffect(() => {
    // Tentar pegar dados do sessionStorage primeiro
    if (typeof window !== 'undefined') {
      const storedAnswers = sessionStorage.getItem('quizAnswers');
      if (storedAnswers) {
        try {
          const answers = JSON.parse(storedAnswers);
          console.log('Answers do sessionStorage:', answers);
          const calculatedResults = calculateLifeImpact(answers);
          console.log('Resultados calculados:', calculatedResults);
          setResults(calculatedResults);
          
          // NÃO limpar sessionStorage ainda - pode causar problemas de timing
          console.log('DADOS ENCONTRADOS NO RESULTADO:', {
            answers: answers.length,
            petName: petName,
            timestamp: new Date().toISOString()
          });
          
          // Mostrar loading transition por 1.5s, depois pitch com botão
          setTimeout(() => {
            setShowTransitionLoading(true);
          }, 1500);

          setTimeout(() => {
            setShowTransitionLoading(false);
            setShowPitch(true);
          }, 3500);
          
          return;
        } catch (error) {
          console.error('Error parsing stored answers:', error);
        }
      }
    }
    
    // Fallback para URL params (método antigo)
    const answersParam = searchParams.get('answers');
    if (answersParam) {
      try {
        const answers = JSON.parse(decodeURIComponent(answersParam));
        console.log('Answers da URL:', answers);
        const calculatedResults = calculateLifeImpact(answers);
        console.log('Resultados calculados:', calculatedResults);
        setResults(calculatedResults);
        
        // Mostrar loading transition por 1.5s, depois pitch com botão
        setTimeout(() => {
          setShowTransitionLoading(true);
        }, 1500);

        setTimeout(() => {
          setShowTransitionLoading(false);
          setShowPitch(true);
        }, 3500);
      } catch (error) {
        console.error('Error parsing URL answers:', error);
        alert('Erro ao processar resultados. Tente novamente.');
      }
    } else {
      console.error('❌ NENHUMA RESPOSTA ENCONTRADA - DEBUGANDO:', {
        sessionStorage_quizAnswers: typeof window !== 'undefined' ? sessionStorage.getItem('quizAnswers') : null,
        sessionStorage_petName: typeof window !== 'undefined' ? sessionStorage.getItem('petName') : null,
        url_params: searchParams.toString(),
        timestamp: new Date().toISOString()
      });

      // AGUARDAR 2 segundos antes de redirecionar - pode ser timing issue
      setTimeout(() => {
        const retryAnswers = sessionStorage.getItem('quizAnswers');
        if (retryAnswers) {
          console.log('🔄 RETRY FUNCIONOU - dados apareceram após delay');
          window.location.reload(); // Force reload to try again
        } else {
          console.log('🔄 Redirecionando para quiz após retry falhado');
          router.push('/quiz');
        }
      }, 2000);
    }
  }, [searchParams]);
  
  if (!results) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 50%, #FEF3C7 100%)'
      }}>
        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '4px solid #FED7AA',
            borderTop: '4px solid #EA580C',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 24px auto'
          }}></div>
          <div style={{
            fontSize: '1.5rem',
            color: '#78350F',
            fontWeight: 'bold'
          }}>
            Preparando seus resultados...
          </div>
        </div>
      </div>
    );
  }

  // Tela de TRANSIÇÃO - Loading mais bacana
  if (showTransitionLoading) {
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
          maxWidth: '400px',
          padding: '2rem'
        }}>
          {/* Spinner maior e mais colorido */}
          <div style={{
            width: '80px',
            height: '80px',
            border: '6px solid #D1FAE5',
            borderTop: '6px solid #10B981',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 32px auto'
          }}></div>

          {/* Texto dinâmico */}
          <h2 style={{
            fontSize: '1.75rem',
            color: '#065F46',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            🎯 Analisando Resultados...
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#047857',
            lineHeight: '1.5'
          }}>
            Preparando dados personalizados para {petName}
          </p>

          {/* Barra de progresso fake */}
          <div style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#D1FAE5',
            borderRadius: '4px',
            margin: '24px 0',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(to right, #10B981, #059669)',
              borderRadius: '4px',
              animation: 'quiz-loading 2s ease-in-out',
              width: '100%'
            }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Tela de PITCH do método - AGORA COM BOTÃO
  if (showPitch) {
    return (
      <>
        {/* Loading Overlay */}
        {isLoading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50
          }}>
            <div style={{
              textAlign: 'center',
              color: 'white'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                border: '4px solid white',
                borderTop: '4px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem auto'
              }}></div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 5vw, 1.875rem)',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>🚀 Preparando seus resultados...</h2>
              <p style={{
                fontSize: '1.125rem',
                opacity: 0.9
              }}>Carregando dados completos de {petName}</p>
            </div>
          </div>
        )}

        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 50%, #F0FDF4 100%)',
          padding: '2rem'
        }}>
        <div style={{
          maxWidth: window.innerWidth <= 768 ? 'none' : '48rem',
          width: '100%',
          textAlign: 'center'
        }}>
          {/* Success animation */}
          <div style={{
            width: '4rem',
            height: '4rem',
            backgroundColor: '#10B981',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem auto',
            animation: 'bounce 1s ease infinite'
          }}>
            <span style={{ fontSize: '2rem', color: 'white' }}>✓</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-green-800 mb-8 leading-tight">
            🎯 Método COMPROVADO em 30 segundos!
          </h1>

          <div style={{ padding: '0 0.25rem' }}>
            <p style={{
              fontSize: 'clamp(1.2rem, 4vw, 1.4rem)',
              fontWeight: '700',
              color: '#1F2937',
              marginBottom: '2rem',
              textAlign: 'left',
              lineHeight: '1.4'
            }}>
              Você acabou de experimentar nosso método interativo e <span style={{ color: '#059669' }}>FUNCIONOU</span>, certo?
            </p>

            <h3 style={{
              fontSize: 'clamp(1.4rem, 5vw, 1.7rem)',
              fontWeight: '900',
              color: '#DC2626',
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              Mas pense assim...
            </h3>

            <p style={{
              fontSize: 'clamp(1.1rem, 4vw, 1.25rem)',
              color: '#4B5563',
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>
              Esse quiz teve apenas <span style={{ fontWeight: '800', color: '#DC2626' }}>7 perguntas básicas</span>.
            </p>

            <p style={{
              fontSize: 'clamp(1.25rem, 4.5vw, 1.4rem)',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1.5rem',
              lineHeight: '1.3'
            }}>
              Imagine aprender <span style={{ color: '#059669' }}>TUDO sobre Shih Tzu</span> dessa mesma forma:
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{
                fontSize: 'clamp(1.05rem, 3.8vw, 1.2rem)',
                color: '#374151',
                fontWeight: '600',
                lineHeight: '1.4',
                marginBottom: '0.75rem'
              }}>
                📚 Conhecimentos que datam mais de <strong style={{ color: '#B45309' }}>1500 anos</strong>
              </p>
              <p style={{
                fontSize: 'clamp(1.05rem, 3.8vw, 1.2rem)',
                color: '#374151',
                fontWeight: '600',
                lineHeight: '1.4',
                marginBottom: '0.75rem'
              }}>
                🐕 Comportamento, saúde, cuidados essenciais
              </p>
              <p style={{
                fontSize: 'clamp(1.05rem, 3.8vw, 1.2rem)',
                color: '#374151',
                fontWeight: '600',
                lineHeight: '1.4'
              }}>
                🎯 <strong style={{ color: '#DC2626' }}>Cada capítulo</strong> termina com um quiz interativo
              </p>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.4rem, 5vw, 1.7rem)',
              fontWeight: '900',
              color: '#111827',
              marginBottom: '1rem',
              lineHeight: '1.2',
              textAlign: 'left'
            }}>
              Por que isso é 100% superior?
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                fontSize: 'clamp(1.05rem, 4vw, 1.2rem)',
                color: '#6B7280',
                fontWeight: '500',
                marginBottom: '0.75rem',
                lineHeight: '1.3'
              }}>
                ❌ PDF chato = Você lê e esquece
              </p>
              <p style={{
                fontSize: 'clamp(1.05rem, 4vw, 1.2rem)',
                color: '#111827',
                fontWeight: '700',
                lineHeight: '1.3'
              }}>
                ✅ <strong>Método interativo</strong> = Você aprende DE VERDADE
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)',
                color: '#6B7280',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                ▶ Linguagem simples e direta
              </p>
              <p style={{
                fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)',
                color: '#6B7280',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                ▶ Capítulos organizados por tema
              </p>
              <p style={{
                fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)',
                color: '#6B7280',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                ▶ Testou seu conhecimento a cada passo
              </p>
              <p style={{
                fontSize: 'clamp(0.95rem, 3.5vw, 1.05rem)',
                color: '#6B7280',
                lineHeight: '1.3'
              }}>
                ▶ Evita erros que nem sabia que existiam
              </p>
            </div>

            {/* BOTÃO PARA IR DIRETO PRA LANDING */}
            <button
              onClick={() => {
                // Mostrar loading imediatamente
                setIsLoading(true);

                // Salvar dados no sessionStorage
                sessionStorage.setItem('quizComplete', JSON.stringify({
                  quiz: 'complete',
                  score: results.percentageKnowledge,
                  name: petName,
                  years_lost: results.yearsLost,
                  profile: results.profile.type,
                  severity: results.severity.level,
                  timestamp: Date.now()
                }));

                // Delay para mostrar loading, depois redirecionar
                setTimeout(() => {
                  router.push('/landing');
                }, 1500);
              }}
              disabled={isLoading}
              className={`w-full max-w-96 mx-auto block py-5 px-6 rounded-xl font-bold text-lg text-white shadow-lg transition-all duration-300 uppercase tracking-wider ${
                isLoading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-xl'
              }`}
            >
              {isLoading ? (
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid white',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  CARREGANDO RESULTADOS...
                </span>
              ) : (
                `🚨 VER OS RESULTADOS PARA ${petName.toUpperCase()}`
              )}
            </button>
          </div>

          <p className="text-sm text-gray-500 italic">
            Clique para descobrir exatamente quantos anos {petName} pode viver
          </p>
        </div>
        </div>

        <style jsx global>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </>
    );
  }
}

export default function QuizResults() {
  return (
    <>
      <Suspense fallback={
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FFFFFF 50%, #FEF3C7 100%)'
        }}>
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              border: '4px solid #FED7AA',
              borderTop: '4px solid #EA580C',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 24px auto'
            }}></div>
            <div style={{
              fontSize: '1.5rem',
              color: '#78350F',
              fontWeight: 'bold'
            }}>
              Preparando seus resultados...
            </div>
          </div>
        </div>
      }>
        <ResultsContent />
      </Suspense>

      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}