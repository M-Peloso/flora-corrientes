import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuizScreen = ({ questionData, totalQuestions, currentIndex, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === questionData.correctAnswerIndex - 1;
    onAnswer(isCorrect);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="quiz-header">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="question-counter">
          {currentIndex + 1} / {totalQuestions}
        </div>
      </div>

      <motion.h2 
        className="question-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={`title-${questionData.id}`}
      >
        {questionData.title}
      </motion.h2>

      <motion.p 
        className="question-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={`text-${questionData.id}`}
      >
        {questionData.question}
      </motion.p>

      <div className="options-grid">
        {questionData.options.map((option, index) => {
          let btnClass = "option-btn";
          if (isAnswered) {
            if (index === questionData.correctAnswerIndex - 1) {
              btnClass += " correct";
            } else if (index === selectedOption) {
              btnClass += " wrong";
            }
          } else if (selectedOption === index) {
            btnClass += " selected";
          }

          return (
            <motion.button
              key={index}
              className={btnClass}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.02 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
            >
              {option}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div 
            className={`feedback-overlay ${selectedOption === questionData.correctAnswerIndex - 1 ? 'correct' : 'wrong'}`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            <div className="feedback-title">
              {selectedOption === questionData.correctAnswerIndex - 1 ? (
                <><CheckCircle2 /> ¡Correcto!</>
              ) : (
                <><XCircle /> No exactamente</>
              )}
            </div>
            <p className="feedback-text">
              {selectedOption === questionData.correctAnswerIndex - 1 
                ? "¡Muy bien hecho!" 
                : "La respuesta correcta era: " + questionData.options[questionData.correctAnswerIndex - 1]
              }
            </p>
            <button className="btn btn-primary" onClick={handleNext} style={{ alignSelf: 'flex-end', background: 'var(--white)', color: 'var(--text-main)' }}>
              Continuar <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizScreen;
