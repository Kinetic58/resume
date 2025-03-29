
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      const { clientX, clientY } = e;
      glowRef.current.style.left = `${clientX - 250}px`;
      glowRef.current.style.top = `${clientY - 250}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Set visibility after small delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    // Add 3D tilt effect to photo
    const photoElement = photoRef.current;
    if (photoElement) {
      const handlePhotoMouseMove = (e: MouseEvent) => {
        const rect = photoElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        photoElement.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
      };
      
      const handlePhotoMouseLeave = () => {
        photoElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      };
      
      photoElement.addEventListener('mousemove', handlePhotoMouseMove);
      photoElement.addEventListener('mouseleave', handlePhotoMouseLeave);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        photoElement.removeEventListener('mousemove', handlePhotoMouseMove);
        photoElement.removeEventListener('mouseleave', handlePhotoMouseLeave);
        clearTimeout(timer);
      };
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={glowRef} className="radial-blur" />
      
      <div 
        className={`container px-6 pt-20 pb-16 flex flex-col items-center justify-center text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="glass-card p-1 rounded-full inline-flex mb-6 opacity-90 animate-pulse-border">
          <div className="bg-secondary/50 rounded-full px-4 py-1.5 text-xs uppercase tracking-wider font-medium">
            {language === 'en' ? 'Backend Developer' : 'Backend-Разработчик'}
          </div>
        </div>
        
        <div 
          ref={photoRef}
          className="mb-8 rounded-full overflow-hidden border-2 border-neon-blue glow-effect w-40 h-40 md:w-48 md:h-48 transition-all duration-300 preserve-3d shadow-xl shadow-neon-blue/20"
        >
          <img 
            src="/profile-photo.png"
            alt={language === 'en' ? 'Rodion Bushuev' : 'Бушуев Родион'} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-4 md:mb-6">
          <AnimatedText 
            text={language === 'en' ? 'Rodion Bushuev' : 'Бушуев Родион'} 
            className="text-foreground leading-tight" 
          />
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
          <AnimatedText
            text={t('heroSubtitle')}
            className="leading-relaxed"
          />
        </p>
        
        <div className="glass-card p-6 rounded-xl w-full max-w-3xl mx-auto mb-8 transition-all duration-500 hover:shadow-neon-blue/20 hover:shadow-lg">
          <div className="mb-4">
            <h3 className="text-sm text-neon-blue font-medium mb-2">{t('specialization')}</h3>
            <p className="text-sm md:text-base">{t('specializationDetails')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="transition-all duration-300 hover:translate-x-1">
              <h3 className="text-sm text-neon-blue font-medium mb-1">{t('educationLabel')}</h3>
              <p className="text-sm md:text-base">{language === 'en' ? 'RTU MIREA, Faculty of Mathematical Modeling' : 'РТУ МИРЭА, Факультет Математического моделирования'}</p>
            </div>
            <div className="transition-all duration-300 hover:translate-x-1">
              <h3 className="text-sm text-neon-blue font-medium mb-1">{t('dobLabel')}</h3>
              <p className="text-sm md:text-base">28.01.2007</p>
            </div>
            <div className="transition-all duration-300 hover:translate-x-1">
              <h3 className="text-sm text-neon-blue font-medium mb-1">{t('englishLabel')}</h3>
              <p className="text-sm md:text-base">B2-C1</p>
            </div>
            <div className="transition-all duration-300 hover:translate-x-1">
              <h3 className="text-sm text-neon-blue font-medium mb-1">{t('employmentLabel')}</h3>
              <p className="text-sm md:text-base">{language === 'en' ? 'Full-time, Part-time' : 'Полная, Частичная'}</p>
            </div>
            <div className="transition-all duration-300 hover:translate-x-1">
              <h3 className="text-sm text-neon-blue font-medium mb-1">{t('scheduleLabel')}</h3>
              <p className="text-sm md:text-base">{language === 'en' ? 'Flexible, Remote' : 'Гибкий график, Удаленная работа'}</p>
            </div>
            <div className="transition-all duration-300 hover:translate-x-1">
              <h3 className="text-sm text-neon-blue font-medium mb-1">{t('travelLabel')}</h3>
              <p className="text-sm md:text-base">{language === 'en' ? 'Not available' : 'Не готов'}</p>
            </div>
          </div>
        </div>
        
        <Button 
          onClick={handleScrollToProjects}
          size="lg" 
          className="bg-neon-blue hover:bg-neon-blue/90 shine-effect rounded-full text-white text-base px-8 py-6 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] relative overflow-hidden group"
        >
          <span className="relative z-10">{t('heroButton')}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-[length:200%_100%] animate-background-shine"></span>
        </Button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-muted-foreground" size={28} />
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      
      {/* Floating particles effect */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute rounded-full bg-neon-blue/30 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
