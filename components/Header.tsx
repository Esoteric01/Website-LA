import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'services', title: 'Services' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold font-display text-text-main cursor-pointer cursor-hover-target" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
          Loiz Almerino
        </div>
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-xl text-text-secondary hover:text-text-main transition-colors duration-300 font-medium cursor-hover-target">
              {link.title}
            </button>
          ))}
        </nav>
        <div className="hidden md:block">
           <button onClick={() => scrollToSection('contact')} className="bg-surface hover:bg-border border border-border text-text-main font-bold py-2 px-5 rounded-lg transition-all duration-300 transform active:scale-95 text-xl cursor-hover-target">
              Let's Talk
            </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-main focus:outline-none cursor-hover-target">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-xl text-text-secondary hover:text-text-main transition-colors duration-300 font-medium cursor-hover-target">
                {link.title}
              </button>
            ))}
             <button onClick={() => scrollToSection('contact')} className="bg-surface hover:bg-border border border-border text-text-main font-bold py-2 px-5 rounded-lg transition-all duration-300 transform active:scale-95 text-xl cursor-hover-target">
              Let's Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;