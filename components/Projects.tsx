import React from 'react';
import type { Project, ProjectCategory } from '../types';
import { Icons } from '../constants';

const projectsData: ProjectCategory[] = [
  {
    platform: "Zapier Projects",
    icon: <Icons.Zapier />,
    projects: [
      { 
        title: "Lead Enrichment Automation with Webhooks Integration", 
        description: "Automatically enrich incoming leads from forms and CRMs by fetching additional data from third-party APIs via Webhooks.",
        technologyUsed: ["Zapier", "Webhooks", "Google Sheets", "HubSpot API"]
      },
      { 
        title: "AI Content Repurposing", 
        description: "Repurposed blog posts into social media captions, email snippets, and LinkedIn posts automatically using AI.",
        technologyUsed: ["Zapier", "OpenAI API", "Google Docs", "Buffer"]
      },
      { 
        title: "CRM Workflow Automation in Asana", 
        description: "Streamlined client onboarding by automatically creating tasks, subtasks, and Google Drive folders when leads reached specific stages in Asana.",
        technologyUsed: ["Zapier", "Asana", "Google Drive", "Slack"]
      },
    ],
  },
  {
    platform: "Make (Integromat) Projects",
    icon: <Icons.Make />,
    projects: [
      { 
        title: "Automated Xero to Asana CSV Export", 
        description: "Pulled financial data from Xero and exported it to Asana in CSV format for team review, reducing manual data entry.",
        technologyUsed: ["Make (Integromat)", "Xero API", "Asana", "Google Sheets"]
      },
      { 
        title: "Automated Gmail Attachment Organizer for Google Drive", 
        description: "Automatically scanned incoming Gmail attachments and organized them into categorized folders in Google Drive.",
        technologyUsed: ["Make (Integromat)", "Gmail", "Google Drive"]
      },
    ],
  },
  {
    platform: "n8n Projects",
    icon: <Icons.N8N />,
    projects: [
      { 
        title: "AI Agent for Facebook Page", 
        description: "Implemented an AI-powered agent to automatically respond to comments and messages on Facebook pages.",
        technologyUsed: ["n8n", "Facebook Graph API", "OpenAI API"]
      },
      { 
        title: "Auto-Save Gmail Invoice/Receipt Attachments to Google Drive", 
        description: "Automatically detected invoices and receipts in Gmail and saved them to specific folders in Google Drive.",
        technologyUsed: ["n8n", "Gmail", "Google Drive"]
      },
      { 
        title: "Automated Daily Sales & Orders Report via Slack", 
        description: "Pulled daily sales and orders data from APIs and sent formatted summary reports to Slack channels.",
        technologyUsed: ["n8n", "Slack API", "Google Sheets", "E-commerce API"]
      },
      { 
        title: "Automated Email Summarization with AI & Slack Notifications", 
        description: "Summarized incoming emails using AI and sent highlights to Slack for team awareness.",
        technologyUsed: ["n8n", "Gmail", "OpenAI API", "Slack"]
      },
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