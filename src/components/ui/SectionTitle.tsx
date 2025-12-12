import { motion } from 'framer-motion';
import { fadeInUp } from '../../hooks/useScrollAnimation';

interface SectionTitleProps {
  subtitle: string;
  title: string;
}

export const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-blue-600 dark:text-blue-400 font-medium text-sm uppercase tracking-wider">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
        {title}
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
    </motion.div>
  );
};
