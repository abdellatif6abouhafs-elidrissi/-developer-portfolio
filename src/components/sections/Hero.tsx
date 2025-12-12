import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui';
import { aboutContent, socialLinks } from '../../data/portfolio';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    twitter: <Twitter size={20} />,
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-blue-600 dark:text-blue-400 font-medium mb-4"
          >
            {aboutContent.greeting}
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {aboutContent.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        >
          {aboutContent.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {aboutContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('#projects')}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {socialIcons[link.icon]}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <ArrowDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};
