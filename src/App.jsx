import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';

function App() {
  const [gameState, setGameState] = useState('start'); // start, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('result');
    }
  };

  const handleRestart = () => {
    setGameState('start');
  };

  return (
    <AnimatePresence mode="wait">
      {gameState === 'start' && (
        <StartScreen key="start" onStart={handleStart} />
      )}
      {gameState === 'quiz' && (
        <QuizScreen 
          key="quiz" 
          questionData={questions[currentQuestionIndex]}
          totalQuestions={questions.length}
          currentIndex={currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      )}
      {gameState === 'result' && (
        <ResultScreen 
          key="result" 
          score={score}
          total={questions.length}
          onRestart={handleRestart}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
