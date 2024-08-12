'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

interface ParallaxImageProps {
  src: StaticImageData;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const sectionElement = document.getElementById('about');
    if (sectionElement) {
      const { top, height } = sectionElement.getBoundingClientRect();
      setSectionTop(top + window.scrollY);
      setSectionHeight(height);
    }
  }, [windowHeight]);

  const startParallax = sectionTop - windowHeight;
  const endParallax = sectionTop + sectionHeight;

  const parallaxOffset =
    scrollPosition > startParallax && scrollPosition < endParallax
      ? (scrollPosition - startParallax) * 0.15
      : 0;

  return (
    <div className='relative'>
      <div
        className='absolute top-[-8.3%] left-[-33%] w-full h-full bg-brand-primary z-0 rounded-lg md:rounded-xl'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <Image
        src={src}
        alt='Camila'
        className='relative z-10 bg-fixed rounded-lg md:rounded-xl shadow-shape'
        width={380}
        height={380}
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
};
