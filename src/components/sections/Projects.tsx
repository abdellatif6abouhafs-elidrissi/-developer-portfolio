import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ExternalLink, Github, Globe, Smartphone } from 'lucide-react';
import { SectionTitle, Card, Button } from '../ui';
import { projects } from '../../data/portfolio';
import { fadeInUp } from '../../hooks/useScrollAnimation';

// Swiper styles
import 'swiper/swiper-bundle.css';

type CategoryFilter = 'all' | 'web' | 'mobile';

const categories: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'web', label: 'Web Apps', icon: <Globe size={16} /> },
  { id: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={16} /> },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="My Recent Work" title="Featured Projects" />

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          key={activeCategory}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: (typeof projects)[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            project.category === 'mobile'
              ? 'bg-purple-500 text-white'
              : 'bg-blue-500 text-white'
          }`}>
            {project.category === 'mobile' ? 'Mobile App' : 'Web App'}
          </span>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-800 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};
