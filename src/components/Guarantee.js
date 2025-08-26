export default function Guarantee() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#6b5335' }}>
            Garantia de Risco Zero
          </h2>
        </div>

        <div
          className="bg-gray-50 rounded-lg shadow-xl p-8 border-4"
          style={{ borderColor: '#04b720' }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-6xl">🛡️</span>
              </div>
            </div>

            <div className="md:w-2/3 text-center md:text-left">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: '#2c2c2c' }}
              >
                Teste por 7 dias.
              </h3>
              <p className="text-xl mb-6" style={{ color: '#2c2c2c' }}>
                Se seu Shih Tzu não parecer mais feliz, devolvemos R$ 37.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-xl mr-3" style={{ color: '#04b720' }}>
                    ✅
                  </span>
                  <span className="font-semibold" style={{ color: '#2c2c2c' }}>
                    Sem perguntas
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-xl mr-3" style={{ color: '#04b720' }}>
                    ✅
                  </span>
                  <span className="font-semibold" style={{ color: '#2c2c2c' }}>
                    Sem burocracia
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start">
                  <span className="text-xl mr-3" style={{ color: '#04b720' }}>
                    ✅
                  </span>
                  <span className="font-semibold" style={{ color: '#2c2c2c' }}>
                    100% do seu dinheiro de volta
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div
              className="bg-white border-2 rounded-lg p-4 mb-6"
              style={{ borderColor: '#04b720' }}
            >
              <p className="font-bold text-lg" style={{ color: '#04b720' }}>
                🔒 Compra 100% segura e protegida
              </p>
            </div>

            <button className="gradient-bg-green text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all">
              QUERO TESTAR SEM RISCO – R$ 37
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="italic" style={{ color: '#2c2c2c' }}>
            &quot;Sua satisfação é nossa prioridade. Queremos que você e seu Shih Tzu sejam completamente felizes!&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
