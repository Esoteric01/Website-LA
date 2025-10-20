
import React, { useState, useRef, useEffect } from 'react';
import type { Project, ProjectCategory } from '../types';

const createGradientPlaceholder = (platform: string, color1: string, color2: string, iconColor: string): string => {
  let artElements = '';
  const artColor = '#262626'; // new border color

  switch (platform) {
    case "Zapier Projects":
      artElements = `
        <g stroke="${artColor}" stroke-width="40" stroke-linecap="round" opacity="0.1">
            <path d="M-50 150 L150 -50" />
            <path d="M50 250 L250 50" />
            <path d="M150 350 L350 150" />
            <path d="M450 650 L650 450" />
        </g>
        <g fill="none" stroke="${artColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">
            <path d="M80 100 L120 100" />
            <polyline points="110,90 120,100 110,110" />
            <path d="M300 300 L340 300" />
            <polyline points="330,290 340,300 330,310" />
        </g>
        <g fill="${artColor}" opacity="0.2">
            <path d="M450 80 l 6 14 l 14 6 l -14 6 l -6 14 l -6 -14 l -14 -6 l 14 -6 Z" />
        </g>
      `;
      break;
    case "Make":
      artElements = `
        <g fill="${artColor}" opacity="0.15">
          <circle cx="100" cy="300" r="80" />
          <circle cx="500" cy="100" r="120" />
          <circle cx="250" cy="120" r="50" />
          <circle cx="400" cy="320" r="30" />
        </g>
        <g fill="none" stroke="${artColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">
          <path d="M100 300 C 180 280, 200 180, 250 120" />
          <polyline points="240,130 250,120 240,110" />
          <path d="M500 100 C 400 150, 350 200, 300 250" />
          <circle cx="300" cy="250" r="10" fill="${artColor}" stroke-width="0" />
          <path d="M300 250 L 400 320" />
          <polyline points="390,310 400,320 390,330" />
        </g>
        <g fill="${artColor}" opacity="0.2" transform="translate(50, 80)">
          <rect x="0" y="25" width="20" height="70" rx="5" />
          <rect x="-25" y="50" width="70" height="20" rx="5" />
        </g>
      `;
      break;
    case "n8n Projects":
      const createHex = (cx: number, cy: number, size: number) => {
          const points = [];
          for (let i = 0; i < 6; i++) {
              const angle_deg = 60 * i + 30;
              const angle_rad = Math.PI / 180 * angle_deg;
              points.push(`${cx + size * Math.cos(angle_rad)},${cy + size * Math.sin(angle_rad)}`);
          }
          return `<polygon points="${points.join(' ')}" />`;
      };
      artElements = `
        <g fill="${artColor}" opacity="0.1">
          ${createHex(100, 100, 60)}
          ${createHex(220, 250, 90)}
          ${createHex(450, 150, 110)}
        </g>
        <g fill="none" stroke="${artColor}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">
          <path d="M160 100 L 250 150" />
          <polyline points="240,140 250,150 240,160" />
          <path d="M340 150 L 290 200" />
          <polyline points="300,210 290,200 300,190" />
        </g>
        <g fill="none" stroke="${artColor}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity="0.3">
          <polyline points="500,320 480,350 500,380" />
          <polyline points="550,320 570,350 550,380" />
        </g>
      `;
      break;
    default:
      artElements = `
        <line x1="0" y1="0" x2="600" y2="400" stroke="${artColor}" stroke-width="2" opacity="0.2"/>
        <line x1="600" y1="0" x2="0" y2="400" stroke="${artColor}" stroke-width="2" opacity="0.2"/>
      `;
      break;
  }

  const workflowIcon = `
    <g fill="${iconColor}" stroke="${iconColor}" stroke-width="8" stroke-linecap="round" opacity="0.8">
        <path d="M150 100 C 200 100 200 150 250 150 S 300 200 350 200" fill="none"/>
        <path d="M250 150 C 300 150 300 100 350 100" fill="none" />
        <circle cx="150" cy="100" r="20" stroke-width="0"/>
        <circle cx="250" cy="150" r="20" stroke-width="0"/>
        <circle cx="350" cy="200" r="20" stroke-width="0"/>
        <circle cx="350" cy="100" r="20" stroke-width="0"/>
    </g>
    <g transform="translate(200, 100) scale(0.7)" fill="${iconColor}" stroke="${iconColor}" stroke-width="12" stroke-linecap="round" opacity="0.5">
        <path d="M150 100 C 200 100 200 150 250 150 S 300 200 350 200" fill="none"/>
        <path d="M250 150 C 300 150 300 100 350 100" fill="none" />
        <circle cx="150" cy="100" r="25" stroke-width="0"/>
        <circle cx="250" cy="150" r="25" stroke-width="0"/>
        <circle cx="350" cy="200" r="25" stroke-width="0"/>
        <circle cx="350" cy="100" r="25" stroke-width="0"/>
    </g>
  `;

  const svg = `
    <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color1}" />
          <stop offset="100%" stop-color="${color2}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
      ${artElements}
      ${workflowIcon}
    </svg>`.replace(/\n\s*/g, '');
  
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};


