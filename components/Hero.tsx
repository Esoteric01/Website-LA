import React, { useRef, useEffect } from 'react';

interface HeroProps {
  onKnowMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onKnowMoreClick }) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (glowRef.current) {
        glowRef.current.style.transform = `translateY(${scrollY * 0.3}px) translateX(-50%)`;
      }

      const screenHeight = window.innerHeight;

      // Parallax for text content
      if (contentRef.current) {
        const { top, height } = contentRef.current.getBoundingClientRect();
        if (top < screenHeight && top > -height) {
          const speed = -0.1;
          const translateY = (screenHeight / 2 - top) * speed;
          contentRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }

      // Parallax for image
      if (imageRef.current) {
        const { top, height } = imageRef.current.getBoundingClientRect();
        if (top < screenHeight && top > -height) {
          const speed = 0.05;
          const translateY = (screenHeight / 2 - top) * speed;
          imageRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    const onScroll = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80; // Offset for the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center motion-safe:animate-fade-in-up relative overflow-hidden">
      <div 
        ref={glowRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[80vh] w-[150%] max-w-[1200px]"
        style={{
            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 196, 106, 0.1), transparent 70%)',
        }}
        aria-hidden="true"
      >
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 w-full z-10">
        {/* Left Column: Text Content */}
        <div ref={contentRef} className="md:w-3/5 text-center md:text-left" style={{ willChange: 'transform' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display text-text-main mb-4">Hey, I'm Loiz Almerino</h1>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">AI Workflow Automation Specialist</h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-loose text-text-main mb-8 max-w-3xl mx-auto md:mx-0">
            I help businesses streamline operations and boost efficiency through smart automation. With a background in network engineering and systems administration, I deliver solutions that are not just efficient, but also secure, scalable, and enterprise-ready.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={handleScrollToContact}
              className="inline-block bg-primary hover:bg-primary/90 text-background font-bold py-4 px-10 rounded-lg transition-all duration-300 text-xl shadow-lg transform active:scale-95 hover:-translate-y-1 cursor-hover-target"
            >
              Let’s Automate Your Workflow
            </button>
            <button
              onClick={onKnowMoreClick}
              className="inline-block bg-text-main hover:bg-primary hover:text-background border border-primary text-background font-bold py-4 px-10 rounded-lg transition-all duration-300 text-xl transform active:scale-95 hover:-translate-y-1 cursor-hover-target"
            >
              Know Me More
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div ref={imageRef} className="md:w-2/5 flex justify-center flex-shrink-0" style={{ willChange: 'transform' }}>
          <img 
            src="https://github.com/Esoteric01/Portfolio-Images/blob/main/Formal.jpg?raw=true"
            alt="Portrait of Loiz Almerino"
            className="rounded-full w-80 h-80 md:w-[28rem] md:h-[28rem] object-cover ring-2 ring-primary transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;