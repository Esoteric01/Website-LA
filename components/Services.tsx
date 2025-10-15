import React, { useRef, useState, useEffect } from 'react';
import type { Service } from '../types';
import { Icons } from '../constants';

const servicesData: Service[] = [
  {
    icon: <Icons.IconServiceWorkflow />,
    title: "Workflow Automation Setup",
    description: "I build robust automations with Zapier, Make, and n8n to connect your apps and eliminate repetitive tasks.",
  },
  {
    icon: <Icons.IconServiceAI />,
    title: "AI Chatbot Integration",
    description: "I integrate AI chatbots like ChatGPT and Gemini to automate customer support and provide intelligent conversational experiences.",
  },
  {
    icon: <Icons.IconServiceCRMAndMarketing />,
    title: "CRM Optimization",
    description: "I streamline CRM workflows in HubSpot, Pipedrive, and GoHighLevel to automate lead nurturing and sales pipeline management.",
  },
  {
    icon: <Icons.IconServiceProductivity />,
    title: "Google Workspace & Productivity Automation",
    description: "I create custom automations for Gmail, Sheets, and Docs to manage data, automate reporting, and boost team productivity.",
  },
  {
    icon: <Icons.IconServiceAPI />,
    title: "API & Webhook Integrations",
    description: "I build custom API and webhook integrations to ensure seamless data flow across your entire tech stack.",
  },
];

const Services: React.FC = () => {
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

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className={`text-center mb-12 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-5xl sm:text-6xl font-black font-display text-center mb-4 text-text-main">What I Offer</h2>
        <p className="max-w-3xl mx-auto text-2xl text-primary text-center">
          I specialize in connecting your apps and automating workflows, so you can focus on what matters most.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 items-stretch">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-sm"
          >
            <div 
              className={`relative bg-surface rounded-2xl p-8 border border-border transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(0,196,106,0.2)] motion-safe:hover:-translate-y-2 flex flex-col items-center text-center w-full h-full cursor-hover-target overflow-hidden ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/50 text-primary">
                <div className="h-10 w-10">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold font-display text-text-main mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed text-lg flex-grow">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;