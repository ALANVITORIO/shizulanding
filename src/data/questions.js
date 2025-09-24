// Base de perguntas "Máquina do Tempo Shih Tzu"
// Cada pergunta calcula anos de vida perdidos/ganhos

export const questions = [
  // Pergunta 7 do original -> agora aparece como Pergunta 1 (invertido)
  {
    id: 1,
    type: 'scenario',
    title: 'Bumbum arrastando no tapete',
    question: 'Seu Shih Tzu começa a arrastar o bumbum no tapete. O que isso quase sempre significa?',
    options: [
      { text: 'Vermes. É o sinal universal.', value: 'A', impact: -2 },
      { text: 'Apenas uma mania para chamar atenção.', value: 'B', impact: -3 },
      { text: 'Sujeira presa no pelo.', value: 'C', impact: -1 },
      { text: 'As glândulas anais estão cheias e o incomodando.', value: 'D', impact: 0 },
      { text: 'Coceira por causa de pulgas.', value: 'E', impact: -1 }
    ],
    difficulty: 'hard',
    educational: 'Arrastar o bumbum geralmente indica glândulas anais cheias — raro ser só verme.'
  },

  // Pergunta 6 -> agora id 2
  {
    id: 2,
    type: 'scenario',
    title: 'Máquina de criar nós aos 9 meses',
    question: 'Seu Shih Tzu de 9 meses virou uma máquina de criar nós, do nada. Qual a causa mais provável?',
    options: [
      { text: 'Falta de vitamina na ração.', value: 'A', impact: -2 },
      { text: 'Alergia de pele começando.', value: 'B', impact: -2 },
      { text: 'Ele está se coçando e criando os nós.', value: 'C', impact: -1 },
      { text: 'É a troca natural de pelo de filhote para adulto. É uma fase, respira fundo!', value: 'D', impact: 0 },
      { text: 'Você precisa dar banho com mais frequência.', value: 'E', impact: -2 }
    ],
    difficulty: 'hard',
    educational: 'A troca de pelagem entre filhote e adulto costuma causar nós temporários — paciência e escovação correta ajudam.'
  },

  // Pergunta 5 -> agora id 3
  {
    id: 3,
    type: 'scenario',
    title: 'Nós no banho',
    question: 'Hora do banho! Seu Shih Tzu está com nós no pelo. Qual é a ação correta que você faz primeiro?',
    options: [
      { text: 'Molhar bem e passar muito condicionador.', value: 'A', impact: -3 },
      { text: 'Colocar direto na água, o shampoo ajuda a soltar.', value: 'B', impact: -3 },
      { text: 'Tentar abrir os nós com os dedos durante o banho.', value: 'C', impact: -2 },
      { text: 'NÃO MOLHAR! Água transforma o nó em cimento. Desfaça tudo a seco.', value: 'D', impact: 0 },
      { text: 'Deixar para a escova resolver depois do banho.', value: 'E', impact: -2 }
    ],
    difficulty: 'hard',
    educational: 'Desfazer nós a seco antes do banho evita que eles se fortaleçam com água.'
  },

  // Pergunta 4 -> agora id 4
  {
    id: 4,
    type: 'scenario',
    title: 'Por que Shih Tzu tem muitos problemas genéticos?',
    question: 'Por que a raça Shih Tzu parece ter tantos probleminhas genéticos? Qual o fato histórico que explica isso?',
    options: [
      { text: 'Eram cães de palácio, muito mimados.', value: 'A', impact: -2 },
      { text: 'O focinho achatado causa a maioria dos problemas.', value: 'B', impact: -2 },
      { text: 'São uma raça muito antiga e "desgastada".', value: 'C', impact: -2 },
      { text: 'A raça inteira descende de apenas 14 cães.', value: 'D', impact: 0 },
      { text: 'O cruzamento original com o Lhasa Apso.', value: 'E', impact: -1 }
    ],
    difficulty: 'hard',
    educational: 'Bottlenecks genéticos ocorridos historicamente explicam alta incidência de problemas em algumas linhagens.'
  },

  // Pergunta 3 -> agora id 5
  {
    id: 5,
    type: 'scenario',
    title: 'Socialização vs vacinas',
    question: 'O veterinário mandou seu filhote ficar em casa até completar todas as vacinas. Mas você sabe que a socialização é crítica até as 14 semanas. Qual é o maior risco para o futuro do seu pet?',
    options: [
      { text: 'Sair na rua. O risco de doença é maior.', value: 'A', impact: -2 },
      { text: 'Deixar ele ver outros cães só pela janela.', value: 'B', impact: -2 },
      { text: 'Perder a "janela" crítica até as 14 semanas. Um cão medroso é para sempre.', value: 'C', impact: 0 },
      { text: 'Assustá-lo com muitos humanos de uma vez.', value: 'D', impact: -1 },
      { text: 'Deixar para socializar só depois dos 6 meses.', value: 'E', impact: -2 }
    ],
    difficulty: 'hard',
    educational: 'A janela crítica de socialização vai até ~14 semanas; perder esse período aumenta risco de medo permanente.'
  },

  // Pergunta 2 -> agora id 6
  {
    id: 6,
    type: 'scenario',
    title: 'Como testar temperamento no canil',
    question: 'Você está no canil, cercado de fofura. Como você descobre qual filhote tem o melhor temperamento?',
    options: [
      { text: 'Ver qual é o mais quietinho e calmo.', value: 'A', impact: -2 },
      { text: 'Escolher o líder da turma, o mais valente.', value: 'B', impact: -2 },
      { text: 'Pegar o que corre primeiro para o seu colo.', value: 'C', impact: -2 },
      { text: 'Pressionar o polegar na boca. O que relaxa a mandíbula é nota 10.', value: 'D', impact: 0 },
      { text: 'Ver qual deles não chora quando você o segura.', value: 'E', impact: -1 }
    ],
    difficulty: 'hard',
    educational: 'Testes simples de relaxamento da mandíbula ajudam a identificar filhotes com temperamento mais estável.'
  },

  // Pergunta 1 -> agora id 7
  {
    id: 7,
    type: 'scenario',
    title: 'Idade mínima para levar o filhote para casa',
    question: 'Você achou o filhote dos sonhos! Qual a idade MÍNIMA ideal para ele finalmente ir para casa com você?',
    options: [
      { text: '45 dias, assim que para de mamar.', value: 'A', impact: -3 },
      { text: '8 semanas (60 dias), o padrão do mercado.', value: 'B', impact: -2 },
      { text: '12 semanas (3 meses), para mais imunidade e "aulas" com a mãe.', value: 'C', impact: 0 },
      { text: 'Assim que tomar a primeira vacina.', value: 'D', impact: -2 },
      { text: 'Quando parecer forte o bastante para você.', value: 'E', impact: -2 }
    ],
    difficulty: 'hard',
    educational: 'Levar o filhote após 12 semanas oferece mais imunidade e aprendizado social com a mãe.'
  }
];
