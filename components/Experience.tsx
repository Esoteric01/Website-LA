
import React, { useRef, useState, useEffect } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "AI Automation Specialist",
    company: "Freelance / Consultant",
    period: "2023 - Present",
    description: [
      "Designed and deployed 50+ custom AI workflows using n8n, Make, and Zapier for diverse business sectors.",
      "Integrated Generative AI models (Gemini, OpenAI) into CRM systems to automate content creation and lead qualification.",
      "Optimized client business processes, reducing manual task time by an average of 70%."
    ]
  },
  {
    title: "IT Infrastructure Specialist",
    company: "Tech Systems Solutions",
    period: "2020 - 2023",
    description: [
      "Managed complex network infrastructures and cloud migrations for SME clients.",
      "Implemented automated server monitoring and backup scripts using PowerShell and Python.",
      "Architected secure, scalable data storage solutions and maintained 99.9% uptime for critical systems."
    ]
  },
  {
    title: "Systems Administrator",
    company: "Digital Edge Inc.",
    period: "2018 - 2020",
    description: [
      "Assisted in the maintenance of large-scale database systems and internal tool development.",
      "Automated user provisioning and IT ticketing workflows, improving internal efficiency by 40%.",
      "Provided high-level technical support and network security auditing."
    ]
  }
];

const Experience: React.FC = () => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className={`text-center mb-16 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-5xl sm:text-6xl font-black font-display text-text-main mb-4 tracking-tighter">Work Experience</h2>
        <p className="max-w-3xl mx-auto text-2xl text-primary">A journey of technical expertise and automation innovation.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="relative border-l-2 border-border/50 ml-4 md:ml-0 md:left-1/2 md:-translate-x-[1px]">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 relative ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 -left-[9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface z-10 shadow-[0_0_10px_rgba(0,196,106,0.5)]"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right ml-8 md:ml-0' : 'md:pl-12 md:ml-auto ml-8'}`}>
                <div className="bg-surface border border-border p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,196,106,0.1)] group">
                  <span className="text-primary font-bold text-sm mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-text-main group-hover:text-primary transition-colors">{exp.title}</h3>
                  <h4 className="text-lg text-text-secondary font-medium mb-4">{exp.company}</h4>
                  <ul className={`space-y-2 text-text-secondary ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm md:text-base leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
