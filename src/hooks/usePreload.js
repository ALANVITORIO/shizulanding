'use client';
import { useEffect, useRef } from 'react';
import { questions } from '../data/questions';

export function usePreload() {
  const preloadedImages = useRef(new Set());
  const preloadedQuestions = useRef(new Map());

  // Preload images
  const preloadImage = (src) => {
    if (!src || preloadedImages.current.has(src)) return;

    const img = new Image();
    img.src = src;
    preloadedImages.current.add(src);
  };

  // Preload next question data
  const preloadQuestion = (questionIndex) => {
    if (questionIndex >= questions.length || preloadedQuestions.current.has(questionIndex)) {
      return;
    }

    const question = questions[questionIndex];

    // Mark as preloaded
    preloadedQuestions.current.set(questionIndex, question);

    // Preload image if exists
    if (question.image) {
      preloadImage(question.image);
    }

    // Preload next question image too (lookahead)
    if (questionIndex + 1 < questions.length && questions[questionIndex + 1].image) {
      preloadImage(questions[questionIndex + 1].image);
    }
  };

  // Preload all critical images on mount
  useEffect(() => {
    // Preload first 3 question images immediately
    questions.slice(0, 3).forEach(question => {
      if (question.image) {
        preloadImage(question.image);
      }
    });

    // Preload rest with delay to not block initial render
    const timer = setTimeout(() => {
      questions.slice(3).forEach(question => {
        if (question.image) {
          preloadImage(question.image);
        }
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return {
    preloadQuestion,
    preloadImage,
    isImagePreloaded: (src) => preloadedImages.current.has(src),
    isQuestionPreloaded: (index) => preloadedQuestions.current.has(index)
  };
}

export function useMomentum() {
  const momentumState = useRef({
    consecutiveCorrect: 0,
    speed: 1,
    lastAnswerTime: Date.now()
  });

  const updateMomentum = (isCorrect, timeSpent) => {
    const now = Date.now();
    const state = momentumState.current;

    if (isCorrect) {
      state.consecutiveCorrect++;
      // Faster answers = higher momentum
      if (timeSpent < 10) {
        state.speed = Math.min(2, state.speed + 0.2);
      }
    } else {
      state.consecutiveCorrect = 0;
      state.speed = Math.max(0.8, state.speed - 0.1);
    }

    state.lastAnswerTime = now;
  };

  const getMomentumMultiplier = () => {
    return momentumState.current.speed;
  };

  const getStreakBonus = () => {
    const streak = momentumState.current.consecutiveCorrect;
    if (streak >= 3) return '🔥 EM CHAMAS!';
    if (streak >= 2) return '⚡ ACELERANDO!';
    return '';
  };

  return {
    updateMomentum,
    getMomentumMultiplier,
    getStreakBonus,
    currentStreak: momentumState.current.consecutiveCorrect
  };
}