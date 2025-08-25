'use client';
import { useState, useEffect } from 'react';

export default function FinalCall() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 31,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#6b5335' }}>
            Qual é o Preço da Dúvida?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className="bg-white border-4 rounded-lg p-8 text-center"
            style={{ borderColor: '#04b720' }}
          >
            <div className="w-20 h-20 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold gradient-bg-green">
              ✓
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#04b720' }}
            >
              R$ 37
            </h3>
            <p className="font-semibold text-lg" style={{ color: '#04b720' }}>
              para ter 100% de certeza
            </p>
            <ul className="mt-4 space-y-2" style={{ color: '#04b720' }}>
              <li>✅ Guia completo</li>
              <li>✅ Calculadora de ração</li>
              <li>✅ Checklist diário</li>
              <li>✅ Todos os bônus</li>
              <li>✅ Garantia de 7 dias</li>
            </ul>
          </div>

          <div
            className="bg-white border-4 rounded-lg p-8 text-center"
            style={{ borderColor: '#8c1bab' }}
          >
            <div className="w-20 h-20 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold gradient-bg-pink">
              ✗
            </div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: '#8c1bab' }}
            >
              OU
            </h3>
            <p className="font-semibold text-lg" style={{ color: '#8c1bab' }}>
              continuar apostando no achômetro...
            </p>
            <ul className="mt-4 space-y-2" style={{ color: '#8c1bab' }}>
              <li>❌ Erros custosos</li>
              <li>❌ Pet com problemas</li>
              <li>❌ Gastos com veterinário</li>
              <li>❌ Dúvidas constantes</li>
              <li>❌ Arrependimento</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-black text-white p-6 rounded-lg mb-8 inline-block">
            <h4 className="text-xl font-bold mb-4">⏰ OFERTA EXPIRA EM:</h4>
            <div className="flex justify-center space-x-4 text-3xl font-bold">
              <div className="px-4 py-2 rounded gradient-bg-pink">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="px-4 py-2 rounded gradient-bg-pink">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="px-4 py-2 rounded gradient-bg-pink">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="flex justify-center space-x-8 text-sm mt-2 text-gray-300">
              <span>HORAS</span>
              <span>MINUTOS</span>
              <span>SEGUNDOS</span>
            </div>
          </div>

          <div>
            <button className="gradient-bg-pink text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all animate-pulse">
              QUERO TER CERTEZA ABSOLUTA – R$ 37
            </button>
          </div>

          <p className="mt-6" style={{ color: '#2c2c2c' }}>
            ⚡ Acesso imediato após o pagamento
          </p>
        </div>
      </div>
    </section>
  );
}
