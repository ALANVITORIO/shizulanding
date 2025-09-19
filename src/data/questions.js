// Base de perguntas "Máquina do Tempo Shih Tzu"
// Cada pergunta calcula anos de vida perdidos/ganhos

export const questions = [
  {
    id: 1,
    type: 'scenario',
    title: 'Shih Tzu Bebendo Muita Água',
    image: '/shi1.webp',
    context: 'Nos últimos dias você notou que seu Shih Tzu está bebendo água direto e fazendo xixi toda hora.',
    question: 'O que você faz?',
    options: [
      {
        text: 'É normal no calor, só observo',
        value: 'A',
        impact: -3,
        consequence: 'Beber água excessiva pode ser sinal de displasia renal, comum em Shih Tzus. Ignorar pode causar danos irreversíveis.',
        immediate: 'Sintomas continuam piorando.',
        longTerm: 'Aos 2 anos: Insuficiência renal, tratamento caro ou óbito.'
      },
      {
        text: 'Diminuo a água para ele parar de fazer xixi',
        value: 'B',
        impact: -5,
        consequence: 'PERIGOSO! Restringir água em caso de problema renal pode causar desidratação e morte rápida.',
        immediate: 'Shih Tzu fica desidratado rapidamente.',
        longTerm: 'Em dias: Emergência veterinária, possível óbito.'
      },
      {
        text: 'Levo no veterinário na mesma semana',
        value: 'C',
        impact: 0,
        consequence: 'Correto! Shih Tzus têm predisposição genética para problemas renais. Diagnóstico precoce salva vidas.',
        immediate: 'Veterinário faz exames específicos.',
        longTerm: 'Tratamento precoce garante vida normal.'
      },
      {
        text: 'Espero mais uns dias para ver se melhora',
        value: 'D',
        impact: -4,
        consequence: 'Displasia renal progride rapidamente em Shih Tzus. Cada dia perdido reduz chances de recuperação.',
        immediate: 'Quadro se agrava em 48-72h.',
        longTerm: 'Aos 18 meses: Danos renais permanentes.'
      }
      ,
      {
        text: 'Dou água e observo com atenção, buscando sinais mais claros',
        value: 'E',
        impact: -1,
        consequence: 'Observar sem agir pode atrasar o diagnóstico, mas é menos arriscado que restringir água.',
        immediate: 'Pode atrasar exames alguns dias.',
        longTerm: 'Risco aumentado de agravamento se sinais progredirem.'
      }
    ],
    timeLimit: 30,
    difficulty: 'hard',
    educational: '30% dos Shih Tzus carregam predisposição genética para displasia renal. Sede excessiva é o primeiro sinal.'
  },

  {
    id: 2,
    type: 'scenario',
    title: 'Filhote de Shih Tzu - Alimentação',
    image: '/shi2.webp',
    context: 'Você acabou de pegar um filhote de Shih Tzu de 4 meses.',
    question: 'Quantas vezes por dia você deve dar comida?',
    options: [
      {
        text: '2 vezes como cachorro adulto',
        value: 'A',
        impact: -3,
        consequence: 'Filhotes de Shih Tzu precisam de mais refeições. Duas vezes causa hipoglicemia e problemas de crescimento.',
        immediate: 'Filhote fica fraco entre as refeições.',
        longTerm: 'Aos 8 meses: Desenvolvimento atrasado, baixo peso, sistema imune fraco.'
      },
      {
        text: '3 vezes por dia',
        value: 'B',
        impact: 0,
        consequence: 'Perfeito! Filhotes de 3-5 meses precisam de 3-4 refeições diárias para crescimento saudável.',
        immediate: 'Filhote cresce forte e saudável.',
        longTerm: 'Aos 6 meses: Desenvolvimento perfeito, transição para 2 refeições.'
      },
      {
        text: '1 vez só mas bem cheio',
        value: 'C',
        impact: -5,
        consequence: 'PERIGOSO! Uma refeição grande causa sobrecarga digestiva e risco de torção gástrica em Shih Tzus.',
        immediate: 'Vômito, diarreia, barriga inchada.',
        longTerm: 'Emergência veterinária, possível cirurgia de R$ 3.000.'
      },
      {
        text: '5 vezes com pouca comida',
        value: 'D',
        impact: -1,
        consequence: 'Muitas refeições pequenas podem causar ansiedade alimentar e problemas comportamentais.',
        immediate: 'Filhote fica ansioso, implora comida.',
        longTerm: 'Aos 1 ano: Comportamento obsessivo com comida.'
      }
      ,{
        text: '4 vezes por dia, balanceando porções',
        value: 'E',
        impact: 0,
        consequence: 'Uma alternativa válida para alguns filhotes com alto metabolismo; funciona com orientação veterinária.',
        immediate: 'Energia estável durante o dia.',
        longTerm: 'Crescimento saudável se porções bem ajustadas.'
      }
    ],
    timeLimit: 30,
    difficulty: 'hard',
    educational: 'Filhotes de 3-5 meses precisam de 3-4 refeições diárias. Após 6 meses, reduzir para 2 refeições.'
  },

  {
    id: 3,
    type: 'scenario',
    title: 'Shih Tzu com Comportamento Estranho',
    image: '/shi3.webp',
    context: 'Seu Shih Tzu começou a apertar a cabeça na parede e anda em círculos sem parar.',
    question: 'Isso pode ser sinal de que problema comum em Shih Tzus?',
    options: [
      {
        text: 'Shih Tzu está entediado, precisa brincar mais',
        value: 'A',
        impact: -4,
        consequence: 'ERRO GRAVE! Esses sintomas indicam shunt hepático, problema sério no fígado. Ignorar pode ser fatal.',
        immediate: 'Sintomas pioram rapidamente.',
        longTerm: 'Em semanas: Convulsões, coma, óbito sem tratamento.'
      },
      {
        text: 'Shunt hepático - problema no fígado comum na raça',
        value: 'B',
        impact: 0,
        consequence: 'CORRETO! Shih Tzus têm predisposição a anomalias vasculares portossistêmicas (shunt hepático).',
        immediate: 'Diagnóstico precoce salva vidas.',
        longTerm: 'Com cirurgia: Vida normal. Sem tratamento: Fatal.'
      },
      {
        text: 'Shih Tzu está com dor de cabeça pelo focinho achatado',
        value: 'C',
        impact: -2,
        consequence: 'Focinho achatado causa problemas respiratórios, não neurológicos. Você perdeu o diagnóstico correto.',
        immediate: 'Tratamento errado aplicado.',
        longTerm: 'Shunt hepático progride, complicações graves.'
      },
      {
        text: 'Comportamento normal de Shih Tzu quando nervoso',
        value: 'D',
        impact: -5,
        consequence: 'PERIGOSO! Pressionar cabeça na parede nunca é normal. É sinal neurológico de emergência.',
        immediate: 'Condição se deteriora rapidamente.',
        longTerm: 'Damage neurológico irreversível, possível óbito.'
      }
      ,{
        text: 'Levo ao veterinário para avaliação neurológica',
        value: 'E',
        impact: 0,
        consequence: 'Acertou em priorizar avaliação especializada — muitas condições neurológicas têm tratamento eficaz.',
        immediate: 'Exames iniciados rapidamente.',
        longTerm: 'Melhores chances de recuperação com diagnóstico precoce.'
      }
    ],
    timeLimit: 30,
    difficulty: 'hard',
    educational: 'Shunt hepático afeta Shih Tzus jovens. Sintomas: desorientação, andar em círculos, pressionar cabeça na parede.'
  },

  {
    id: 4,
    type: 'scenario',
    title: 'Pelo do Shih Tzu Embaraçando',
    image: '/problema.webp',
    context: 'O pelo do seu Shih Tzu que antes era fácil de pentear, agora vive embaraçando.',
    question: 'Com que idade isso geralmente acontece?',
    options: [
      {
        text: '6 meses',
        value: 'A',
        impact: -2,
        consequence: 'Muito cedo. A mudança de pelagem acontece mais tarde, você perdeu o momento de preparação.',
        immediate: 'Não estava preparado para a mudança.',
        longTerm: 'Pelos embaraçaram, tosa drástica necessária.'
      },
      {
        text: '10 meses',
        value: 'B',
        impact: 0,
        consequence: 'Correto! Entre 9-12 meses a pelagem muda de textura e requer cuidados redobrados.',
        immediate: 'Você estava preparado para a mudança.',
        longTerm: 'Pelagem sempre bem cuidada, sem nós.'
      },
      {
        text: '2 anos',
        value: 'C',
        impact: -1,
        consequence: 'Muito tarde. A mudança já aconteceu e você perdeu 1 ano de cuidados específicos.',
        immediate: 'Já sofreu com nós por meses.',
        longTerm: 'Ciclo de tosas drásticas estabelecido.'
      },
      {
        text: '4 meses',
        value: 'D',
        impact: -3,
        consequence: 'Muito cedo. Filhotes têm pelo macio. Ignorar a mudança real aos 9-12 meses causa sofrimento.',
        immediate: 'Expectativa errada sobre cuidados.',
        longTerm: 'Shih Tzu sofre com nós dolorosos.'
      },
      {
        text: '12 meses - quando termina o crescimento',
        value: 'E',
        impact: -1,
        consequence: 'Quase correto, mas um pouco tarde. A mudança começa aos 9 meses, não espera o fim do crescimento.',
        immediate: 'Alguns nós já se formaram.',
        longTerm: 'Precisa de cuidado extra para recuperar.'
      }
    ],
    timeLimit: 15,
    difficulty: 'hard',
    educational: 'Entre 9-12 meses a textura do pelo muda. É quando precisa de escovação diária obrigatória.'
  },

  {
    id: 5,
    type: 'scenario',
    title: 'Filhote de Shih Tzu com Pata Levantada',
    image: '/tranformacao2.webp',
    context: 'Seu filhote de Shih Tzu de 5 meses às vezes levanta a patinha de trás e manca, depois volta ao normal.',
    question: 'Isso é normal?',
    options: [
      {
        text: 'Sim, é brincadeira de filhote',
        value: 'A',
        impact: -3,
        consequence: 'ERRO! Levantar a pata não é brincadeira. É sinal de luxação patelar, comum em Shih Tzus jovens.',
        immediate: 'Problema vai piorando com o tempo.',
        longTerm: 'Aos 1 ano: Luxação permanente, cirurgia de R$ 2.500.'
      },
      {
        text: 'Não, pode ser luxação da patela',
        value: 'B',
        impact: 0,
        consequence: 'Correto! Luxação patelar aparece antes dos 6 meses em Shih Tzus. Diagnóstico precoce é essencial.',
        immediate: 'Veterinário confirma e inicia tratamento.',
        longTerm: 'Tratamento precoce evita cirurgia, vida normal.'
      },
      {
        text: 'Normal, vai passar sozinho',
        value: 'C',
        impact: -4,
        consequence: 'PERIGOSO! Luxação patelar NUNCA passa sozinha. Sem tratamento, piora progressivamente.',
        immediate: 'Filhote começa a mancar mais vezes.',
        longTerm: 'Aos 8 meses: Dor crônica, limitação permanente.'
      },
      {
        text: 'Só se acontecer todo dia',
        value: 'D',
        impact: -2,
        consequence: 'Frequência não importa. Uma única luxação já indica problema que precisa de avaliação veterinária.',
        immediate: 'Tempo perdido para diagnóstico.',
        longTerm: 'Diagnóstico tardio, tratamento mais complexo.'
      }
      ,{
        text: 'Dou analgésico caseiro e observo',
        value: 'E',
        impact: -4,
        consequence: 'Medicar sem diagnóstico pode mascarar sintomas e atrasar tratamento adequado.',
        immediate: 'Sintomas temporariamente aliviados.',
        longTerm: 'Piora da condição e risco de cirurgia mais complexa.'
      }
    ],
    timeLimit: 15,
    difficulty: 'hard',
    educational: 'Luxação patelar aparece tipicamente antes dos 6 meses em Shih Tzus. Não é normal nem passa sozinho.'
  },

  {
    id: 6,
    type: 'scenario',
    title: 'Rotina de Escovação',
    image: '/transformacao1.webp',
    context: 'Você está com pressa pela manhã. A escovação do seu Shih Tzu demora 15 minutos.',
    question: 'Você pula a escovação por 3 dias. O que acontece?',
    options: [
      {
        text: 'Nada demais, escovo no fim de semana',
        value: 'A',
        impact: -2,
        consequence: 'Nós se formam em 48h. Em 3 dias: nós dolorosos que só saem no tosador.',
        immediate: 'Pelagem parece ok por cima.',
        longTerm: 'Tosa na máquina zero, pet "pelado" por 2 meses, trauma com escovação.'
      },
      {
        text: 'Alguns nós que desembaraço depois',
        value: 'B',
        impact: -1.5,
        consequence: 'Nós apertados causam dor constante e problemas de pele.',
        immediate: 'Pet começa a resistir ao toque.',
        longTerm: 'Dermatite, coceira crônica, feridas de lambedura.'
      },
      {
        text: 'Nós impossíveis, preciso tosar tudo',
        value: 'C',
        impact: -1,
        consequence: 'Compreende a gravidade, mas subestima o sofrimento causado.',
        immediate: 'Pet aliviado após tosa.',
        longTerm: 'Ciclo de tosa radical a cada 2 meses.'
      },
      {
        text: 'Escovo todos os dias, mesmo com pressa',
        value: 'D',
        impact: 0,
        consequence: 'Perfeito! Escovação diária previne nós e mantém pelagem saudável.',
        immediate: 'Pelagem sempre sedosa e sem nós.',
        longTerm: 'Pet feliz, pelagem exuberante, tosas apenas estéticas.'
      }
      ,{
        text: 'Escovo só quando vejo nós graves',
        value: 'E',
        impact: -2,
        consequence: 'Escovação reativa permite que nós se formem e causem dor; não é recomendada.',
        immediate: 'Maior chance de nós dolorosos.',
        longTerm: 'Ciclo de tosa drástica e desconforto contínuo.'
      }
    ],
    timeLimit: 30,
    difficulty: 'hard',
    educational: 'Pelagem de Shih Tzu forma nós em 24-48h sem escovação. É doloroso e causa sofrimento.'
  },

  {
    id: 7,
    type: 'myth',
    title: 'VENENO MORTAL - Uvas',
    image: '/grafico.webp',
    statement: 'Uma única uva ou passa pode causar insuficiência renal aguda em Shih Tzus',
    question: 'Isso é verdadeiro ou falso?',
    options: [
      {
        text: 'FALSO - Precisa de várias para fazer mal',
        value: false,
        impact: -5,
        consequence: 'ERRO GRAVÍSSIMO! Uma única uva pode ser FATAL. Insuficiência renal em 24h.',
        immediate: 'Pet pode parecer normal por horas.',
        longTerm: 'Falência renal súbita, diálise ou MORTE.'
      },
      {
        text: 'VERDADEIRO - Uma única pode matar',
        value: true,
        impact: 0,
        consequence: 'Correto! Uvas são extremamente tóxicas. Emergência veterinária imediata se ingerida.',
        immediate: 'Conhecimento que pode salvar vidas.',
        longTerm: 'Pet protegido de intoxicação fatal.'
      }
      ,{
        text: 'Não sei, nunca ouvi falar',
        value: false,
        impact: -3,
        consequence: 'Ignorar ou desconhecer o perigo aumenta risco de exposição acidental.',
        immediate: 'Maior chance de oferecer alimento perigoso.',
        longTerm: 'Risco de intoxicação por desconhecimento.'
      },
      {
        text: 'Depende do tamanho do cão',
        value: false,
        impact: -2,
        consequence: 'Não existe quantidade segura comprovada; depender do porte é um mito perigoso.',
        immediate: 'Falsa segurança ao oferecer pequenas porções.',
        longTerm: 'Possibilidade de intoxicação aguda.'
      },
      {
        text: 'Se for passada, é menos risco',
        value: false,
        impact: -2,
        consequence: 'Passas também são perigosas; processamento não elimina toxinas em cães.',
        immediate: 'Falsa sensação de segurança.',
        longTerm: 'Risco de insuficiência renal aguda.'
      }
    ],
    timeLimit: 15,
    difficulty: 'hard',
    educational: 'Uvas/passas causam falência renal súbita. Não existe quantidade segura.',
    statistics: '67% dos tutores não sabem que uva é mortal para cães.'
  },

  {
    id: 8,
    type: 'scenario',
    title: 'Dia de Verão - 35°C',
    image: '/transformacao3.webp',
    context: 'Seu Shih Tzu está ofegante, língua roxa, cambaleando após 10 minutos no quintal.',
    question: 'Sua ação imediata?',
    options: [
      {
        text: 'Banho gelado imediatamente',
        value: 'A',
        impact: -4,
        consequence: 'CHOQUE TÉRMICO! Mudança brusca de temperatura pode causar parada cardíaca.',
        immediate: 'Pet entra em choque, convulsões.',
        longTerm: 'Sequelas neurológicas permanentes ou óbito.'
      },
      {
        text: 'Ventilador direto e água gelada para beber',
        value: 'B',
        impact: -2,
        consequence: 'Água gelada pode causar choque. Ventilador não é suficiente.',
        immediate: 'Melhora leve, mas insuficiente.',
        longTerm: 'Danos em órgãos por hipertermia prolongada.'
      },
      {
        text: 'Toalhas úmidas temperatura ambiente no corpo',
        value: 'C',
        impact: 0,
        consequence: 'CORRETO! Resfriamento gradual é seguro e eficaz.',
        immediate: 'Temperatura normaliza em 15 minutos.',
        longTerm: 'Sem sequelas, pet saudável.'
      },
      {
        text: 'Levo correndo pro ar condicionado',
        value: 'D',
        impact: -1.5,
        consequence: 'Mudança brusca de temperatura, mas menos grave que banho gelado.',
        immediate: 'Pet melhora, mas com desconforto.',
        longTerm: 'Sistema imune comprometido, gripes frequentes.'
      }
      ,{
        text: 'Coloco o pet em sombra e ofereço pequenas gotas de água e refrigerar gradualmente',
        value: 'E',
        impact: 0,
        consequence: 'Ação cuidadosa que evita choque térmico e estabiliza a temperatura de forma segura.',
        immediate: 'Temperatura cai de forma controlada.',
        longTerm: 'Sem sequelas quando bem assistido.'
      }
    ],
    timeLimit: 20,
    difficulty: 'hard',
    educational: 'Shih Tzus têm focinho achatado = não regulam temperatura bem. Superaquecimento é emergência!',
    critical: true
  },

  {
    id: 9,
    type: 'myth',
    title: 'Capacidade Física',
    image: '/transformacao4.webp',
    statement: 'Shih Tzus podem fazer caminhadas de 1 hora sem problemas',
    question: 'Isso é verdadeiro ou falso?',
    options: [
      {
        text: 'VERDADEIRO - São cães resistentes',
        value: false,
        impact: -3,
        consequence: 'PERIGOSO! Shih Tzus têm limitação respiratória. Podem colapsar por exaustão.',
        immediate: 'Pet pode parecer resistir no início.',
        longTerm: 'Problemas cardíacos, colapso respiratório, vida útil reduzida.',
        details: 'Máximo 20-30 minutos de caminhada leve, com pausas.'
      },
      {
        text: 'FALSO - Têm limitações respiratórias',
        value: true,
        impact: 0,
        consequence: 'Correto! Braquicefálicos têm limitações respiratórias sérias.',
        immediate: 'Exercícios adequados à capacidade.',
        longTerm: 'Sistema cardiovascular saudável, longevidade.',
        details: 'Exercícios curtos e moderados, sempre observando respiração.'
      },
      {
        text: 'FALSO - Depende do clima',
        value: true,
        impact: -1,
        consequence: 'Parcialmente correto, mas mesmo em clima ideal, 1 hora é demais.',
        immediate: 'Cuidado adequado com temperatura.',
        longTerm: 'Risco reduzido mas ainda existe.'
      },
      {
        text: 'FALSO - Máximo 30 minutos com pausas',
        value: true,
        impact: 0,
        consequence: 'Perfeito! Demonstra conhecimento específico sobre a raça.',
        immediate: 'Exercícios ideais para a capacidade.',
        longTerm: 'Saúde cardiovascular ótima.'
      },
      {
        text: 'VERDADEIRO - Se acostumados gradualmente',
        value: false,
        impact: -2,
        consequence: 'Erro! Mesmo com adaptação, 1 hora é perigoso para braquicefálicos.',
        immediate: 'Falsa sensação de segurança.',
        longTerm: 'Risco de problemas respiratórios.'
      }
    ],
    timeLimit: 15,
    difficulty: 'hard',
    educational: 'Síndrome braquicefálica = vias aéreas comprometidas. Exercício excessivo pode ser fatal.',
    statistics: '71% forçam exercícios além do limite seguro.'
  },

  {
    id: 10,
    type: 'scenario',
    title: 'Decisão de Castração',
    image: '/ctadiva.webp',
    context: 'Sua Shih Tzu fêmea tem 6 meses. O veterinário recomenda castração.',
    question: 'Quando você castra?',
    options: [
      {
        text: 'Nunca, é mutilação desnecessária',
        value: 'A',
        impact: -4,
        consequence: 'Risco de piometra (infecção uterina) 25% após 10 anos. Tumores mamários 26% sem castração.',
        immediate: 'Pet continua normal.',
        longTerm: 'Aos 8 anos: Piometra, cirurgia emergencial R$ 4.000 ou óbito.'
      },
      {
        text: 'Após o primeiro cio para "maturidade"',
        value: 'B',
        impact: -2,
        consequence: 'Mito! Cada cio aumenta risco de câncer mamário em 8%.',
        immediate: 'Cio aos 8 meses, castração aos 10.',
        longTerm: 'Risco de tumor mamário aumentado em 8%.'
      },
      {
        text: 'Aos 6 meses como recomendado',
        value: 'C',
        impact: 0,
        consequence: 'Perfeito! Castração precoce reduz risco de câncer mamário para 0.5%.',
        immediate: 'Recuperação rápida em 10 dias.',
        longTerm: 'Vida longa e saudável, sem complicações reprodutivas.'
      },
      {
        text: 'Depois de uma ninhada para "realizar"',
        value: 'D',
        impact: -3,
        consequence: 'Gravidez em Shih Tzu = alto risco. Cesariana comum por pelve estreita.',
        immediate: 'Gravidez, parto complicado.',
        longTerm: 'Complicações no parto, cesariana R$ 2.500, risco de óbito materno.'
      }
      ,{
        text: 'Avaliar caso a caso com o veterinário antes de decidir',
        value: 'E',
        impact: 0,
        consequence: 'Planejamento com o profissional é sempre recomendado quando há dúvidas específicas.',
        immediate: 'Discussão de riscos e benefícios.',
        longTerm: 'Decisão informada e segura para a tutora e para o pet.'
      }
    ],
    timeLimit: 30,
    difficulty: 'hard',
    educational: 'Castração antes do primeiro cio reduz câncer mamário para quase zero.',
    critical: true
  }
];