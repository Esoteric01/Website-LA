import React from 'react';

// New, "Holographic Glyph" icon for Workflow Automation
const IconServiceWorkflow = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#45FFB0"/>
                <stop offset="100%" stopColor="#00C46A"/>
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
        </defs>
        <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <g stroke="url(#glow)">
                <path d="M22 16H42V28H22Z" filter="url(#blur)" opacity="0.6"/>
                <path d="M22 16H42V28H22Z" />
                <path d="M32 28V36" filter="url(#blur)" opacity="0.6"/>
                <path d="M32 28V36" />
                <path d="M14 36H50V48H14Z" filter="url(#blur)" opacity="0.6"/>
                <path d="M14 36H50V48H14Z" />
            </g>
        </g>
    </svg>
);

// New, "Holographic Glyph" icon for AI Integration
const IconServiceAI = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#45FFB0"/>
                <stop offset="100%" stopColor="#00C46A"/>
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
        </defs>
        <g strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
             <g stroke="url(#glow)">
                <path d="M52 32C52 42.464 43.2987 51 32 51C28.1091 51 24.522 49.8273 21.6 47.8L12 52L16.2 42.4C13.1727 39.478 12 35.8909 12 32C12 21.536 20.7013 13 32 13C43.2987 13 52 21.536 52 32Z" filter="url(#blur)" opacity="0.6"/>
                <path d="M52 32C52 42.464 43.2987 51 32 51C28.1091 51 24.522 49.8273 21.6 47.8L12 52L16.2 42.4C13.1727 39.478 12 35.8909 12 32C12 21.536 20.7013 13 32 13C43.2987 13 52 21.536 52 32Z" />
                <g filter="url(#blur)" opacity="0.8">
                    <path d="M26 32H38" strokeWidth="5"/>
                    <path d="M32 26V38" strokeWidth="5"/>
                </g>
             </g>
             <g stroke="#f0f0f0" strokeWidth="2.5">
                <path d="M26 32H38" />
                <path d="M32 26V38" />
             </g>
        </g>
    </svg>
);

// New, "Holographic Glyph" icon for CRM & Marketing Optimization
const IconServiceCRMAndMarketing = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#45FFB0"/>
                <stop offset="100%" stopColor="#00C46A"/>
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
        </defs>
        <g stroke="url(#glow)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <g filter="url(#blur)" opacity="0.6">
                 <circle cx="26" cy="24" r="8"/>
                 <path d="M40 50V46C40 41.5817 36.4183 38 32 38H20C15.5817 38 12 41.5817 12 46V50"/>
            </g>
            <circle cx="26" cy="24" r="8"/>
            <path d="M40 50V46C40 41.5817 36.4183 38 32 38H20C15.5817 38 12 41.5817 12 46V50"/>
            <g filter="url(#blur)" opacity="0.8">
                 <path d="M42 32L50 24L58 32" strokeWidth="4.5"/>
                 <path d="M50 24V44" strokeWidth="4.5"/>
            </g>
            <path d="M42 32L50 24L58 32" stroke="url(#glow)" strokeWidth="4.5"/>
            <path d="M50 24V44" stroke="url(#glow)" strokeWidth="4.5"/>
        </g>
    </svg>
);

// New, "Holographic Glyph" icon for Productivity Automation
const IconServiceProductivity = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#45FFB0"/>
                <stop offset="100%" stopColor="#00C46A"/>
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
        </defs>
        <g stroke="url(#glow)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <g filter="url(#blur)" opacity="0.6">
                <circle cx="32" cy="32" r="22"/>
                <path d="M32 20V32L40 36"/>
            </g>
            <circle cx="32" cy="32" r="22"/>
            <path d="M32 20V32L40 36"/>
            <g filter="url(#blur)" opacity="0.8">
                <path d="M46 18L40 30H52L46 42" strokeWidth="4.5"/>
            </g>
            <path d="M46 18L40 30H52L46 42" stroke="url(#glow)" strokeWidth="4.5"/>
        </g>
    </svg>
);

// New, "Holographic Glyph" icon for API Integrations
const IconServiceAPI = () => (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#45FFB0"/>
                <stop offset="100%" stopColor="#00C46A"/>
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
        </defs>
        <g stroke="url(#glow)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <g filter="url(#blur)" opacity="0.6">
                <path d="M24 16L8 32L24 48"/>
                <path d="M40 16L56 32L40 48"/>
            </g>
            <path d="M24 16L8 32L24 48"/>
            <path d="M40 16L56 32L40 48"/>
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
};