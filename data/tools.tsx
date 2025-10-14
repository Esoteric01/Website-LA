import React from 'react';
import { Icons } from '../constants';
import { Tool } from '../types';

export const toolsData: Tool[] = [
  {
    icon: <img src="https://raw.githubusercontent.com/Esoteric01/loizalmerino.com-assets/903f3094232f84299a6298b5c614b61eecb1f374/Automation%20Stack%20Icons/zapier.svg" alt="Zapier logo" className="h-full w-full object-contain" />,
    name: 'Zapier',
    category: 'Automation Platforms',
    description: 'Connect your apps and automate workflows.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/make.png?raw=true" alt="Make.com logo" className="h-full w-full object-contain" />,
    name: 'Make (Integromat)',
    category: 'Automation Platforms',
    description: 'Visually create, build, and automate workflows.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/n8n.png?raw=true" alt="n8n logo" className="h-full w-full object-contain" />,
    name: 'n8n',
    category: 'Automation Platforms',
    description: 'Extendable workflow automation with fair-code.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/chatgpt.png?raw=true" alt="ChatGPT logo" className="h-full w-full object-contain" />,
    name: 'ChatGPT',
    category: 'AI Tools',
    description: 'Leverage AI for content, analysis, and more.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/gemini.png?raw=true" alt="Gemini logo" className="h-full w-full object-contain" />,
    name: 'Gemini',
    category: 'AI Tools',
    description: "Integrate Google's powerful generative AI models.",
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/copilot.png?raw=true" alt="Copilot logo" className="h-full w-full object-contain" />,
    name: 'Copilot',
    category: 'AI Tools',
    description: 'Use AI to accelerate development and tasks.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/hubspot.png?raw=true" alt="HubSpot logo" className="h-full w-full object-contain" />,
    name: 'HubSpot',
    category: 'CRMs',
    description: 'Inbound marketing, sales, and service software.',
  },
  {
    icon: <img src="https://raw.githubusercontent.com/Esoteric01/loizalmerino.com-assets/903f3094232f84299a6298b5c614b61eecb1f374/Automation%20Stack%20Icons/pipedrive.svg" alt="Pipedrive logo" className="h-full w-full object-contain" />,
    name: 'Pipedrive',
    category: 'CRMs',
    description: 'Sales CRM for small teams with big ambitions.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/gohighlevel.webp?raw=true" alt="GoHighLevel logo" className="h-full w-full object-contain" />,
    name: 'GoHighLevel',
    category: 'CRMs',
    description: 'All-in-one platform for agencies and marketers.',
  },
  {
    icon: <img src="https://raw.githubusercontent.com/Esoteric01/loizalmerino.com-assets/903f3094232f84299a6298b5c614b61eecb1f374/Automation%20Stack%20Icons/asana.svg" alt="Asana logo" className="h-full w-full object-contain" />,
    name: 'Asana',
    category: 'Project & Collaboration Tools',
    description: 'Work management platform for teams.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/clickup.png?raw=true" alt="ClickUp logo" className="h-full w-full object-contain" />,
    name: 'ClickUp',
    category: 'Project & Collaboration Tools',
    description: 'One app to replace them all. For tasks, docs, chat, goals.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/trello.png?raw=true" alt="Trello logo" className="h-full w-full object-contain" />,
    name: 'Trello',
    category: 'Project & Collaboration Tools',
    description: 'Collaborate, manage projects, and reach new productivity peaks.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/googleworkspace.webp?raw=true" alt="Google Workspace logo" className="h-full w-full object-contain" />,
    name: 'Google Workspace',
    category: 'Productivity Tools',
    description: 'Collaboration and productivity tools for business.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/slack.png?raw=true" alt="Slack logo" className="h-full w-full object-contain" />,
    name: 'Slack',
    category: 'Productivity Tools',
    description: 'Bring your team together, wherever you are.',
  },
  {
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Stack%20Icons/calendly.png?raw=true" alt="Calendly logo" className="h-full w-full object-contain" />,
    name: 'Calendly',
    category: 'Productivity Tools',
    description: 'Automated scheduling for individuals and teams.',
  },
  {
    icon: <Icons.APIsWebhooks />,
    name: 'Workflow Integrations',
    category: 'Workflow Integrations',
    description: 'Custom integrations to connect any service.',
  },
];