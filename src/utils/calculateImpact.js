// Sistema de cálculo de impacto na vida do Shih Tzu

export const calculateLifeImpact = (answers) => {
  const baseLifeExpectancy = 15; // anos base para Shih Tzu
  let totalImpact = 0;
  let criticalErrors = [];
  let commonMistakes = [];
  let correctAnswers = 0;
  
  answers.forEach((answer) => {
    totalImpact += answer.impact;
    
    if (answer.impact === 0) {
      correctAnswers++;
    } else if (answer.impact <= -3) {
      criticalErrors.push({
        question: answer.questionId,
        mistake: answer.text,
        consequence: answer.consequence,
        yearsLost: Math.abs(answer.impact)
      });
    } else if (answer.impact < 0) {
      commonMistakes.push({
        question: answer.questionId,
        mistake: answer.text,
        consequence: answer.consequence,
        yearsLost: Math.abs(answer.impact)
      });
    }
  });
  
  // Calcular expectativa de vida final
  const projectedLifespan = Math.max(2, Math.min(18, baseLifeExpectancy + totalImpact));
  const yearsLost = Math.max(0, baseLifeExpectancy - projectedLifespan);
  
  // Calcular porcentagem de conhecimento
  const percentageKnowledge = Math.max(0, Math.round((correctAnswers / answers.length) * 100));
  
  // Determinar gravidade da situação
  const severity = getSeverityLevel(totalImpact, criticalErrors.length);
  
  // Calcular estatísticas adicionais
  const avgTimePerQuestion = answers.reduce((sum, answer) => sum + (answer.timeSpent || 0), 0) / answers.length;
  const hasUrgentErrors = criticalErrors.length > 0;
  
  return {
    // Resultados principais
    projectedLifespan: Number(projectedLifespan.toFixed(1)),
    yearsLost: Number(yearsLost.toFixed(1)),
    percentageKnowledge,
    totalImpact,
    
    // Categorização de erros
    criticalErrors,
    commonMistakes,
    correctAnswers,
    
    // Análise comportamental
    severity,
    avgTimePerQuestion: Math.round(avgTimePerQuestion),
    hasUrgentErrors,
    
    // Perfil do tutor
    profile: getTutorProfile(percentageKnowledge, criticalErrors.length, totalImpact),
    
    // Recomendações personalizadas
    recommendations: getRecommendations(criticalErrors, commonMistakes, percentageKnowledge),
    
    // Urgência emocional
    urgencyMessage: getUrgencyMessage(yearsLost, criticalErrors.length, percentageKnowledge)
  };
};

const getSeverityLevel = (totalImpact, criticalErrorsCount) => {
  if (totalImpact >= -1 && criticalErrorsCount === 0) {
    return {
      level: 'Excelente',
      emoji: '🏆',
      color: '#059669',
      description: 'Você é um tutor exemplar!'
    };
  } else if (totalImpact >= -3 && criticalErrorsCount <= 1) {
    return {
      level: 'Bom',
      emoji: '👍',
      color: '#65A30D',
      description: 'No caminho certo, mas pode melhorar'
    };
  } else if (totalImpact >= -6 && criticalErrorsCount <= 2) {
    return {
      level: 'Preocupante',
      emoji: '⚠️',
      color: '#D97706',
      description: 'Alguns erros graves que precisam de atenção'
    };
  } else if (totalImpact >= -10 && criticalErrorsCount <= 3) {
    return {
      level: 'Crítico',
      emoji: '🚨',
      color: '#DC2626',
      description: 'Erros que podem encurtar significativamente a vida'
    };
  } else {
    return {
      level: 'Emergencial',
      emoji: '💀',
      color: '#7F1D1D',
      description: 'Situação de risco extremo - ação imediata necessária'
    };
  }
};

const getTutorProfile = (knowledge, criticalErrors, totalImpact) => {
  if (knowledge >= 80 && criticalErrors === 0) {
    return {
      type: 'Expert Consciente',
      description: 'Você demonstra conhecimento avançado e toma decisões corretas',
      strengths: ['Conhecimento técnico', 'Decisões informadas', 'Prevenção'],
      needsImprovement: ['Manter-se atualizado', 'Compartilhar conhecimento']
    };
  } else if (knowledge >= 60 && criticalErrors <= 1) {
    return {
      type: 'Tutor Dedicado',
      description: 'Você se importa muito, mas ainda tem pontos cegos importantes',
      strengths: ['Amor pelo pet', 'Disposição para aprender'],
      needsImprovement: ['Conhecimento técnico', 'Identificação de riscos']
    };
  } else if (knowledge >= 40 && criticalErrors <= 2) {
    return {
      type: 'Iniciante Cuidadoso',
      description: 'Você quer fazer o melhor, mas precisa de orientação',
      strengths: ['Intenção de cuidar bem', 'Reconhece limitações'],
      needsImprovement: ['Educação básica', 'Prevenção de erros graves']
    };
  } else if (knowledge >= 20) {
    return {
      type: 'Tutor em Risco',
      description: 'Várias práticas perigosas que colocam seu pet em risco',
      strengths: ['Ainda há tempo para mudar'],
      needsImprovement: ['Educação urgente', 'Mudança de hábitos', 'Acompanhamento veterinário']
    };
  } else {
    return {
      type: 'Situação Crítica',
      description: 'Conhecimento insuficiente está colocando seu pet em perigo real',
      strengths: ['Fez o teste - primeiro passo'],
      needsImprovement: ['Educação imediata', 'Supervisão profissional', 'Mudança radical de práticas']
    };
  }
};

