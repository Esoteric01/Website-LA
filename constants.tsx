
import React from 'react';

// New, animated icon for Workflow Automation
const IconServiceWorkflow = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
         <defs>
            <filter id="glow-filter-workflow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
        </defs>
        <path d="M12 32 C 22 12, 42 52, 52 32" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" fill="none" />
        <circle cx="12" cy="32" r="5" stroke="#00C46A" strokeWidth="2" fill="#0A0A0A" />
        <circle cx="52" cy="32" r="5" stroke="#00C46A" strokeWidth="2" fill="#0A0A0A" />
        
        <circle r="4" fill="#00C46A">
            <animateMotion dur="4s" repeatCount="indefinite" path="M12 32 C 22 12, 42 52, 52 32" />
        </circle>
        <g filter="url(#glow-filter-workflow)" opacity="0.7">
             <circle r="4" fill="#00C46A">
                <animateMotion dur="4s" repeatCount="indefinite" path="M12 32 C 22 12, 42 52, 52 32" />
            </circle>
        </g>
    </svg>
);

// New, animated icon for AI Integration
const IconServiceAI = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>
            {`
                @keyframes brain-pulse-anim {
                    0%, 100% { transform: scale(0.95); opacity: 0.7; }
                    50% { transform: scale(1.05); opacity: 1; }
                }
                .brain-pulse {
                    animation: brain-pulse-anim 2.5s infinite ease-in-out;
                    transform-origin: 32px 32px;
                }
            `}
        </style>
        <defs>
            <filter id="glow-filter-ai" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
            </filter>
        </defs>
        <path d="M52 32C52 42.464 43.2987 51 32 51C28.1091 51 24.522 49.8273 21.6 47.8L12 52L16.2 42.4C13.1727 39.478 12 35.8909 12 32C12 21.536 20.7013 13 32 13C43.2987 13 52 21.536 52 32Z" stroke="#f0f0f0" strokeWidth="2" />
        
        <g className="brain-pulse">
            <path d="M32,22 C26,22 24,28 24,32 C24,36 26,42 32,42 S40,36 40,32 C40,28 38,22 32,22Z M32,22 V42 M26,28 H38 M26,36 H38"
                stroke="#00C46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <g filter="url(#glow-filter-ai)" opacity="0.7">
                 <path d="M32,22 C26,22 24,28 24,32 C24,36 26,42 32,42 S40,36 40,32 C40,28 38,22 32,22Z M32,22 V42 M26,28 H38 M26,36 H38"
                    stroke="#00C46A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
    </svg>
);

// New, animated icon for CRM & Marketing Optimization
const IconServiceCRMAndMarketing = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>
            {`
                @keyframes bar-up-down {
                    0%, 100% { transform: scaleY(0.2); }
                    50% { transform: scaleY(1); }
                }
                .bar1 { animation: bar-up-down 2s infinite ease-in-out; animation-delay: 0s; transform-origin: bottom; }
                .bar2 { animation: bar-up-down 2s infinite ease-in-out; animation-delay: 0.2s; transform-origin: bottom; }
                .bar3 { animation: bar-up-down 2s infinite ease-in-out; animation-delay: 0.4s; transform-origin: bottom; }
            `}
        </style>
        <defs>
            <filter id="glow-filter-crm" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
        </defs>
        <circle cx="22" cy="24" r="8" stroke="#f0f0f0" strokeWidth="2" />
        <path d="M36 52V48C36 43.5817 32.4183 40 28 40H16C11.5817 40 8 43.5817 8 48V52" stroke="#f0f0f0" strokeWidth="2" />
        <g>
            <path d="M40 52 H62" stroke="#f0f0f0" strokeWidth="2" />
            <rect className="bar1" x="42" y="32" width="5" height="20" fill="#00C46A" rx="2" />
            <rect className="bar2" x="49" y="32" width="5" height="20" fill="#00C46A" rx="2" />
            <rect className="bar3" x="56" y="32" width="5" height="20" fill="#00C46A" rx="2" />
             <g filter="url(#glow-filter-crm)" opacity="0.7">
                <rect className="bar1" x="42" y="32" width="5" height="20" fill="#00C46A" rx="2" />
                <rect className="bar2" x="49" y="32" width="5" height="20" fill="#00C46A" rx="2" />
                <rect className="bar3" x="56" y="32" width="5" height="20" fill="#00C46A" rx="2" />
             </g>
        </g>
    </svg>
);

