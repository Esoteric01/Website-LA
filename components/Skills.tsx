import React from 'react';
import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    title: "Automation Platforms",
    skills: [{ name: "N8N" }, { name: "Make" }, { name: "Zapier" }],
  },
  {
    title: "CRMs & Productivity Tools",
    skills: [{ name: "Go High Level" }, { name: "Asana" }, { name: "HubSpot" }, { name: "Pipedrive" }, { name: "Typeform" }],
  },
  {
    title: "Cloud & Email",
    skills: [{ name: "Gmail" }, { name: "Google Drive" }, { name: "Slack" }, { name: "Xero" }],
  },
  {
    title: "Specialized Expertise",
    skills: [{ name: "API Integrations" }, { name: "AI-Powered Workflows" }, { name: "Lead Enrichment" }, { name: "Automated Reporting" }],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Skills & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="bg-white rounded-lg p-6 ring-1 ring-gray-200 hover:ring-orange-500 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
            <h3 className="text-xl font-semibold text-orange-500 mb-4">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;