const getRecommendations = (criticalErrors, commonMistakes, knowledge) => {
  const recommendations = [];
  
  // Recomendações baseadas em erros críticos
  if (criticalErrors.length > 0) {
    recommendations.push({
      priority: 'URGENTE',
      title: 'Corrigir Erros Fatais Imediatamente',
      description: `Você cometeu ${criticalErrors.length} erro(s) que podem ser fatais. Estas práticas devem ser interrompidas hoje mesmo.`,
      actions: criticalErrors.map(error => `• Parar: ${error.mistake}`)
    });
  }
  
  // Recomendações baseadas em erros comuns
  if (commonMistakes.length > 0) {
    recommendations.push({
      priority: 'IMPORTANTE',
      title: 'Corrigir Práticas Prejudiciais',
      description: `${commonMistakes.length} práticas estão reduzindo a qualidade de vida do seu pet.`,
      actions: commonMistakes.slice(0, 3).map(error => `• Revisar: ${error.mistake}`)
    });
  }
  
  // Recomendações baseadas no nível de conhecimento
  if (knowledge < 30) {
    recommendations.push({
      priority: 'CRÍTICO',
      title: 'Educação Imediata Necessária',
      description: 'Seu nível de conhecimento atual representa risco para seu pet.',
      actions: [
        '• Buscar orientação veterinária urgente',
        '• Estudar cuidados básicos com Shih Tzu',
        '• Considerar curso de primeiros socorros pet'
      ]
    });
  } else if (knowledge < 60) {
    recommendations.push({
      priority: 'MODERADO',
      title: 'Expandir Conhecimento',
      description: 'Base boa, mas ainda há lacunas importantes.',
      actions: [
        '• Aprofundar conhecimento sobre nutrição',
        '• Aprender sobre sinais de alerta de saúde',
        '• Estabelecer rotina preventiva'
      ]
    });
  }
  
  return recommendations;
};

const getUrgencyMessage = (yearsLost, criticalErrors, knowledge) => {
  if (yearsLost >= 8) {
    return {
      title: 'EMERGÊNCIA: Seu pet pode perder mais da metade da vida!',
      message: `Com suas práticas atuais, você pode estar roubando ${yearsLost} anos preciosos do seu companheiro.`,
      emotion: 'CHOQUE',
      color: '#7F1D1D'
    };
  } else if (yearsLost >= 5) {
    return {
      title: 'ALERTA VERMELHO: Anos preciosos sendo perdidos',
      message: `${yearsLost} anos é tempo demais para perder por erros evitáveis.`,
      emotion: 'URGÊNCIA',
      color: '#DC2626'
    };
  } else if (yearsLost >= 2) {
    return {
      title: 'ATENÇÃO: Tempo valioso em risco',
      message: `Mesmo ${yearsLost} anos representam tempo precioso que vocês poderiam ter juntos.`,
      emotion: 'PREOCUPAÇÃO',
      color: '#D97706'
    };
  } else if (yearsLost > 0) {
    return {
      title: 'Pequenos ajustes, grandes ganhos',
      message: `Algumas correções podem garantir que vocês aproveitem cada momento juntos.`,
      emotion: 'OTIMISMO',
      color: '#65A30D'
    };
  } else {
    return {
      title: 'Parabéns! Você está no caminho certo!',
      message: 'Continue assim e seu pet terá uma vida longa e feliz ao seu lado.',
      emotion: 'CELEBRAÇÃO',
      color: '#059669'
    };
  }
};

// Funções auxiliares para análise estatística
export const getAverageImpact = (answers) => {
  return answers.reduce((sum, answer) => sum + answer.impact, 0) / answers.length;
};

export const getMostDangerousChoice = (answers) => {
  return answers.reduce((worst, current) => 
    current.impact < worst.impact ? current : worst
  );
};

export const getTimeAnalysis = (answers) => {
  const times = answers.map(a => a.timeSpent || 0);
  return {
    fastest: Math.min(...times),
    slowest: Math.max(...times),
    average: times.reduce((sum, time) => sum + time, 0) / times.length
  };
};