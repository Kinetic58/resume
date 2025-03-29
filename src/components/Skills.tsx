
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import { Brain, Users, MessageSquare, Workflow, LucideIcon } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
};

type SoftSkill = {
  name: string;
  icon: React.ReactNode;
  description?: string;
};

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [isInView, setIsInView] = useState(false);

  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'JavaScript', level: 85, category: 'backend' },
    { name: 'Go', level: 80, category: 'backend' },
    { name: 'C++', level: 70, category: 'backend' },
    { name: 'Julia', level: 60, category: 'backend' },
    { name: 'R', level: 70, category: 'backend' },
    { name: 'Flask', level: 90, category: 'tools' },
    { name: 'Django', level: 85, category: 'tools' },
    { name: 'TensorFlow', level: 85, category: 'tools' },
    { name: 'Keras', level: 80, category: 'tools' },
    { name: 'Scikit-Learn', level: 90, category: 'tools' },
    { name: 'PyTorch', level: 85, category: 'tools' },
    { name: 'Git', level: 95, category: 'tools' },
    { name: 'HTML/CSS', level: 75, category: 'frontend' },
    { name: 'React', level: 70, category: 'frontend' },
  ];

  const softSkills: SoftSkill[] = [
    { name: t('softSkill1'), icon: <Brain className="w-6 h-6 text-neon-blue" /> },
    { name: t('softSkill2'), icon: <Users className="w-6 h-6 text-neon-blue" /> },
    { name: t('softSkill3'), icon: <MessageSquare className="w-6 h-6 text-neon-blue" /> },
    { name: t('softSkill4'), icon: <Workflow className="w-6 h-6 text-neon-blue" /> },
    { name: t('softSkill5'), icon: <Brain className="w-6 h-6 text-neon-blue" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getCategoryTitle = (category: 'frontend' | 'backend' | 'tools') => {
    switch (category) {
      case 'frontend':
        return t('frontendTitle');
      case 'backend':
        return t('backendTitle');
      case 'tools':
        return t('toolsTitle');
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AnimatedText text={t('skillsTitle')} />
          </h2>
          <p className="text-lg text-muted-foreground">
            <AnimatedText text={t('skillsSubtitle')} />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {(['frontend', 'backend', 'tools'] as const).map((category) => (
            <div key={category} className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-neon-blue">
                {getCategoryTitle(category)}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            'h-full bg-neon-blue rounded-full transition-all duration-1000 ease-out',
                            isInView ? 'w-full' : 'w-0'
                          )}
                          style={{
                            width: isInView ? `${skill.level}%` : '0%',
                            transitionDelay: isInView ? `${skills.indexOf(skill) * 0.1}s` : '0s',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-8 text-neon-blue text-center">
            {t('softSkillsTitle')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 transform transition-all duration-300 hover:scale-105 hover:bg-black/30"
              >
                <div className="mb-3 p-3 rounded-full bg-black/30">
                  {skill.icon}
                </div>
                <h4 className="font-medium text-sm">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
