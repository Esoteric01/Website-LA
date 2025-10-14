import React, { useEffect } from 'react';
import { Tool } from '../types';

interface AllSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tools: Tool[];
}

const AllSkillsModal: React.FC<AllSkillsModalProps> = ({ isOpen, onClose, tools }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [...new Set(tools.map(tool => tool.category))];

  return (
    <div
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in-up"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-surface rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] p-8 relative transform transition-all duration-300 scale-95 animate-fade-in-up border border-border overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-main transition-colors z-10 cursor-hover-target"
          aria-label="Close skills details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mt-2 space-y-10">
          {categories.map(category => (
            <div key={category}>
              <h4 className="text-2xl font-bold text-primary mb-6 border-b border-border pb-3 text-center">{category}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {tools
                  .filter(tool => tool.category === category)
                  .map(tool => (
                    <div key={tool.name} className="flex items-start gap-4 p-4 rounded-lg hover:bg-border/50 transition-colors duration-200">
                      <div className="flex-shrink-0 w-8 h-8 text-text-main mt-1">{tool.icon}</div>
                      <div>
                        <p className="font-bold text-text-main text-lg">{tool.name}</p>
                        <p className="text-text-secondary text-base">{tool.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkillsModal;