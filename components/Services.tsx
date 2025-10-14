import React from 'react';
import type { Service } from '../types';
import { Icons } from '../constants';

const servicesData: Service[] = [
  {
    icon: <Icons.IconServiceWorkflow />,
    title: "Workflow Automation",
    description: "Expert in Zapier, Make (Integromat), GoHighLevel, and n8n. I build intelligent automation systems that eliminate repetitive tasks and streamline your business processes.",
  },
  {
    icon: <Icons.IconServiceCRMAndMarketing />,
    title: "CRM & Marketing Automation",
    description: "Specialized in HubSpot and GoHighLevel implementation. I create automated lead pipelines, follow-up sequences, and customer engagement workflows that drive conversions.",
  },
  {
    icon: <Icons.IconServiceAPI />,
    title: "API Integration & Scripting",
    description: "Proficient in Google Apps Script and API integrations. I connect your tools seamlessly with custom scripts, webhooks, and REST API implementations.",
  },
  {
    icon: <Icons.IconServiceAI />,
    title: "AI-Powered Automation",
    description: "Building smart automation workflows with AI integration. I leverage tools like Google Gemini to create intelligent systems that adapt and respond dynamically.",
  },
  {
    icon: <Icons.IconServiceCRM />,
    title: "Data Management",
    description: "Expert in Airtable, Google Sheets, and Monday.com. I design efficient data structures and automated reporting systems that keep your business organized.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <h2 className="text-5xl sm:text-6xl font-black font-display text-center mb-4 text-text-main">What I Offer</h2>
      <p className="max-w-3xl mx-auto text-2xl text-primary mb-12 text-center">
        I specialize in connecting your apps and automating workflows, so you can focus on what matters most.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="animate-fade-in-up relative bg-surface rounded-2xl p-8 border border-border transition-all duration-300 hover:border-primary/80 hover:bg-[radial-gradient(ellipse_at_top,_rgba(0,196,106,0.15)_0%,_transparent_70%)] hover:shadow-[0_0_25px_rgba(0,196,106,0.2)] hover:-translate-y-2 flex flex-col items-center text-center w-full max-w-sm cursor-hover-target overflow-hidden"
            style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/50 text-primary">
              <div className="h-10 w-10">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold font-display text-text-main mb-3">{service.title}</h3>
            <p className="text-text-secondary leading-relaxed text-lg flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;