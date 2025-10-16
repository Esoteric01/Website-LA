import React, { useEffect, useState, useCallback } from 'react';
import { Tool } from '../types';

interface AllSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tools: Tool[];
}

const AllSkillsModal: React.FC<AllSkillsModalProps> = ({ isOpen, onClose, tools }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setIsClosing(false);
      setActiveCategory('All');
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setShow(false);
      onClose();
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

  const categories = ['All', ...new Set(tools.map(tool => tool.category))];

  const filteredTools = tools.filter(tool =>
    activeCategory === 'All' || tool.category === activeCategory
  );

  return (
    <div
      className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-surface rounded-xl shadow-2xl w-full max-w-5xl h-[90vh] relative border border-border flex flex-col ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8 pb-4">
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-text-main text-center leading-snug">My Automation Stack</h3>
            <p className="text-lg sm:text-xl text-primary mt-2 text-center max-w-2xl mx-auto">An interactive overview of the tools I use to bring automation projects to life.</p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mb-6 p-4 sticky top-0 bg-surface/80 backdrop-blur-sm z-10 border-b border-border">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base rounded-lg font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface cursor-hover-target ${
                activeCategory === category
                  ? 'bg-primary text-background'
                  : 'bg-border/40 text-text-secondary hover:bg-border hover:text-text-main'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="overflow-y-auto px-6 md:px-8 pb-8 flex-1">
            <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
                <div
                key={tool.name}
                className="group bg-background/50 rounded-xl p-4 md:p-6 border border-border transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_20px_rgba(0,196,106,0.15)] motion-safe:hover:-translate-y-1.5 cursor-hover-target animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 50}ms` }}
                >
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 text-text-main">{tool.icon}</div>
                        <p className="font-bold text-text-main md:text-lg">{tool.name}</p>
                    </div>
                    <p className="text-text-secondary text-base flex-grow">{tool.description}</p>
                </div>
            ))}
            </div>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-secondary bg-surface/50 backdrop-blur-sm rounded-full p-2 hover:bg-border transition-colors z-20 cursor-hover-target"
          aria-label="Close skills details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AllSkillsModal;