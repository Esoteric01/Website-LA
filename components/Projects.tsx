import React from 'react';
import type { Project, ProjectCategory } from '../types';
import { Icons } from '../constants';

const projectsData: ProjectCategory[] = [
  {
    platform: "Zapier Automations",
    icon: <Icons.Zapier />,
    projects: [
      { title: "Lead Enrichment Automation with Webhooks Integration", description: "Automated lead data enrichment and routing." },
      { title: "AI Content Repurposing", description: "Streamlined content transformation for multiple platforms." },
    ],
  },
  {
    platform: "Make (Integromat) Automations",
    icon: <Icons.Make />,
    projects: [
      { title: "Automated Export Account Transactions (Xero → Asana)", description: "Generated CSV exports from Xero and uploaded them to Asana automatically." },
      { title: "Auto-Sort Gmail Attachments on Google Drive", description: "Created file organization workflows for incoming email attachments." },
    ],
  },
  {
    platform: "N8N Automations",
    icon: <Icons.N8N />,
    projects: [
      { title: "AI Agent for FB Page", description: "Built a chatbot-like workflow powered by N8N for handling FAQs and customer inquiries." },
      { title: "Auto-Save Gmail Invoice/Receipt Attachments to Google Drive", description: "Reduced manual email-to-drive tasks." },
      { title: "Automated Daily Sales & Orders Report via Slack", description: "Delivered real-time sales insights to teams." },
      { title: "Automated Email Summarization with AI & Slack Notifications", description: "Used AI to summarize emails and push key info to Slack." },
    ],
  },
];

interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Highlighted Projects</h2>
      <div className="space-y-12">
        {projectsData.map((category, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-orange-500">{category.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-900">{category.platform}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.projects.map((project, projIndex) => (
                <div 
                  key={projIndex} 
                  onClick={() => onProjectClick(project)}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
                >
                  <h4 className="font-bold text-lg text-gray-800 mb-2">{project.title}</h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;