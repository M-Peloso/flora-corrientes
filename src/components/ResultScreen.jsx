import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, TreePine } from 'lucide-react';

const ResultScreen = ({ score, total, onRestart }) => {
  return (
    <motion.div 
      className="screen-container result-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="score-circle"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <span className="score-number">{score}</span>
        <span className="score-total">de {total}</span>
      </motion.div>

      <motion.h2 
        className="result-message"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ¡Felicidades! Ahora estás listo para conocer a los gigantes de nuestra tierra. <TreePine style={{display: 'inline', verticalAlign: 'text-bottom'}} color="#166534"/>
      </motion.h2>

      <motion.button 
        className="btn btn-primary"
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <RotateCcw size={20} /> Jugar de nuevo
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;
