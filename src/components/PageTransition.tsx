import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 0.61, 0.36, 1], // Deceleration curve inspired by luxury designs
      }}
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
};
