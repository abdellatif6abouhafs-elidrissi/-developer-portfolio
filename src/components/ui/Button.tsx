import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600',
    outline: 'border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
