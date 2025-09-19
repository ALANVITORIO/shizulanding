'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizIntro() {
  const [petName, setPetName] = useState('');
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
  const isTablet = windowWidth < 1024;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (petName.trim()) {
      setStarted(true);
      setTimeout(() => {
        router.push(`/quiz/questoes?name=${encodeURIComponent(petName)}`);
      }, 1000);
    }
  };
  
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: isMobile ? 'flex-start' : 'center',
      background: `
        radial-gradient(circle at 50% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
        linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)
      `,
      padding: isMobile ? '1rem 0.25rem 0.25rem' : isTablet ? '0.5rem' : '0.75rem',
      position: 'relative',
      overflowY: 'auto', // Apenas vertical, evitando cortes horizontais
      boxSizing: 'border-box' // Garante que padding não aumente altura total
    }}>

      <div style={{
        maxWidth: isMobile ? '100%' : isTablet ? '48rem' : '64rem',
        width: '100%',
        padding: '0 0.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Header com urgência - Responsivo */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '0.5rem' : isTablet ? '0.75rem' : '1rem',
          opacity: started ? 0.7 : 1,
          transform: started ? 'scale(0.98)' : 'scale(1)',
          transition: 'all 0.8s ease'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto 0.5rem'
          }}>
            <img
              src="/logodark.webp"
              alt="Logo Guia Shih Tzu"
              style={{
                height: isMobile ? '40px' : isTablet ? '50px' : '60px',
                width: 'auto'
              }}
            />
          </div>

          <h1 style={{
            fontSize: isMobile ? '1.25rem' : isTablet ? '1.75rem' : '2.25rem',
            fontWeight: '900',
            color: '#111827',
            marginBottom: isMobile ? '0.5rem' : '0.75rem',
            lineHeight: '1.05',
            padding: '0 0.5rem',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)',
            animation: 'slideInDown 1s ease-out'
          }}>
            Teste: Você Está Cuidando<br />Bem do Seu Shih Tzu?
          </h1>

          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: isMobile ? '0.5rem' : '0.75rem',
            margin: '0 auto 0.25rem',
            maxWidth: '600px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            animation: 'slideInUp 1s ease-out 0.3s both'
          }}>
            <p style={{
              fontSize: isMobile ? '1rem' : isTablet ? '1.2rem' : '1.4rem',
              color: '#374151',
              padding: '0',
              lineHeight: '1.5',
              fontWeight: '600',
              margin: 0
            }}>
              <span style={{
                fontWeight: '800',
                color: '#dc2626'
              }}>A maioria dos tutores</span> ama seus pets,<br />
              mas sem saber está encurtando a vida deles 💔
            </p>
          </div>
        </div>
        
        {/* Card principal - Responsivo */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '1.5rem',
          boxShadow: started 
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.1)' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          padding: isMobile ? '0.75rem' : isTablet ? '1rem' : '1.25rem',
          margin: '0 auto',
          transform: started ? 'scale(0.98)' : 'scale(1)',
          transition: 'all 0.8s ease'
        }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '0.5rem' : '0.75rem' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#FEE2E2',
              color: '#991B1B',
              padding: isMobile ? '0.375rem 0.75rem' : '0.5rem 1rem',
              borderRadius: '9999px',
              marginBottom: '0.5rem',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: '600',
              animation: started ? 'none' : 'pulse 2s infinite'
            }}>
              ⚠️ AVISO: Este teste pode revelar cuidados que você não sabia
            </div>
            
            <h2 style={{
              fontSize: isMobile ? '0.875rem' : isTablet ? '1rem' : '1.125rem',
              fontWeight: 'bold',
              marginBottom: isMobile ? '0.25rem' : '0.5rem',
              lineHeight: '1.1',
              color: '#111827'
            }}>
              Descubra em <span style={{ color: '#2563eb' }}>30 segundos</span> se você está
            </h2>
            
            {/* Grid responsivo */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)', // Layout sempre em 2 colunas para economizar espaço
              gap: isMobile ? '0.25rem' : '0.5rem',
              marginTop: isMobile ? '0.25rem' : '0.5rem'
            }}>
              <div style={{
                backgroundColor: '#F0FDF4',
                padding: isMobile ? '0.375rem' : isTablet ? '0.5rem' : '0.75rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
                border: '1px solid #BBF7D0'
              }}>
                <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '0.5rem' }}>✅</div>
                <p style={{
                  fontWeight: '600',
                  color: '#166534',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  margin: '0'
                }}>Cuidando bem</p>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  color: '#6B7280',
                  margin: '0.25rem 0 0 0'
                }}>e prolongando a vida</p>
              </div>
              <div style={{
                backgroundColor: '#FEF2F2',
                padding: isMobile ? '0.375rem' : isTablet ? '0.5rem' : '0.75rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
                border: '1px solid #FECACA'
              }}>
                <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '0.5rem' }}>❌</div>
                <p style={{
                  fontWeight: '600',
                  color: '#991B1B',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  margin: '0'
                }}>Cometendo erros</p>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  color: '#6B7280',
                  margin: '0.25rem 0 0 0'
                }}>que encurtam anos</p>
              </div>
            </div>
          </div>
          
          {/* Formulário - Responsivo */}
          <form onSubmit={handleSubmit} style={{ marginBottom: isMobile ? '0.5rem' : '0.75rem' }}>
            <div style={{ marginBottom: isMobile ? '0.5rem' : '0.75rem' }}>
              <label style={{
                display: 'block',
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '0.5rem'
              }}>
                Qual o nome do seu Shih Tzu? 🐕
              </label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                placeholder="Digite o nome..."
                style={{
                  width: '100%',
                  padding: isMobile ? '0.875rem' : '1rem 1.25rem',
                  border: '2px solid #e5e7eb',
                  borderRadius: '0.75rem',
                  fontSize: isMobile ? '1rem' : '1.125rem',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#2563eb';
                  e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e5e7eb';
                  e.target.style.boxShadow = 'none';
                }}
                required
                disabled={started}
              />
            </div>
            
            <button
              type="submit"
              disabled={started}
              style={{
                width: '100%',
                padding: isMobile ? '1rem' : '1.25rem',
                borderRadius: '0.75rem',
                fontWeight: 'bold',
                fontSize: isMobile ? '1rem' : '1.125rem',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: started ? 'default' : 'pointer',
                background: started
                  ? '#059669'
                  : 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                color: 'white',
                boxShadow: started 
                  ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transform: started ? 'scale(0.98)' : 'scale(1)',
                opacity: started ? 0.8 : 1
              }}
              onMouseOver={(e) => {
                if (!started) {
                  e.target.style.background = 'linear-gradient(135deg, #1d4ed8, #1e40af)';
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(37, 99, 235, 0.3)';
                }
              }}
              onMouseOut={(e) => {
                if (!started) {
                  e.target.style.background = 'linear-gradient(135deg, #2563eb, #1d4ed8)';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {started ? '✓ Iniciando Teste...' : 'Descobrir em 30 Segundos →'}
            </button>
          </form>
          
          {/* Estatísticas compactas + Disclaimer */}
          <div style={{
            paddingTop: isMobile ? '0.5rem' : '0.75rem',
            borderTop: '1px solid #E5E7EB'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              textAlign: 'center',
              flexWrap: 'nowrap',
              gap: isMobile ? '0.125rem' : '0.25rem'
            }}>
              <div style={{ 
                flex: '1 1 0', // Flex igual para todos
              }}>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : isTablet ? '0.9rem' : '1.125rem',
                  fontWeight: 'bold',
                  color: '#f97316',
                  margin: '0',
                  lineHeight: '1'
                }}>10 anos</p>
                <p style={{
                  fontSize: isMobile ? '0.4rem' : isTablet ? '0.45rem' : '0.55rem',
                  color: '#6B7280',
                  margin: '0.15rem 0 0 0',
                }}>Cuidado básico</p>
              </div>
              <div style={{ 
                flex: '1 1 0', // Flex igual para todos
              }}>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : isTablet ? '0.9rem' : '1.125rem',
                  fontWeight: 'bold',
                  color: '#059669',
                  margin: '0',
                  lineHeight: '1'
                }}>16 anos</p>
                <p style={{
                  fontSize: isMobile ? '0.4rem' : isTablet ? '0.45rem' : '0.55rem',
                  color: '#6B7280',
                  margin: '0.15rem 0 0 0'
                }}>Cuidado ideal</p>
              </div>
              <div style={{
                flex: '1 1 0', // Flex igualmente distribuído
              }}>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : isTablet ? '0.9rem' : '1.125rem',
                  fontWeight: 'bold',
                  color: '#DC2626',
                  margin: '0',
                  lineHeight: '1'
                }}>6 anos</p>
                <p style={{
                  fontSize: isMobile ? '0.4rem' : isTablet ? '0.45rem' : '0.55rem',
                  color: '#6B7280',
                  margin: '0.15rem 0 0 0'
                }}>Perdidos por erros</p>
              </div>
            </div>
            {/* Disclaimer integrado */}
            <p style={{
              textAlign: 'center',
              fontSize: isMobile ? '0.375rem' : isTablet ? '0.4rem' : '0.5rem',
              color: '#6B7280',
              marginTop: isMobile ? '0.25rem' : '0.375rem',
              padding: '0',
              lineHeight: '1.1'
            }}>
              * Teste baseado em dados veterinários. Não substitui consulta profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
