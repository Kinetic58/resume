
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: t('project1Title'),
      description: t('project1Description'),
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Python'],
    },
    {
      id: '2',
      title: t('project2Title'),
      description: t('project2Description'),
      imageUrl: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Python'],
    },
    {
      id: '3',
      title: t('project3Title'),
      description: t('project3Description'),
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Python'],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AnimatedText text={t('projectsTitle')} />
          </h2>
          <p className="text-lg text-muted-foreground">
            <AnimatedText text={t('projectsSubtitle')} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={cn(
                  "absolute inset-0 bg-neon-blue/20 transition-opacity duration-300 z-10",
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )}></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-secondary/50 text-neon-blue px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-neon-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-neon-blue text-sm font-medium transition-all gap-1 group-hover:gap-2"
                >
                  View Project
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
