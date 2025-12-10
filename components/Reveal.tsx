import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in' | 'zoom-in' | 'slide-in-left' | 'slide-in-right';
  delay?: string; // Tailwind delay class e.g. "delay-200"
  className?: string;
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = '', 
  className = '',
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'} ${delay}`}
    >
      {children}
    </div>
  );
};

export default Reveal;