'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'O guia funciona mesmo que eu nunca tenha tido cachorro?',
      a: 'Sim! O Sistema Eva foi criado exatamente para iniciantes. A Eva explica cada conceito de forma simples, como uma amiga experiente faria. Você não precisa de conhecimento prévio sobre pets.'
    },
    {
      q: 'Meu Shih Tzu já é adulto, o guia ainda vai me ajudar?',
      a: 'Perfeitamente! O guia cobre desde filhote até idoso. Se seu Shih Tzu já é adulto, você vai direto para os capítulos específicos da idade dele. As ferramentas funcionam para qualquer idade.'
    },
    {
      q: 'Como é diferente de outros guias sobre cachorros?',
      a: 'Outros guias falam de "cachorros em geral". O nosso é 100% focado na personalidade e necessidades específicas dos Shih Tzus. É como a diferença entre um médico generalista e um especialista.'
    },
    {
      q: 'Preciso estar sempre online para usar?',
      a: 'Não! Tudo funciona offline. Baixa uma vez e consulta quando quiser - no veterinário, viajando, ou durante uma emergência sem internet.'
    },
    {
      q: 'Como funciona a calculadora de ração?',
      a: 'Você coloca o peso e idade do seu Shih Tzu, ela calcula automaticamente a quantidade exata em gramas. Elimina erros de dosagem que podem causar obesidade ou desnutrição.'
    },
    {
      q: 'Em quanto tempo vou ver resultados?',
      a: 'Depende do que você quer melhorar. Alimentação correta com a calculadora é imediata. Comportamento pode levar de dias a algumas semanas, dependendo da constância que você aplicar as técnicas.'
    },
    {
      q: 'Como vou receber o acesso?',
      a: 'Após a confirmação do pagamento, você recebe um email com o link de acesso em até 10 minutos. Para pagamento por boleto, o prazo é de 1 dia útil.'
    },
    {
      q: 'Funciona em qualquer celular ou computador?',
      a: 'Sim! Funciona em iPhone, Android, computador, tablet. Se abre pelo navegador, não precisa instalar nada.'
    },
    {
      q: 'E se eu não ficar satisfeito?',
      a: 'Você tem 7 dias para testar tudo. Se não ficar 100% satisfeito, devolvemos o dinheiro completo sem perguntas.'
    },
    {
      q: 'Por que custa só R$ 37 se tem tanto conteúdo?',
      a: 'Porque queremos que qualquer tutor tenha acesso aos cuidados corretos, independente da condição financeira. Uma consulta veterinária custa mais que isso.'
    },
    {
      q: 'Posso imprimir o conteúdo?',
      a: 'O formato é otimizado para telas (por isso é interativo), mas você pode imprimir partes específicas se preferir ter algo no papel.'
    },
    {
      q: 'Tem suporte se eu tiver dúvidas?',
      a: 'Sim! Temos suporte por WhatsApp para tirar dúvidas sobre o conteúdo e uso das ferramentas.'
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#F8F6F3] to-white relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2C1810]">Perguntas Frequentes</h2>
          <p className="text-[#6B5335] mt-2">Dúvidas comuns sobre o guia e os bônus</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 border border-[#E5E1DC] rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full p-5 flex items-start justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
              >
                <div className="text-left">
                  <div className="text-sm text-[#6B5335] font-semibold">Pergunta</div>
                  <div className="font-medium text-[#2C1810] text-lg">{item.q}</div>
                </div>
                <div className="flex items-center">
                  <ChevronDown className={`w-5 h-5 text-[#8B6F47] transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <div
                id={`faq-${idx}`}
                className={`px-5 pb-5 text-[#6B5335] text-sm ${openIndex === idx ? 'block' : 'hidden'}`}
              >
                {item.a}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
