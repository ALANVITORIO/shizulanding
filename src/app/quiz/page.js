'use client';
import { QuizProvider } from '../../contexts/QuizContext';
import QuizApp from '../../components/QuizApp';

export default function QuizPage() {
  return (
    <QuizProvider>
      <QuizApp />
    </QuizProvider>
  );
}