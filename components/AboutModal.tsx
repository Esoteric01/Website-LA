import React, { useEffect } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TimelineIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-4 md:-translate-y-5 bg-primary text-background h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center ring-8 ring-surface">
        <div className="w-4 h-4 md:w-5 md:w-5">{children}</div>
    </div>
);

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


const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in-up"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-surface rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] p-6 md:p-8 relative transform transition-all duration-300 scale-95 animate-fade-in-up border border-border overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'radial-gradient(ellipse at top center, rgba(0,196,106,0.1), transparent 60%)'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary bg-surface/50 backdrop-blur-sm rounded-full p-2 hover:bg-border transition-colors z-20 cursor-hover-target"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-primary mb-6">My Story</h2>
            <p className="text-3xl md:text-4xl text-text-main font-medium leading-snug mb-12 max-w-4xl">
                Hey there! I’m Loiz Almerino — someone who’s always been fascinated by how technology can make work easier, faster, and a little more fun.
            </p>

            {/* Timeline */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/50" aria-hidden="true"></div>
              
              <div className="space-y-12">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-start">
                    <TimelineIcon><EducationIcon/></TimelineIcon>
                    <div className="w-1/2 pr-8 md:pr-12 text-right">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Education & Foundation</h3>
                        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                            My journey started with a strong foundation in tech — I graduated with a Bachelor’s Degree in Information Technology, where I learned the ins and outs of systems, networks, and how everything connects in the digital world.
                        </p>
                    </div>
                    <div className="w-1/2 pl-8 md:pl-12"></div>
                </div>
                
                {/* Timeline Item 2 */}
                <div className="relative flex items-start">
                    <TimelineIcon><CareerIcon/></TimelineIcon>
                    <div className="w-1/2 pr-8 md:pr-12"></div>
                    <div className="w-1/2 pl-8 md:pl-12 text-left">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Professional Career</h3>
                        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                            That curiosity turned into a career, where I worked with networking, storage, and backup systems, helping businesses build reliable and secure infrastructures.
                        </p>
                    </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-start">
                    <TimelineIcon><AutomationIcon/></TimelineIcon>
                    <div className="w-1/2 pr-8 md:pr-12 text-right">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">Discovering Automation</h3>
                        <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                            Along the way, I discovered something that really clicked for me: <span className="text-primary/90 font-medium">automation</span>. I love finding ways to connect tools together, remove repetitive tasks, and create smooth, <span className="text-primary/90 font-medium">AI-powered workflows</span> that just work. Whether it’s with <span className="text-primary/90 font-medium">Zapier, Make, n8n, ChatGPT, Gemini, or Copilot</span>, I enjoy building systems that save time and help people focus on what really matters.
                        </p>
                    </div>
                     <div className="w-1/2 pl-8 md:pl-12"></div>
                </div>

              </div>
            </div>

            {/* Blockquote */}
            <div className="w-full my-12 py-8">
                 <blockquote className="max-w-4xl mx-auto p-6 border-t border-b border-primary/30 text-center">
                    <p className="text-4xl italic text-primary leading-normal">
                       "I’m a big believer that technology should serve people — not overwhelm them."
                    </p>
                </blockquote>
            </div>

            {/* Final CTA */}
            <div className="max-w-4xl text-2xl md:text-3xl text-text-main leading-relaxed">
                <p>
                    Outside of work, I’m usually exploring new tech tools, experimenting with AI ideas, or helping small businesses improve their processes through automation.
                </p>
                <p className="mt-6 font-semibold">
                    If you’re curious about how automation can help your business run smoother or want to bring your ideas to life through smart workflows, let’s chat. I’d love to hear your story and see how I can help make things happen.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;