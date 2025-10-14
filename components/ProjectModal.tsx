import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 animate-fade-in-up"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-surface rounded-xl shadow-2xl w-full max-w-4xl transform transition-all duration-300 scale-95 animate-fade-in-up border border-border relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary bg-surface/50 backdrop-blur-sm rounded-full p-2 hover:bg-surface transition-colors z-10 cursor-hover-target"
          aria-label="Close project details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8 md:p-10">
          <h3 className="text-4xl font-bold font-display text-text-main mb-4 pr-8">{project.title}</h3>
          <p className="text-xl text-primary leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-border">
             <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover aspect-video" />
          </div>

          <div className="border-t border-border pt-6">
              <h4 className="font-semibold text-text-main mb-4 text-lg">Technology Used:</h4>
              <div className="flex flex-wrap gap-3">
                  {project.technologyUsed.map((tech, index) => (
                  <span key={index} className="border border-primary text-primary text-base font-medium px-4 py-2 rounded-full">
                      {tech}
                  </span>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;