// New, animated icon for Productivity Automation
const IconServiceProductivity = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>
            {`
                @keyframes arrow-flow-anim {
                    0% { transform: translateX(-2px); opacity: 0; }
                    20% { opacity: 1; }
                    70% { transform: translateX(16px); opacity: 1; }
                    90%, 100% { transform: translateX(16px); opacity: 0; }
                }
                @keyframes sheet-glow-anim {
                    0%, 70% { stroke: #00C46A; }
                    85% { stroke: #f0f0f0; }
                    100% { stroke: #00C46A; }
                }
                .arrow-flow {
                    animation: arrow-flow-anim 3s infinite ease-in-out;
                }
                .sheet-glow {
                    animation: sheet-glow-anim 3s infinite ease-in-out;
                }
            `}
        </style>
        <defs>
            <filter id="glow-filter-prod" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            </filter>
        </defs>
        {/* Main document frame */}
        <path d="M16 12 H40 L48 20 V52 H16 Z" stroke="#f0f0f0" strokeWidth="2" />
        <path d="M40 12 V20 H48" stroke="#f0f0f0" strokeWidth="2" />

        {/* Inner elements: Gmail -> Sheets */}
        <g transform="translate(-4, 2)">
            {/* Gmail Icon (simplified envelope) */}
            <g>
                <path d="M26 30 l6 4 l6 -4" stroke="#00C46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="26" y="30" width="12" height="8" rx="1" stroke="#00C46A" strokeWidth="1.5" fill="none" />
            </g>
            
            {/* Arrow */}
            <g className="arrow-flow">
                <path d="M39 34 L43 34" stroke="#f0f0f0" strokeWidth="2" strokeLinecap="round" />
                <path d="M41 32 L43 34 L41 36" stroke="#f0f0f0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            {/* Sheets Icon (simplified grid) */}
            <g className="sheet-glow">
                <rect x="45" y="30" width="8" height="8" rx="1" strokeWidth="1.5" fill="none" />
                <path d="M45 34 h8 M49 30 v8" strokeWidth="1" />
            </g>
             <g filter="url(#glow-filter-prod)" opacity="0.7">
                <path d="M26 30 l6 4 l6 -4" stroke="#00C46A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <g className="sheet-glow">
                    <rect x="45" y="30" width="8" height="8" rx="1" strokeWidth="1.5" fill="none" />
                </g>
             </g>
        </g>
    </svg>
);

// New, animated icon for API Integrations
const IconServiceAPI = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <style>
            {`
                @keyframes arrow-left-anim {
                    0%, 100% { transform: translateX(0px); opacity: 1;}
                    50% { transform: translateX(-12px); opacity: 0; }
                    51% { transform: translateX(12px); opacity: 0; }
                }
                @keyframes arrow-right-anim {
                    0%, 100% { transform: translateX(0px); opacity: 1;}
                    50% { transform: translateX(12px); opacity: 0; }
                    51% { transform: translateX(-12px); opacity: 0; }
                }
                .arrow-left { animation: arrow-left-anim 3s infinite ease-in-out; }
                .arrow-right { animation: arrow-right-anim 3s infinite ease-in-out; }
            `}
        </style>
        <defs>
            <filter id="glow-filter-api" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
            </filter>
        </defs>
        <path d="M24 16 L12 32 L24 48" stroke="#f0f0f0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 16 L52 32 L40 48" stroke="#f0f0f0" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <g>
            <path d="M26 26 L38 32 L26 38 Z" stroke="#00C46A" strokeWidth="2.5" fill="#00C46A" className="arrow-right" />
            <path d="M38 26 L26 32 L38 38 Z" stroke="#00C46A" strokeWidth="2.5" fill="#00C46A" className="arrow-left" />
            <g filter="url(#glow-filter-api)" opacity="0.7">
                <path d="M26 26 L38 32 L26 38 Z" stroke="#00C46A" strokeWidth="2.5" fill="#00C46A" className="arrow-right" />
                <path d="M38 26 L26 32 L38 38 Z" stroke="#00C46A" strokeWidth="2.5" fill="#00C46A" className="arrow-left" />
            </g>
        </g>
    </svg>
);


const APIsWebhooks = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
        <rect width="256" height="256" fill="none"></rect>
        <polyline points="88 160 40 128 88 96" fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
        <polyline points="168 160 216 128 168 96" fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
        <line x1="144" y1="80" x2="112" y2="176" fill="none" stroke="#64748b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
    </svg>
);


const IconSend = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const IconPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const IconMail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const IconGmail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 5.5H2V18h20V5.5zM20 7.5L12 13L4 7.5V7h16v.5z" />
    </svg>
);

const IconEmailApp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const IconWarning = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);


export const Icons = {
  IconServiceWorkflow,
  IconServiceAI,
  IconServiceProductivity,
  IconServiceAPI,
  IconServiceCRMAndMarketing,
  APIsWebhooks,
  IconSend,
  IconPhone,
  IconMail,
  IconGmail,
  IconEmailApp,
  IconWarning,
};
