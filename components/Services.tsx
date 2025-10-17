import React, { useRef, useState, useEffect } from 'react';
import type { Service } from '../types';
import { Icons } from '../constants';

const servicesData: Service[] = [
  {
    icon: <Icons.IconServiceWorkflow />,
    title: "Workflow Automation Setup",
    description: "I build robust automations with Zapier, Make, and n8n to connect your apps, eliminate repetitive tasks, and create seamless, efficient processes.",
    features: [
      "Cross-platform integration",
      "Custom logic and data mapping",
      "Error handling and monitoring",
      "Scalable workflow design"
    ]
  },
  {
    icon: <Icons.IconServiceAI />,
    title: "AI Chatbot Integration",
    description: "I integrate AI chatbots like ChatGPT and Gemini to automate customer support, qualify leads, and provide intelligent conversational experiences.",
    features: [
        "Natural Language Processing",
        "24/7 automated support",
        "Lead capture and qualification",
        "Integration with knowledge bases"
    ]
  },
  {
    icon: <Icons.IconServiceCRMAndMarketing />,
    title: "CRM Optimization",
    description: "I streamline CRM workflows in HubSpot, Pipedrive, and GoHighLevel to automate lead nurturing, manage sales pipelines, and ensure no opportunity is missed.",
    features: [
      "Lead scoring and routing",
      "Automated follow-ups and tasks",
      "Sales pipeline management",
      "Data synchronization"
    ]
  },
  {
    icon: <Icons.IconServiceProductivity />,
    title: "Google Workspace & Productivity Automation",
    description: "I create custom automations for Gmail, Sheets, and Docs to manage data, generate reports automatically, and significantly boost your team's day-to-day productivity.",
    features: [
      "Automated email parsing",
      "Dynamic report generation in Sheets",
      "Document creation from templates",
      "Calendar and task management"
    ]
  },
  {
    icon: <Icons.IconServiceAPI />,
    title: "API & Webhook Integrations",
    description: "I build custom API and webhook integrations to ensure seamless, real-time data flow across your entire tech stack, even for services that don't natively connect.",
    features: [
      "Custom REST API connections",
      "Real-time data transfer with webhooks",
      "Data transformation and formatting",
      "Secure and reliable connections"
    ]
  },
];

const CheckmarkIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    
    // Parallax effect for cards on scroll
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      cardRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, height } = ref.getBoundingClientRect();
          if (top < screenHeight && top > -height) {
            const speed = (index % 2 === 0) ? -0.03 : -0.05;
            const translateY = (screenHeight / 2 - top) * speed;
            ref.style.transform = `translateY(${translateY}px)`;
          }
        }
      });
    };

    const onScroll = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className={`text-center mb-16 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-5xl sm:text-6xl font-black font-display text-center mb-4 text-text-main tracking-tighter">What I Offer</h2>
        <p className="max-w-3xl mx-auto text-2xl text-primary text-center">
          I specialize in connecting your apps and automating workflows, so you can focus on what matters most.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {servicesData.map((service, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`w-full max-w-sm flex flex-col bg-surface border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(0,196,106,0.2)] motion-safe:hover:-translate-y-2 cursor-hover-target ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 150}ms`, willChange: 'transform' }}
          >
            <div className="h-12 w-12 mb-4 lg:mb-6">
                {service.icon}
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-text-main mb-4">{service.title}</h3>
            <p className="text-base lg:text-lg text-text-secondary mb-6 flex-grow">{service.description}</p>
             <div className="border-t border-border pt-6">
                <ul className="space-y-2 lg:space-y-3">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="text-primary mt-0.5 lg:mt-1"><CheckmarkIcon /></span>
                            <span className="text-text-secondary text-base lg:text-lg">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;