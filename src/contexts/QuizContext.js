'use client';
import { createContext, useContext, useReducer, useEffect } from 'react';

const QuizContext = createContext();

// Estados do quiz
const QUIZ_STATES = {
  INTRO: 'intro',
  QUESTION: 'question',
  FEEDBACK: 'feedback',
  RESULTS: 'results',
  PITCH: 'pitch'
};

// Ações do reducer
const ACTIONS = {
  SET_PET_NAME: 'SET_PET_NAME',
  START_QUIZ: 'START_QUIZ',
  NEXT_QUESTION: 'NEXT_QUESTION',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  SHOW_FEEDBACK: 'SHOW_FEEDBACK',
  SHOW_RESULTS: 'SHOW_RESULTS',
  COMPLETE_QUIZ: 'COMPLETE_QUIZ',
  SET_ERROR: 'SET_ERROR',
  RESTORE_STATE: 'RESTORE_STATE'
};

const initialState = {
  // Estado atual
  currentState: QUIZ_STATES.INTRO,

  // Dados do quiz
  petName: '',
  currentQuestion: 0,
  answers: [],
  results: null,

  // UI states
  isLoading: false,
  showFeedback: false,
  selectedAnswer: null,
  timeLeft: 30,

  // Performance tracking
  startTime: null,
  questionStartTime: null,

  // Persuasão
  yearsGained: 0,
  livesImpacted: 0,

  // Error handling
  error: null
};

function quizReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PET_NAME:
      return {
        ...state,
        petName: action.payload,
        livesImpacted: state.livesImpacted + 1
      };

    case ACTIONS.START_QUIZ:
      return {
        ...state,
        currentState: QUIZ_STATES.QUESTION,
        startTime: Date.now(),
        questionStartTime: Date.now(),
        timeLeft: action.payload?.timeLimit || 30
      };

    case ACTIONS.ANSWER_QUESTION:
      const newAnswer = {
        ...action.payload,
        timeSpent: Math.max(0, (state.timeLeft - (action.payload.timeRemaining || 0))),
        timestamp: Date.now()
      };

      const newAnswers = [...state.answers, newAnswer];
      const yearsChange = newAnswer.impact >= 0 ? Math.abs(newAnswer.impact) : 0;

      return {
        ...state,
        selectedAnswer: newAnswer,
        answers: newAnswers,
        yearsGained: state.yearsGained + yearsChange,
        livesImpacted: state.livesImpacted + (newAnswer.impact >= 0 ? 1 : 0)
      };

    case ACTIONS.SHOW_FEEDBACK:
      return {
        ...state,
        currentState: QUIZ_STATES.FEEDBACK,
        showFeedback: true
      };

    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentState: QUIZ_STATES.QUESTION,
        currentQuestion: state.currentQuestion + 1,
        showFeedback: false,
        selectedAnswer: null,
        questionStartTime: Date.now(),
        timeLeft: action.payload?.timeLimit || 30
      };

    case ACTIONS.SHOW_RESULTS:
      // Force save data when showing results
      try {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('quizAnswers', JSON.stringify(state.answers));
          sessionStorage.setItem('petName', state.petName);
          console.log('Forçando salvamento dos dados do quiz:', {
            answers: state.answers.length,
            petName: state.petName
          });
        }
      } catch (error) {
        console.error('Erro ao forçar salvamento:', error);
      }

      return {
        ...state,
        currentState: QUIZ_STATES.RESULTS,
        results: action.payload,
        showFeedback: false
      };

    case ACTIONS.COMPLETE_QUIZ:
      return {
        ...state,
        currentState: QUIZ_STATES.PITCH
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case ACTIONS.RESTORE_STATE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

// Triple persistence system
const STORAGE_KEY = 'quiz_state';

const saveState = (state) => {
  try {
    // 1. Memory (already in state)

    // 2. SessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        petName: state.petName,
        currentQuestion: state.currentQuestion,
        answers: state.answers,
        yearsGained: state.yearsGained,
        livesImpacted: state.livesImpacted,
        timestamp: Date.now()
      }));

      // 3. URL Hash (emergency fallback)
      const hashData = btoa(JSON.stringify({
        q: state.currentQuestion,
        n: state.petName?.slice(0, 10) || '',
        a: state.answers.length
      }));
      window.location.hash = hashData;
    }
  } catch (error) {
    console.warn('Failed to save quiz state:', error);
  }
};

const loadState = () => {
  try {
    if (typeof window === 'undefined') return null;

    // Try sessionStorage first
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      // Only restore if less than 1 hour old
      if (Date.now() - data.timestamp < 3600000) {
        return data;
      }
    }

    // Fallback to URL hash
    const hash = window.location.hash.slice(1);
    if (hash) {
      const data = JSON.parse(atob(hash));
      return {
        currentQuestion: data.q || 0,
        petName: data.n || '',
        answers: new Array(data.a || 0).fill({})
      };
    }
  } catch (error) {
    console.warn('Failed to load quiz state:', error);
  }

  return null;
};

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Restore state on mount
  useEffect(() => {
    const savedState = loadState();
    if (savedState) {
      dispatch({ type: ACTIONS.RESTORE_STATE, payload: savedState });
    }
  }, []);

  // Auto-save state changes
  useEffect(() => {
    if (state.petName || state.answers.length > 0) {
      saveState(state);
    }
  }, [state.petName, state.currentQuestion, state.answers]);

  // Clear storage on completion
  useEffect(() => {
    if (state.currentState === QUIZ_STATES.PITCH) {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
        window.location.hash = '';
      } catch (error) {
        console.warn('Failed to clear storage:', error);
      }
    }
  }, [state.currentState]);

  const value = {
    state,
    dispatch,
    actions: ACTIONS,
    states: QUIZ_STATES
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}

export { QUIZ_STATES, ACTIONS };