'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizIntro() {
  const [started, setStarted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);
  const router = useRouter();

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isMobile = windowWidth < 768;

  const handleSubmit = () => {
    setStarted(true);
    setTimeout(() => {
      router.push('/quiz');
    }, 800);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      padding: isMobile ? '1rem 1rem 2rem' : '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#1f2937'
    }}>

      {/* Logo no topo */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: isMobile ? '1rem' : '2rem',
        marginBottom: isMobile ? '1rem' : '1.5rem'
      }}>
        <img
          src="/logodark.webp"
          alt="Logo Guia Shih Tzu"
          style={{
            height: isMobile ? '35px' : '45px',
            width: 'auto'
          }}
        />
      </div>

      {/* Título principal compacto */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '1.5rem' : '2rem'
      }}>
        <h1 style={{
          fontSize: isMobile ? '1.4rem' : '2rem',
          fontWeight: '900',
          margin: '0 0 0.5rem 0',
          lineHeight: '1.1',
          color: '#b91c1c',
          textShadow: '0 2px 4px rgba(185, 28, 28, 0.2)'
        }}>
          Teste: Você Está Cuidando<br />Bem do Seu Shih Tzu?
        </h1>

        <p style={{
          fontSize: isMobile ? '0.875rem' : '1rem',
          color: '#111827',
          margin: '0',
          fontWeight: '600'
        }}>
          <span style={{ color: '#b91c1c', fontWeight: '700' }}>A maioria dos tutores</span> ama seus pets,<br />
          mas sem saber está encurtando a vida deles 💔
        </p>
      </div>

      {/* Aviso */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '1rem' : '1.5rem'
      }}>
        <div style={{
          display: 'inline-block',
          backgroundColor: '#fee2e2',
          color: '#991b1b',
          padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
          borderRadius: '25px',
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          fontWeight: '700',
          border: '2px solid #fca5a5',
          marginBottom: isMobile ? '0.75rem' : '1rem'
        }}>
          ⚠️ AVISO: Este teste pode revelar cuidados que você não sabia
        </div>

        <h2 style={{
          fontSize: isMobile ? '0.9rem' : '1.1rem',
          fontWeight: '800',
          color: '#111827',
          margin: 0
        }}>
          Descubra em <span style={{ color: '#b91c1c' }}>30 segundos</span> se você está
        </h2>
      </div>

      {/* Comparação VS - sem box */}
      <div style={{
        position: 'relative',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        padding: isMobile ? '0.75rem 1rem' : '1rem'
      }}>
        {/* Linha divisória sutil */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          right: '25%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.1) 80%, transparent 100%)',
          transform: 'translateY(-50%)'
        }} />

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            flex: 1,
            padding: isMobile ? '0.5rem' : '0.75rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? '0.5rem' : '0.75rem',
              filter: 'drop-shadow(0 2px 6px rgba(5, 150, 105, 0.4))'
            }}>
              <svg width={isMobile ? "36" : "42"} height={isMobile ? "36" : "42"} viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#047857" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              fontSize: isMobile ? '0.85rem' : '0.95rem',
              color: '#064e3b',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '0.15rem'
            }}>
              Cuidando bem
            </div>
            <div style={{
              fontSize: isMobile ? '0.7rem' : '0.8rem',
              color: '#374151',
              fontWeight: '600',
              lineHeight: '1.2'
            }}>
              e prolongando a vida
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            fontSize: isMobile ? '2rem' : '3rem',
            color: '#1f2937',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(31, 41, 55, 0.2)'
          }}>VS</div>

          <div style={{
            textAlign: 'center',
            flex: 1,
            padding: isMobile ? '0.5rem' : '0.75rem'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: isMobile ? '0.5rem' : '0.75rem',
              filter: 'drop-shadow(0 2px 6px rgba(220, 38, 38, 0.4))'
            }}>
              <svg width={isMobile ? "36" : "42"} height={isMobile ? "36" : "42"} viewBox="0 0 24 24" fill="none">
                <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#b91c1c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{
              fontSize: isMobile ? '0.85rem' : '0.95rem',
              color: '#7f1d1d',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '0.15rem'
            }}>
              Cometendo erros
            </div>
            <div style={{
              fontSize: isMobile ? '0.7rem' : '0.8rem',
              color: '#374151',
              fontWeight: '600',
              lineHeight: '1.2'
            }}>
              que encurtam anos
            </div>
          </div>
        </div>
      </div>

      {/* Privacy badge - linha simples */}
      <div style={{
        textAlign: 'center',
        marginBottom: isMobile ? '1.5rem' : '2rem',
        borderTop: '2px solid #d1d5db',
        borderBottom: '2px solid #d1d5db',
        padding: '0.75rem 0'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: isMobile ? '0.75rem' : '0.875rem',
          color: '#0369a1',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L3 3v4c0 3.5 2.36 6.82 5.5 7.64C11.64 13.82 14 10.5 14 7V3L8 1z" fill="#0369a1"/>
          </svg>
          100% Anônimo • Não coletamos dados
        </div>
      </div>

      {/* CTA Button - área restante */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: isMobile ? '1rem' : '2rem'
      }}>
        <button
          onClick={handleSubmit}
          disabled={started}
          style={{
            width: '100%',
            background: started
              ? 'linear-gradient(135deg, #22c55e, #16a34a)'
              : 'linear-gradient(135deg, #dc2626, #b91c1c)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: isMobile ? '1.25rem' : '1.5rem',
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            fontWeight: '900',
            cursor: started ? 'default' : 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            boxShadow: started
              ? '0 8px 16px rgba(34, 197, 94, 0.3)'
              : '0 8px 20px rgba(220, 38, 38, 0.4)',
            transform: started ? 'scale(0.98)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            if (!started) {
              e.target.style.transform = 'scale(1.02)';
              e.target.style.boxShadow = '0 12px 28px rgba(220, 38, 38, 0.5)';
            }
          }}
          onMouseOut={(e) => {
            if (!started) {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4)';
            }
          }}
        >
          {started ? '🚀 Iniciando...' : 'Descobrir em 30 Segundos →'}
        </button>

        {/* Estatísticas pequenas */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '1rem' : '2rem',
          marginTop: '1rem',
          marginBottom: '0.75rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '800',
              color: '#b91c1c',
              lineHeight: '1'
            }}>10</div>
            <div style={{
              fontSize: isMobile ? '0.55rem' : '0.6rem',
              color: '#4b5563',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}>Cuidado básico</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '800',
              color: '#047857',
              lineHeight: '1'
            }}>16</div>
            <div style={{
              fontSize: isMobile ? '0.55rem' : '0.6rem',
              color: '#4b5563',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}>Cuidado ideal</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: '800',
              color: '#d97706',
              lineHeight: '1'
            }}>6</div>
            <div style={{
              fontSize: isMobile ? '0.55rem' : '0.6rem',
              color: '#4b5563',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}>Perdidos</div>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          fontSize: isMobile ? '0.6rem' : '0.7rem',
          color: '#4b5563',
          fontWeight: '600'
        }}>
          Baseado em dados veterinários • Não substitui consulta profissional
        </div>
      </div>
    </div>
  );
}