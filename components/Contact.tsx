import React, { useRef, useState, useEffect } from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.1 }
    );
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      // Glow parallax
      if (glowRef.current && sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const scrollY = window.innerHeight - top;
        const speed = 0.1;
        if (scrollY > 0) {
            glowRef.current.style.transform = `translate(-50%, -50%) translateY(${scrollY * speed}px)`;
        }
      }

      // Columns parallax
      const screenHeight = window.innerHeight;
      if (leftColRef.current) {
          const { top, height } = leftColRef.current.getBoundingClientRect();
          if (top < screenHeight && top > -height) {
              const speed = -0.08;
              const translateY = (screenHeight / 2 - top) * speed;
              leftColRef.current.style.transform = `translateY(${translateY}px)`;
          }
      }
      if (rightColRef.current) {
          const { top, height } = rightColRef.current.getBoundingClientRect();
          if (top < screenHeight && top > -height) {
              const speed = 0.04; // Slower, heavier feel
              const translateY = (screenHeight / 2 - top) * speed;
              rightColRef.current.style.transform = `translateY(${translateY}px)`;
          }
      }
    };

    const onScroll = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[80vh] w-[120%] max-w-[1000px]"
        style={{
            backgroundImage: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0, 196, 106, 0.1), transparent 80%)',
        }}
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Column: Info & CTA */}
          <div ref={leftColRef} style={{ willChange: 'transform' }} className={`lg:pr-8 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-center lg:text-left text-5xl sm:text-6xl font-black font-display mb-4 text-text-main tracking-tighter">
              Ready to build your automated future?
            </h2>
            <p className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-xl text-primary mb-8">
              Let's connect. I'm here to help you streamline operations, boost efficiency, and unlock your business's full potential.
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-center lg:text-left text-3xl font-bold font-display text-text-main mb-4 leading-snug">Other ways to connect</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-lg text-primary">
                            <div className="bg-surface p-3 rounded-lg border border-primary/50"><Icons.IconMail /></div>
                            <span>loizalmerino@gmail.com</span>
                        </div>
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-lg text-primary">
                            <div className="bg-surface p-3 rounded-lg border border-primary/50"><Icons.IconPhone /></div>
                            <span>09219173684</span>
                        </div>
                    </div>
                </div>
                 <div>
                    <h3 className="text-center lg:text-left text-3xl font-bold font-display text-text-main mb-4 leading-snug">Find me on</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                         <a 
                            href="https://www.linkedin.com/in/la-almerino-2873aa155/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
                        >
                            <span>LinkedIn</span>
                        </a>
                        <a 
                            href="https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
                        >
                            <span>Upwork</span>
                        </a>
                        <a 
                            href="https://www.onlinejobs.ph/jobseekers/info/1993414" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
                        >
                            <span>OnlineJobs.ph</span>
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Google Form */}
          <div ref={rightColRef} className={`flex flex-col ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', willChange: 'transform' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSelivy-QxkMUARQsnKWFISuZ9T7CWRHbMrRQ0zJURJ4oeEHNg/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Project Inquiry Form"
              className="rounded-2xl min-h-[700px] lg:min-h-0 border-2 border-primary ring-2 ring-white"
              style={{ filter: 'invert(92%) hue-rotate(180deg) brightness(1.1) contrast(0.95)' }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;