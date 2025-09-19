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
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-center text-white">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">🚀 Preparando seus resultados...</h2>
              <p className="text-lg opacity-90">Carregando dados completos de {petName}</p>
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
          maxWidth: '48rem',
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
            Parabéns! Quiz completo! 🎉
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-green-500 mb-8">
            <div className="text-4xl md:text-5xl mb-6">
              🎯
            </div>

            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
              VER RESULTADOS
            </h2>

            <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-6">
              Em apenas <span style={{ fontWeight: 'bold', color: '#10B981' }}>30 segundos</span> você:
            </p>

            <div className="text-left max-w-2xl mx-auto bg-green-50 rounded-2xl p-6 md:p-8 mb-8">
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>✅</span>
                <span className="text-sm md:text-base">Descobriu erros que nem sabia que existiam</span>
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🧠</span>
                <span className="text-sm md:text-base">Aprendeu de forma rápida e eficaz</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🎮</span>
                <span className="text-sm md:text-base">Comprovou que o método interativo FUNCIONA</span>
              </div>
            </div>

            <p className="text-base md:text-lg text-green-600 font-bold mb-8">
              Imagine aprender TUDO sobre Shih Tzus assim! 🚀
            </p>

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
                <span className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
      </>
    );
  }
}

export default function QuizResults() {
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
  );
}