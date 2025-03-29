
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Separator } from '@/components/ui/separator';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-secondary/10 relative">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold text-neon-blue animate-glow">
              Portfolio
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('footerText')}
            </p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navHome')}
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navProjects')}
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navSkills')}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('navContact')}
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="rounded-full p-3 bg-secondary hover:bg-secondary/70 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <Separator className="my-8 bg-muted/30" />

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Kinetic58"
             className="text-muted-foreground hover:text-neon-blue transition-colors">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
            >
              <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
          <a href="https://t.me/python_dev_strx"
             className="text-muted-foreground hover:text-neon-blue transition-colors">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-telegram"
            >
              <path d="M21 3L3 10.53l7 2.47 4 5 3-6.5 4-6z"></path>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
