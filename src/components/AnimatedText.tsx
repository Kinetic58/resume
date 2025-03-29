
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text,
  className = "",
  once = true 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (once && hasAnimated.current) return;

    const animate = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

      if (isInView) {
        hasAnimated.current = true;
        element.style.opacity = '1';
        
        // Split text into individual spans
        const splittedText = text.split('');
        element.innerHTML = '';
        
        splittedText.forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.animationDelay = `${index * 0.03}s`;
          span.className = 'inline-block opacity-0 animate-[fade-in_0.3s_ease-in-out_forwards]';
          element.appendChild(span);
        });
      }
    };

    animate();
    window.addEventListener('scroll', animate);

    return () => {
      window.removeEventListener('scroll', animate);
    };
  }, [text, once]);

  return (
    <div
      ref={elementRef}
      className={cn('opacity-0 transition-opacity duration-300 text-balance', className)}
      aria-label={text}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
