

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FullscreenEnterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m0 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5h-4m0 0v-4m0 4l-5-5" />
  </svg>
);

const FullscreenExitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H4v4m4-4l-5 5m13-5h4v4m-4-4l5 5M8 20H4v-4m4 4l-5-5m13 5h4v-4m-4 4l5-5" />
  </svg>
);


const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [show, setShow] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      setShow(true);
      setIsClosing(false);
      setCurrentImageIndex(0);
    }
  }, [project]);

  const handleClose = useCallback(() => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    setIsClosing(true);
    setTimeout(() => {
      setShow(false);
      onClose();
    }, 300); // Corresponds to animation duration
  }, [onClose]);

  useEffect(() => {
    const handleFullscreenChange = () => {
        const isFs = !!document.fullscreenElement;
        setIsFullscreen(isFs);
        // FIX: Cast screen.orientation to any to access the experimental 'unlock' method.
        if (!isFs && screen.orientation && typeof (screen.orientation as any).unlock === 'function') {
            (screen.orientation as any).unlock();
        }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (!document.fullscreenElement) {
             handleClose();
        }
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
  if (!project) return null; // Keep project data during closing animation
  
  const hasSlideshow = project.images && project.images.length > 0;
  const imagesToShow = hasSlideshow ? project.images! : [{ url: project.imageUrl, label: project.title }];

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? imagesToShow.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastImage = currentImageIndex === imagesToShow.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const toggleFullscreen = async () => {
    const elem = slideshowRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
        try {
            await elem.requestFullscreen();
            // FIX: Cast screen.orientation to any to access the experimental 'lock' method.
            if (screen.orientation && typeof (screen.orientation as any).lock === 'function') {
                await (screen.orientation as any).lock('landscape').catch(err => console.log("Orientation lock failed:", err));
            }
        } catch (err) {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        }
    } else {
        if (document.exitFullscreen) {
            await document.exitFullscreen();
        }
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-surface rounded-xl shadow-2xl w-full max-w-[85vw] transform border border-border relative overflow-y-auto max-h-[90vh] ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-secondary bg-surface/50 backdrop-blur-sm rounded-full p-2 hover:bg-surface transition-colors z-20 cursor-hover-target"
          aria-label="Close project details"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="p-8 md:p-10">
          <h3 className="text-4xl font-bold font-display text-text-main mb-4 pr-8 leading-snug">{project.title}</h3>
          
          {(() => {
            // Check if the description contains structured headings.
            const containsHeadings = /^(Overview:|Process:|Results:|🛠️ Process:|✅ Results:)/m.test(project.description);
            
            if (containsHeadings) {
              return (
                <div className="text-lg leading-relaxed mb-8 space-y-6">
                  {project.description.split('\n\n').map((paragraph, index) => {
                    const lines = paragraph.split('\n');
                    const firstLine = lines[0];
                    
                    if (firstLine.includes(':')) {
                      const [heading, ...contentStart] = firstLine.split(':');
                      const restOfContent = lines.slice(1);
                      const fullContent = [contentStart.join(':').trim(), ...restOfContent].join('\n');
                      const cleanHeading = heading.replace('🛠️', '').replace('✅', '').trim();
                      
                      return (
                        <div key={index}>
                          <p className="font-bold text-primary text-lg">{cleanHeading}:</p>
                          <p className="text-text-secondary">{fullContent}</p>
                        </div>
                      );
                    }

                    return <p key={index} className="text-text-secondary">{paragraph}</p>;
                  })}
                </div>
              );
            }

            return (
              <p className="text-lg text-text-secondary leading-relaxed mb-8 whitespace-pre-line">
                {project.description}
              </p>
            );
          })()}

          <div
            ref={slideshowRef}
            className={`my-8 rounded-lg overflow-hidden shadow-lg border border-border relative bg-background ${isFullscreen ? 'flex items-center justify-center' : ''}`}
          >
            <img src={imagesToShow[currentImageIndex].url} alt={imagesToShow[currentImageIndex].label} className={`w-full h-auto object-contain ${isFullscreen ? 'max-h-screen' : 'max-h-[60vh]'}`} loading="lazy" />
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-center py-1 px-4 backdrop-blur-sm rounded-full z-10">
                <p className="font-semibold text-sm">{imagesToShow[currentImageIndex].label}</p>
            </div>
            
            {hasSlideshow && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs py-1 px-3 backdrop-blur-sm rounded-full z-10">
                    {currentImageIndex + 1} / {imagesToShow.length}
                </div>
            )}

            {hasSlideshow && imagesToShow.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-surface/50 text-text-main rounded-full p-2 hover:bg-surface transition-colors cursor-hover-target backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-surface/50 text-text-main rounded-full p-2 hover:bg-surface transition-colors cursor-hover-target backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </>
            )}

            <button
                onClick={toggleFullscreen}
                className="absolute top-2 right-2 md:hidden z-10 bg-surface/50 text-text-main rounded-full p-2 hover:bg-surface transition-colors cursor-hover-target backdrop-blur-sm"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
                {isFullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
            </button>
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