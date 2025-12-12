import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{ x: theme === 'dark' ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <Moon size={12} className="text-gray-800" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
};
