import { motion } from 'framer-motion';
import { Code2, Coffee, Users, Trophy } from 'lucide-react';
import { SectionTitle, Button } from '../ui';
import { aboutContent } from '../../data/portfolio';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';

const stats = [
  { icon: <Code2 size={24} />, value: '50+', label: 'Projects Completed' },
  { icon: <Coffee size={24} />, value: '5+', label: 'Years Experience' },
  { icon: <Users size={24} />, value: '30+', label: 'Happy Clients' },
  { icon: <Trophy size={24} />, value: '10+', label: 'Awards Won' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Get To Know Me" title="About Me" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-6" />
              {/* Main image container */}
              <div className="relative bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
              >
                <Code2 className="text-blue-600" size={32} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
              >
                <Coffee className="text-purple-600" size={32} />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passionate Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {aboutContent.description}
            </p>

            {/* Highlights */}
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-8"
            >
              {aboutContent.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full" />
                  {highlight}
                </motion.li>
              ))}
            </motion.ul>

            <Button variant="primary" size="lg">
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
