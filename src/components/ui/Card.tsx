import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card = ({ children, hover = true, className = '' }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/30 overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
