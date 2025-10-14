import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import CustomCursor from './components/CustomCursor';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-text-main font-sans relative isolate">
      <CustomCursor />
      <Header />
      <main className="max-w-8xl mx-auto px-4 md:px-8">
        <Hero />
        <Services />
        <Skills />
        <Projects onProjectClick={handleProjectClick} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default App;