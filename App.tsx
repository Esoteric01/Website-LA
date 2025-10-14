import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AboutModal from './components/AboutModal';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.getElementById('root')?.classList.add('loaded');
      document.querySelector('.preloader')?.classList.add('hidden');
    }, 1000); // Wait for animation (0.8s) + buffer

    return () => clearTimeout(timer);
  }, []);


  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  
  const handleOpenAboutModal = () => setIsAboutModalOpen(true);
  const handleCloseAboutModal = () => setIsAboutModalOpen(false);


  return (
    <div className={`text-text-main font-sans relative isolate transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
      <CustomCursor />
      <Header />
      <main className="max-w-8xl mx-auto px-4 md:px-8">
        <Hero onKnowMoreClick={handleOpenAboutModal} />
        <Services />
        <Skills />
        <Projects onProjectClick={handleProjectClick} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      <AboutModal isOpen={isAboutModalOpen} onClose={handleCloseAboutModal} />
      <BackToTop />
    </div>
  );
};

export default App;