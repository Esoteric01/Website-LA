import React, { useState, useRef, useEffect } from 'react';
import { toolsData } from '../data/tools';
import AllSkillsModal from './AllSkillsModal';

const Skills: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.1 }
    );
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }
    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
    };
  }, []);
  
  const midIndex = Math.ceil(toolsData.length / 2);
  const firstRowTools = toolsData.slice(0, midIndex);
  const secondRowTools = toolsData.slice(midIndex);

  const duplicatedFirstRow = [...firstRowTools, ...firstRowTools];
  const duplicatedSecondRow = [...secondRowTools, ...secondRowTools];

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-36 relative overflow-hidden">
      <div className={`text-center mb-16 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-5xl sm:text-6xl font-black font-display text-text-main mb-4">
          Automation Stack
        </h2>
        <p className="max-w-3xl mx-auto text-2xl text-primary">
          A complete overview of the tools and technologies I use.
        </p>
      </div>

      <div className="space-y-8">
        {/* First Row */}
        <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max motion-safe:animate-slide">
            {duplicatedFirstRow.map((tool, index) => (
              <div
                key={`${tool.name}-${index}-first`}
                className="relative aspect-square w-32 h-32 md:w-40 md:h-40 mx-4 flex flex-col items-center justify-center p-4 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 text-white transition-transform duration-300">
                  {tool.icon}
                </div>
                <p className="mt-2 text-xs md:text-sm text-text-main text-center font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
          <div className="flex w-max motion-safe:animate-slide-reverse">
            {duplicatedSecondRow.map((tool, index) => (
              <div
                key={`${tool.name}-${index}-second`}
                className="relative aspect-square w-32 h-32 md:w-40 md:h-40 mx-4 flex flex-col items-center justify-center p-4 transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 text-white transition-transform duration-300">
                  {tool.icon}
                </div>
                <p className="mt-2 text-xs md:text-sm text-text-main text-center font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={`text-center mt-16 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-8 rounded-lg transition-all duration-300 transform active:scale-95 text-lg cursor-hover-target shadow-lg motion-safe:hover:-translate-y-1"
          >
              Explore All
          </button>
      </div>

      <AllSkillsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tools={toolsData}
      />
    </section>
  );
};

export default Skills;