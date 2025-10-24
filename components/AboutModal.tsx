import React, { useEffect, useState, useCallback } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icons for story chapters
const EducationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const CareerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const AutomationIcon = () => (
     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M15 7h5v5h-5V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 12h5v5H4v-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 12V9a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

// New Icons for Philosophy
const SimplicityIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ScalabilityIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M21 3l-6 6m0 0V3m0 6h6M3 21l6-6m0 0v6m0-6H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const PartnershipIcon = () => (
     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M16 17l5-5-1.5-1.5-5 5-1.5 1.5z" fill="currentColor" opacity="0.5"/>
        <path d="M12 21l-5-5 1.5-1.5 5 5-1.5 1.5z" fill="currentColor" opacity="0.5"/>
        <path d="M10 14l-6-6 6-6 6 6-6 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const storyContent = [
    {
        icon: <EducationIcon />,
        title: "My Foundation in Tech",
        text: "I started my journey with a Bachelor's Degree in Information Technology. This is where I built a solid understanding of systems, networks, and the digital architecture that powers our world."
    },
    {
        icon: <CareerIcon />,
        title: "Hands-On with Infrastructure",
        text: "My professional career took me deep into networking, storage, and backup systems. I had the opportunity to help businesses design and maintain reliable, secure IT infrastructures from the ground up."
    },
    {
        icon: <AutomationIcon />,
        title: "The 'Aha!' Moment: Automation",
        text: (
            <>
                During my time in IT, I found my true passion: <span className="text-primary/90 font-medium">automation</span>. I became obsessed with connecting different tools, eliminating repetitive manual tasks, and building intelligent, <span className="text-primary/90 font-medium">AI-powered workflows</span> that operate seamlessly.
            </>
        )
    }
];

const philosophyContent = [
    {
        icon: <SimplicityIcon />,
        title: "Simplicity First",
        text: "The best solutions are the ones that are easy to understand and manage. I focus on clean, straightforward automations."
    },
    {
        icon: <ScalabilityIcon />,
        title: "Built to Grow",
        text: "Your business is evolving, and your automations should too. I design systems that can scale with your success."
    },
    {
        icon: <PartnershipIcon />,
        title: "Collaborative Partnership",
        text: "I work with you, not just for you. Understanding your unique challenges is key to building something truly effective."
    }
];


const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);
  
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setShow(false);
      onClose();
      document.body.style.overflow = 'unset';
    }, 300); // Corresponds to animation duration
  }, [onClose]);

  const handleCTAClick = () => {
    handleClose();
    setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
             const headerOffset = 80;
             const elementPosition = contactSection.getBoundingClientRect().top;
             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
             window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
             });
        }
    }, 300); // Wait for modal to close
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    if (show) {
        window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [show, handleClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-surface rounded-xl shadow-2xl w-full max-w-7xl transform border border-border relative overflow-y-auto max-h-[90vh] ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'} bg-corner-glow`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-secondary bg-surface/50 backdrop-blur-sm rounded-full p-2 hover:bg-border transition-colors z-30 cursor-hover-target"
          aria-label="Close story"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8 md:p-12">
            <div className="text-center mb-12 motion-safe:animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-black font-display text-text-main mb-3 tracking-tighter">More About Me</h2>
              <p className="max-w-3xl mx-auto text-xl text-primary">I believe technology should serve people, not overwhelm them.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-12">
                {/* Left Column (Sticky-like in modal) */}
                <div className="lg:col-span-2 lg:sticky lg:top-12 self-start">
                    <div className="motion-safe:animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <img 
                            src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Hero%20Section%20Images/Know%20Me%20More/Image%201.jpg?raw=true"
                            alt="Portrait of Loiz Almerino"
                            className="rounded-2xl w-full max-w-sm mx-auto object-cover ring-2 ring-primary/50 shadow-lg"
                        />
                    </div>
                    <div className="mt-8 space-y-6">
                        <h3 className="text-2xl font-bold text-center text-text-main motion-safe:animate-fade-in-up" style={{ animationDelay: '200ms' }}>My Core Philosophy</h3>
                        {philosophyContent.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 motion-safe:animate-fade-in-up" style={{ animationDelay: `${300 + index * 100}ms` }}>
                                <div className="flex-shrink-0 bg-border/50 border border-border text-primary rounded-lg p-2.5 mt-1">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main text-lg">{item.title}</h4>
                                    <p className="text-text-secondary leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Right Column (Story) */}
                <div className="lg:col-span-3">
                    <h3 className="text-3xl font-bold text-text-main mb-8 motion-safe:animate-fade-in-up" style={{ animationDelay: '300ms' }}>My Journey</h3>
                    <div className="relative border-l-2 border-border/50 pl-8 space-y-12">
                         {/* Decorative line circles */}
                        {storyContent.map((_, index) => (
                            <div key={`dot-${index}`} className="absolute -left-[9px] w-4 h-4 bg-primary rounded-full border-4 border-surface" style={{ top: `calc(${(index / storyContent.length) * 100}% + ${index * 0}rem)`}}></div>
                        ))}

                        {storyContent.map((item, index) => (
                            <div 
                                key={index} 
                                className="motion-safe:animate-fade-in-up"
                                style={{ animationDelay: `${400 + index * 150}ms` }}
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="bg-border/50 border border-border rounded-lg p-2 text-primary w-10 h-10 flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold text-text-main leading-snug">{item.title}</h4>
                                </div>
                                <p className="text-lg text-text-secondary leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                        
                        <div 
                            className="pt-8 motion-safe:animate-fade-in-up"
                            style={{ animationDelay: '900ms' }}
                        >
                            <p className="text-lg text-text-secondary leading-relaxed mb-6">
                                My passion is turning complex problems into simple, elegant automations. If you're ready to streamline your business and unlock new efficiencies, I'd love to hear your story.
                            </p>
                            <button
                                onClick={handleCTAClick}
                                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-background font-bold py-3 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg transform active:scale-95 hover:-translate-y-1 cursor-hover-target"
                            >
                                Let's Build Something
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;