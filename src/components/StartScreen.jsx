import React from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const StartScreen = ({ onStart }) => {
  return (
    <motion.div 
      className="screen-container start-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Leaf className="leaf leaf-1" color="#4ade80" />
      <Leaf className="leaf leaf-2" color="#fbbf24" />
      
      <motion.h1 
        className="title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        ¡Desafío Verde!
      </motion.h1>
      
      <motion.p 
        className="subtitle"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        ¿Cuánto sabes sobre la Flora de Corrientes?
      </motion.p>
      
      <motion.button 
        className="btn btn-primary"
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ¡Empezar a Jugar! <Leaf size={20} />
      </motion.button>
    </motion.div>
  );
};

export default StartScreen;
