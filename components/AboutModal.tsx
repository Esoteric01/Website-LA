import React, { useEffect, useState, useCallback } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icons for story chapters
const EducationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const CareerIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const AutomationIcon = () => (
     <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M15 7h5v5h-5V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 12h5v5H4v-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 12V9a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const storyContent = [
    {
        icon: <EducationIcon />,
        title: "Education & Foundation",
        text: "My journey started with a strong foundation in tech — I graduated with a Bachelor’s Degree in Information Technology, where I learned the ins and outs of systems, networks, and how everything connects in the digital world."
    },
    {
        icon: <CareerIcon />,
        title: "Professional Career",
        text: "That curiosity turned into a career, where I worked with networking, storage, and backup systems, helping businesses build reliable and secure infrastructures."
    },
    {
        icon: <AutomationIcon />,
        title: "Discovering Automation",
        text: (
            <>
                Along the way, I discovered something that really clicked for me: <span className="text-primary/90 font-medium">automation</span>. I love finding ways to connect tools together, remove repetitive tasks, and create smooth, <span className="text-primary/90 font-medium">AI-powered workflows</span> that just work. I enjoy building systems that save time and help people focus on what really matters.
            </>
        )
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
      className={`fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-surface rounded-xl shadow-2xl w-full max-w-7xl transform border border-border relative overflow-y-auto max-h-[90vh] ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-secondary bg-surface/50 backdrop-blur-sm rounded-full p-2 hover:bg-surface transition-colors z-20 cursor-hover-target"
          aria-label="Close story"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black font-display text-text-main mb-3 tracking-tighter">My Story</h2>
              <p className="max-w-2xl mx-auto text-xl text-primary">From IT infrastructure to AI-powered automation.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
                {/* Left Column (Sticky-like in modal) */}
                <div className="lg:sticky lg:top-12 text-center">
                    <img 
                        src="https://github.com/Esoteric01/Portfolio-Images/blob/main/Formal.jpg?raw=true"
                        alt="Portrait of Loiz Almerino"
                        className="rounded-2xl w-full max-w-md mx-auto object-cover ring-2 ring-primary/50 shadow-lg animate-fade-in-up"
                    />
                    <blockquote className="mt-8 max-w-md mx-auto p-4 border-l-4 border-primary/50 text-left bg-border/30 rounded-r-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <p className="text-xl italic text-primary leading-normal">
                           "I’m a big believer that technology should serve people — not overwhelm them."
                        </p>
                    </blockquote>
                </div>
                
                {/* Right Column (Story) */}
                <div className="space-y-12">
                    {storyContent.map((item, index) => (
                        <div 
                            key={index} 
                            className="motion-safe:animate-fade-in-up"
                            style={{ animationDelay: `${(index * 150) + 300}ms` }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-border/50 border border-border rounded-lg p-2 text-primary w-10 h-10 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-bold text-text-main leading-snug">{item.title}</h3>
                            </div>
                            <p className="text-lg text-text-secondary leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                    {/* Final CTA */}
                    <div 
                        className="pt-4 border-t border-border motion-safe:animate-fade-in-up"
                        style={{ animationDelay: `${(storyContent.length * 150) + 300}ms` }}
                    >
                         <p className="text-lg text-text-secondary leading-relaxed">
                            If you’re curious about how automation can help your business run smoother or want to bring your ideas to life through smart workflows, let’s chat. I’d love to hear your story and see how I can help make things happen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;