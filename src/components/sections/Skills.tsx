import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionTitle, ProgressBar } from '../ui';
import { skills } from '../../data/portfolio';
import { fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import type { Skill } from '../../types';

type Category = 'all' | Skill['category'];

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All Skills' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'tools', label: 'Tools' },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="What I Can Do" title="My Skills" />

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              layout
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <ProgressBar
                label={skill.name}
                value={skill.level}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Icons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