const rawProjectData = [
  {
    platform: "n8n Projects",
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/n8n.png?raw=true" alt="n8n logo" className="h-full w-full object-contain" loading="lazy" />,
    projects: [
      { 
        title: "AI Agent for Facebook Messenger", 
        description: "Overview:\nA fully automated, AI-powered agent that delivers instant, context-aware responses to Facebook Page messages, enhancing customer experience and reducing manual effort.\n\nProcess:\nEverything was automated inside n8n, from message detection to AI response delivery:\n1. Webhook Trigger: Detects new messages sent to the Facebook Page via the Graph API.\n2. Respond to Webhook: Acknowledges the event to keep communication smooth.\n3. Filter Node: Identifies which messages can be answered automatically.\n4. FAQ / Knowledge Base: Connects to a Google Docs file containing product information and FAQs.\n5. AI Agent (Gemini): Analyzes the user’s message and generates a context-aware reply based on the FAQ content.\n6. HTTP Request: Sends the AI-generated response back to Facebook Messenger instantly — all within n8n.\n\nResults:\nThe implementation yielded significant improvements in efficiency and customer engagement:\n- Achieved a 100% automated response system, requiring zero manual intervention for common queries.\n- Drastically reduced average reply time from hours to mere seconds.\n- Ensured consistent, on-brand answers by drawing directly from the approved FAQ content.\n- Increased Messenger engagement and improved the page's overall responsiveness score.\n- Boosted customer satisfaction by providing immediate and helpful interactions.",
        technologyUsed: ["n8n", "Gemini", "Facebook Graph API", "Google Docs"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20AI%20Agent%20for%20Facebook%20Messenger/Workflow%20Screenshot%20from%20N8N.jpg?raw=true",
        images: [
          {
            label: "Workflow Screenshot from N8N",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20AI%20Agent%20for%20Facebook%20Messenger/Workflow%20Screenshot%20from%20N8N.jpg?raw=true"
          },
          {
            label: "Webhook Configuration Screenshot from META",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20AI%20Agent%20for%20Facebook%20Messenger/Webhook%20Configuration%20Screenshot%20from%20META.png?raw=true"
          }
        ]
      },
      { 
        title: "Auto-Save Gmail Invoice/Receipt Attachments to Google Drive", 
        description: "Overview:\nAutomatically detected invoices and receipts in Gmail and saved them to specific folders in Google Drive.\n\nProcess:\nI used n8n to listen for new Gmail messages containing “invoice” or “receipt.” The workflow filters and moves attachments into Drive with date-based folder naming.\n\nResults:\nEliminated manual saving tasks, reduced lost documents, and ensured 100% invoice capture accuracy.",
        technologyUsed: ["n8n", "Gmail", "Google Drive"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Auto-Save%20Gmail%20Invoice%20&%20Receipt%20Attachments%20to%20Google%20Drive.jpg?raw=true",
        images: [
          { 
            label: "N8N Screenshot", 
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Auto-Save%20Gmail%20Invoice%20&%20Receipt%20Attachments%20to%20Google%20Drive%20-%20N8N.jpg?raw=true" 
          },
          { 
            label: "Google Drive Screenshot", 
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Auto-Save%20Gmail%20Invoice%20&%20Receipt%20Attachments%20to%20Google%20Drive%20-%20Google%20Drive.jpg?raw=true" 
          },
          { 
            label: "Google Sheet Screenshot", 
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Auto-Save%20Gmail%20Invoice%20&%20Receipt%20Attachments%20to%20Google%20Drive%20-%20Google%20Sheet.jpg?raw=true" 
          },
        ],
      },
      { 
        title: "Automated Daily Sales & Orders Report via Slack", 
        description: "Overview:\nCreated an automated system to pull daily sales and orders data from e-commerce APIs and deliver a formatted summary report to key Slack channels.\n\nProcess:\nAn n8n workflow runs on a daily schedule, making API calls to the e-commerce platform. The data is aggregated, formatted into a readable report, and then posted to a designated Slack channel.\n\nResults:\nSaved over 5 hours of manual reporting work per week, provided real-time visibility into sales performance for the management team, and eliminated data entry errors.",
        technologyUsed: ["n8n", "Slack API", "Google Sheets", "E-commerce API"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Daily%20Sales%20&%20Orders%20Report%20via%20Slack.jpg?raw=true",
        images: [
          {
            label: "N8N Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Daily%20Sales%20&%20Orders%20Report%20via%20Slack.jpg?raw=true"
          },
          {
            label: "Google Sheet Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Daily%20Sales%20&%20Orders%20Report%20via%20Slack%20-%20Google%20Sheet.jpg?raw=true"
          },
          {
            label: "Slack",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Daily%20Sales%20&%20Orders%20Report%20via%20Slack%20-%20Slack.jpg?raw=true"
          }
        ]
      },
      { 
        title: "Automated Email Summarization with AI & Slack Notifications", 
        description: "Overview:\nDeveloped a workflow that automatically summarizes important incoming emails using AI and sends the key highlights to a team Slack channel for quick awareness.\n\nProcess:\nThe n8n workflow triggers on new emails in a specific Gmail folder. The email content is passed to the OpenAI API for summarization. The concise summary is then posted as a notification in Slack, with a link to the original email.\n\nResults:\nDrastically reduced the time spent reading long email threads, ensured critical information was never missed, and improved team-wide communication and response speed.",
        technologyUsed: ["n8n", "Gmail", "OpenAI API", "Slack"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Email%20Summarization%20with%20AI%20and%20Slack%20Notifications.jpg?raw=true",
        images: [
          {
            label: "N8N Screen Shot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Email%20Summarization%20with%20AI%20and%20Slack%20Notifications%20-%20N8N.jpg?raw=true"
          },
          {
            label: "Slack Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Email%20Summarization%20with%20AI%20and%20Slack%20Notifications%20-%20Slack.png?raw=true"
          },
          {
            label: "Gmail Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/N8N%20-%20Automated%20Email%20Summarization%20with%20AI%20and%20Slack%20Notifications%20-%20Gmail.png?raw=true"
          }
        ],
      },
    ],
  },
  {
    platform: "Make",
    icon: <img src="https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/make.png?raw=true" alt="Make.com logo" className="h-full w-full object-contain" loading="lazy" />,
    projects: [
      { 
        title: "Automated Xero to Asana CSV Export", 
        description: "Overview:\nAutomated the process of exporting financial data from Xero and creating actionable tasks in Asana for team review.\n\nProcess:\nA Make scenario runs on a schedule to fetch new invoices from the Xero API. The data is compiled into a CSV file, uploaded to Google Drive, and a task is created in Asana with a link to the file, notifying the finance team.\n\nResults:\nEliminated manual data entry and report generation, ensured timely review of financial documents, and improved accuracy by removing the risk of human error.",
        technologyUsed: ["Make", "Xero API", "Asana", "Google Sheets"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Xero%20to%20Asana%20CSV%20Export%20-%20Make.jpg?raw=true",
        images: [
          {
            label: "Make Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Xero%20to%20Asana%20CSV%20Export%20-%20Make.jpg?raw=true"
          },
          {
            label: "Xero Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Xero%20to%20Asana%20CSV%20Export%20-%20Xero.jpg?raw=true"
          },
          {
            label: "Asana",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Xero%20to%20Asana%20CSV%20Export%20-%20Asana.jpg?raw=true"
          }
        ]
      },
      { 
        title: "Automated Gmail Attachment Organizer for Google Drive", 
        description: "Overview:\nCreated an intelligent system to automatically scan incoming Gmail attachments and organize them into categorized folders within Google Drive.\n\nProcess:\nThe Make scenario watches for new emails with attachments. It uses filters to identify keywords (e.g., 'invoice,' 'report'). Based on these rules, it saves the attachment to the corresponding folder in Google Drive, renaming the file for consistency.\n\nResults:\nSaved countless hours of manual sorting, created a perfectly organized document repository, and prevented important files from being lost in the inbox.",
        technologyUsed: ["Make", "Gmail", "Google Drive"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Gmail%20Attachment%20Organizer%20for%20Google%20Drive.jpg?raw=true",
        images: [
          {
            label: "Make Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Gmail%20Attachment%20Organizer%20for%20Google%20Drive%20-%20Make.jpg?raw=true"
          },
          {
            label: "Google Drive Screenshot",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Gmail%20Attachment%20Organizer%20for%20Google%20Drive%20-%20Google%20Drive.jpg?raw=true"
          },
          {
            label: "Google Sheet",
            url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/MAKE%20-%20Automated%20Gmail%20Attachment%20Organizer%20for%20Google%20Drive%20-%20Google%20Sheet.jpg?raw=true"
          }
        ]
      },
    ],
  },
  {
    platform: "Zapier Projects",
    icon: <img src="https://raw.githubusercontent.com/Esoteric01/loizalmerino.com-assets/63f6c62cf0ca76d0b2b0830591ddff179e9c9295/Automation%20Projects%20Images/zapier.svg" alt="Zapier logo" className="h-full w-full object-contain" loading="lazy" />,
    projects: [
      { 
        title: "AI Content Repurposing", 
        description: "Overview:\nBuilt an AI-driven automation that repurposes long-form blog posts into various short-form content formats, such as social media captions, email newsletter snippets, and LinkedIn articles.\n\nProcess:\nWhen a new blog post is published, a Zapier workflow sends the content to the OpenAI API with specific prompts to generate different content variations. These repurposed snippets are then saved as drafts in content management tools.\n\nResults:\nIncreased content output by 300% without additional writing effort, maintained a consistent brand voice across all platforms, and significantly boosted social media engagement.",
        technologyUsed: ["Zapier", "OpenAI API", "Google Docs", "Buffer"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/ZAPIER%20-%20AI%20Content%20Repurposing.jpg?raw=true",
        images: [{
          label: "Zapier AI Content Workflow",
          url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/ZAPIER%20-%20AI%20Content%20Repurposing.jpg?raw=true"
        }]
      },
      { 
        title: "CRM Workflow Automation in Asana", 
        description: "Overview:\nStreamlined the entire client onboarding process by automating task creation, folder setup, and team notifications within Asana and Google Drive.\n\nProcess:\nA Zap triggers when a lead is moved to an 'Onboarding' stage. The workflow automatically creates a new project in Asana from a template, generates a client folder in Google Drive, and sends a confirmation notification in Slack.\n\nResults:\nReduced onboarding time by 90%, eliminated manual setup errors, and provided a consistent and professional experience for every new client.",
        technologyUsed: ["Zapier", "Asana", "Google Drive", "Slack"],
        imageUrl: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/ZAPIER%20-%20CRM%20Workflow%20Automation%20in%20Asana.jpg?raw=true",
        images: [{
          label: "Asana Onboarding Automation",
          url: "https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Automation%20Projects%20Images/ZAPIER%20-%20CRM%20Workflow%20Automation%20in%20Asana.jpg?raw=true"
        }]
      },
    ],
  },
];

const platformColors = {
  "Zapier Projects": { color1: '#0A0A0A', color2: '#141414', iconColor: '#00C46A' },
  "Make": { color1: '#141414', color2: '#0A0A0A', iconColor: '#00C46A' },
  "n8n Projects": { color1: '#0A0A0A', color2: '#141414', iconColor: '#00C46A' },
};


const projectsData: ProjectCategory[] = rawProjectData.map(category => ({
  ...category,
  projects: category.projects.map(project => {
    const colors = platformColors[category.platform as keyof typeof platformColors];
    return {
      ...project,
      imageUrl: (project as any).imageUrl || createGradientPlaceholder(category.platform, colors.color1, colors.color2, colors.iconColor),
    };
  }),
}));


interface ProjectsProps {
  onProjectClick: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(projectsData[0].platform);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeCategory = projectsData.find(cat => cat.platform === selectedPlatform);

  useEffect(() => {
    if (activeCategory) {
      projectCardRefs.current = projectCardRefs.current.slice(0, activeCategory.projects.length);
    }
  }, [activeCategory]);

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

    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      projectCardRefs.current.forEach((ref, index) => {
        if (ref) {
          const { top, height } = ref.getBoundingClientRect();
          if (top < screenHeight && top > -height) {
            const speed = (index % 2 === 0) ? -0.05 : -0.08;
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
  }, [activeCategory]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-28">
      <div className={`text-center mb-12 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-5xl sm:text-6xl font-black font-display mb-4 text-text-main tracking-tighter">Automation Projects</h2>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-primary">
          A collection of automation builds powered by AI and integration tools.
        </p>
      </div>
      
      <div className="flex items-center bg-background border border-border rounded-xl p-1.5 gap-2 mb-16 max-w-full md:max-w-max md:mx-auto">
        {projectsData.map((category) => (
          <button
            key={category.platform}
            onClick={() => setSelectedPlatform(category.platform)}
            className={`flex flex-1 md:flex-initial justify-center items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-hover-target ${
              selectedPlatform === category.platform
                ? 'bg-primary text-background'
                : 'text-text-secondary hover:bg-surface'
            }`}
          >
            <div className="w-5 h-5">{category.icon}</div>
            <span>{category.platform.replace(' Projects', '')}</span>
          </button>
        ))}
      </div>

      <div>
        {activeCategory && (
          <div className="max-w-7xl mx-auto" key={selectedPlatform}>
            <div className="space-y-8">
              {activeCategory.projects.map((project, projIndex) => (
                <div 
                  key={projIndex}
                  ref={el => projectCardRefs.current[projIndex] = el}
                  className={`${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
                  style={{ willChange: 'transform', animationDelay: `${projIndex * 150}ms` }}
                >
                  <div 
                    onClick={() => onProjectClick(project)}
                    onMouseMove={handleMouseMove}
                    className="group grid grid-cols-1 lg:grid-cols-12 items-center gap-x-8 gap-y-8 relative overflow-hidden bg-surface rounded-2xl p-6 md:p-8 border border-border transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(0,196,106,0.2)] motion-safe:hover:-translate-y-2 cursor-hover-target"
                  >
                    <div 
                        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(0, 196, 106, 0.1), transparent 40%)`,
                        }}
                    />
                    {/* Text Content Column */}
                    <div className="lg:col-span-5 flex flex-col h-full relative">
                      <div className="w-10 h-10 mb-4 text-primary">{activeCategory.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4 leading-snug">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologyUsed.map((tech, index) => (
                          <span key={index} className="border border-primary text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-base md:text-lg text-text-secondary mb-8 leading-relaxed flex-grow">{project.description.split('\n')[1]}</p>
                      <button
                        onClick={(e) => { e.stopPropagation(); onProjectClick(project); }}
                        className="bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target self-start"
                      >
                        View Work
                      </button>
                    </div>

                    {/* Image Content Column */}
                    <div className="lg:col-span-7 relative">
                      <div 
                        className="rounded-xl overflow-hidden shadow-lg transition-all duration-500 group-hover:scale-[1.03] cursor-pointer"
                      >
                        <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover aspect-video" loading="lazy" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
