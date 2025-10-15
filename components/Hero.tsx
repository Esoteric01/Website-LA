import React, { useRef, useEffect, useState } from 'react';
import { toolsData } from '../data/tools';

interface HeroProps {
  onKnowMoreClick: () => void;
}

const roles = [
  'AI Workflow Automation Specialist',
  'Process Optimization Expert',
  'Custom Integration Developer',
];

const Hero: React.FC<HeroProps> = ({ onKnowMoreClick }) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const zapierTool = toolsData.find(tool => tool.name === 'Zapier');
  const makeTool = toolsData.find(tool => tool.name === 'Make (Integromat)');
  const n8nTool = toolsData.find(tool => tool.name === 'n8n');
  
  const coreTools = [
    { tool: zapierTool, name: 'Zapier' },
    { tool: makeTool, name: 'Make.com' },
    { tool: n8nTool, name: 'n8n' },
  ].filter(item => item.tool);


  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };
    
    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

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

      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-16 w-full z-10">
        {/* Left Column: Text Content */}
        <div ref={contentRef} className="md:w-3/5 text-center md:text-left" style={{ willChange: 'transform' }}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display text-text-main mb-4">Hey, I'm Loiz Almerino</h1>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-8 h-20 md:h-12">
            {currentText}
            <span className="text-primary animate-blink">|</span>
          </h2>
          
          <div className="mb-8 max-w-3xl mx-auto md:mx-0 space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-text-main">
              I Build Smart Automations That Save Time and Boost Productivity
            </p>
            <p className="text-lg md:text-xl leading-loose text-text-secondary">
              I design simple, scalable solutions that let businesses work smarter, reduce errors, and focus on what truly matters.
            </p>
          </div>
          
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

        {/* Right Column: Image & Logos */}
        <div ref={imageRef} className="md:w-2/5 flex flex-col items-center justify-center flex-shrink-0" style={{ willChange: 'transform' }}>
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] mb-6">
            <div 
              className="absolute inset-0 rounded-full animate-rotate"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, transparent 75%, #00C46A 100%)'
              }}
              aria-hidden="true"
            />
            <img 
              src="https://github.com/Esoteric01/Portfolio-Images/blob/main/Formal.jpg?raw=true"
              alt="Portrait of Loiz Almerino"
              className="relative rounded-full w-full h-full object-cover ring-2 ring-primary/50"
            />
          </div>

          <div className="group cursor-hover-target rounded-lg p-2 -m-2">
            <div 
              className="flex items-center justify-center gap-x-2 text-text-secondary motion-safe:animate-fade-in grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" 
              style={{ animationDelay: '300ms' }}
            >
              {coreTools.map(({ tool, name }, index) => (
                <React.Fragment key={name}>
                    <div className="flex items-center gap-1.5">
                        <div className={`${name === 'n8n' ? 'h-4' : 'h-5'} w-auto text-white`}>{tool!.icon}</div>
                        <p className="text-base font-semibold text-text-main">{name}</p>
                    </div>
                    {index < coreTools.length - 1 && (
                        <span className="text-base text-border select-none" aria-hidden="true">|</span>
                    )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;