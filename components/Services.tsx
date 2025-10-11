import React from 'react';
import type { Service } from '../types';
import { Icons } from '../constants';

const servicesData: Service[] = [
  {
    icon: <Icons.WorkflowAutomation />,
    title: 'Workflow Automation',
    description: 'Connect apps like Google Workspace, Slack, Notion, Airtable, and Asana to streamline your processes.',
  },
  {
    icon: <Icons.AIPowered />,
    title: 'AI-Powered Processes',
    description: 'Use OpenAI and automation tools to generate content, replies, and reports automatically.',
  },
  {
    icon: <Icons.CRMAutomation />,
    title: 'CRM & Marketing Automation',
    description: 'Streamline lead nurturing and customer engagement in platforms like GoHighLevel.',
  },
  {
    icon: <Icons.DataIntegration />,
    title: 'Data Integration',
    description: 'Sync multiple platforms to keep your data consistent, accurate, and centralized.',
  },
  {
    icon: <Icons.EmailNotifications />,
    title: 'Email & Notification Systems',
    description: 'Automate critical alerts, approval workflows, and timely reminders for your team.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white rounded-xl shadow-sm mb-12">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Automation Services</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">I help digital agencies, freelancers, and business owners automate repetitive tasks and build scalable systems.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.slice(0, 5).map((service, index) => (
            <div key={index} className={`bg-gray-50 rounded-lg p-6 text-center ring-1 ring-gray-200 hover:ring-orange-500 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg ${servicesData.length > 3 && servicesData.length % 3 === 2 && index >= servicesData.length - 2 ? 'lg:col-span-1 lg:col-start-auto' : ''} ${servicesData.length === 5 && index === 3 ? 'lg:col-start-1 lg:ml-[17%]' : ''} ${servicesData.length === 5 && index === 4 ? 'lg:col-start-auto lg:mr-[17%]' : ''}`}>
              <div className="inline-block text-orange-500 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
