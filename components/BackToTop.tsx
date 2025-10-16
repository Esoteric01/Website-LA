import React, { useState, useEffect } from 'react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const footer = document.getElementById('page-footer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) {
      observer.observe(footer);
    }

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed right-8 z-50 transition-all duration-300 ${isFooterVisible ? 'bottom-28 md:bottom-24' : 'bottom-8'}`}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group bg-primary text-background rounded-full p-3.5 shadow-lg hover:bg-primary/90 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-hover-target"
          aria-label="Back to top"
        >
          <div className="h-6 w-6 relative overflow-hidden">
            {/* Arrow 1 */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:-translate-y-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
            {/* Arrow 2 (initially hidden below) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute inset-0 transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTop;