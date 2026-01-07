
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
import Preloader from './components/Preloader';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.getElementById('root')?.classList.add('loaded');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  
  const handleKnowMoreClick = () => {
    setAboutModalOpen(true);
  };

  const handleCloseAboutModal = () => {
    setAboutModalOpen(false);
  };

  return (
    <>
      <Preloader isLoading={isLoading} />
      <div className="text-text-main font-sans relative isolate">
        <CustomCursor />
        <Header />
        <main className="max-w-8xl mx-auto px-4 md:px-8">
          <Hero onKnowMoreClick={handleKnowMoreClick} />
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
    </>
  );
};

export default App;
