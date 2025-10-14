import React, { useEffect } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
        className="bg-surface rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] p-8 md:p-16 relative transform transition-all duration-300 scale-95 animate-fade-in-up border border-border overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(0,196,106,0.1), transparent 70%)'
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
            <img 
                src="https://github.com/Esoteric01/Portfolio-Images/blob/main/Formal.jpg?raw=true"
                alt="Portrait of Loiz Almerino"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover ring-2 ring-primary/50 shadow-[0_0_40px_rgba(0,196,106,0.4)] mb-12"
                loading="lazy"
            />

            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl lg:text-6xl font-bold font-display text-primary mb-10">My Story</h2>

                <p className="text-3xl text-text-main font-medium leading-snug mb-10">
                    Hey there! I’m Loiz Almerino — someone who’s always been fascinated by how technology can make work easier, faster, and a little more fun.
                </p>
                <div className="space-y-8 text-2xl text-text-secondary leading-relaxed">
                  <p>
                      My journey started in the IT world, where I worked with networking, storage, and backup systems. Those years taught me a lot about how things run behind the scenes — and how a few smart tweaks can make a huge difference.
                  </p>
                  <p>
                      Over time, I discovered something I really enjoy: <span className="text-primary font-medium">automation</span>. I love finding ways to connect tools together, remove repetitive tasks, and create smooth, <span className="text-primary font-medium">AI-powered workflows</span> that just work. Whether it’s with <span className="text-primary font-medium">Zapier, Make, n8n, ChatGPT, Gemini, or Copilot</span>, I get excited about building systems that save time and help people focus on what really matters.
                  </p>
                  <p>
                      Outside of work, I’m usually learning new tools, brainstorming automation ideas, or exploring how AI can help small businesses grow.
                  </p>
                   <blockquote className="my-12 p-6 border-l-4 border-primary bg-background/50 rounded-r-lg text-left">
                        <p className="text-3xl italic text-primary leading-normal">
                           "I’m a big believer that technology should serve people — not overwhelm them."
                        </p>
                    </blockquote>
                  <p className="font-medium text-text-main">
                      If you’re curious about how automation can help your business run smoother or want to turn an idea into something real, let’s chat. I’d love to hear your story and see how I can help make things happen.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;