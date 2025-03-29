
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { cn } from '@/lib/utils';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { href: '#home', label: t('navHome') },
    { href: '#projects', label: t('navProjects') },
    { href: '#skills', label: t('navSkills') },
    { href: '#contact', label: t('navContact') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 backdrop-blur-xl bg-background/80 border-b border-white/10' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold relative z-50 group">
          <span className="font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-[length:200%_100%] animate-background-shine hover:animate-glow transition-all duration-300 tracking-wider">
            Portfolio
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <Separator orientation="vertical" className="h-5 bg-muted/30" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                <Globe size={18} />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card">
              <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'text-neon-blue' : ''}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ru')} className={language === 'ru' ? 'text-neon-blue' : ''}>
                Русский
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Globe size={18} />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card">
              <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'text-neon-blue' : ''}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ru')} className={language === 'ru' ? 'text-neon-blue' : ''}>
                Русский
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="rounded-full" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 z-40',
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-medium hover:text-neon-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
