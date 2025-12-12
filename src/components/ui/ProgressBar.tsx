import { motion } from 'framer-motion';

interface ProgressBarProps {
  value: number;
  label: string;
  delay?: number;
}

export const ProgressBar = ({ value, label, delay = 0 }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{value}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};
