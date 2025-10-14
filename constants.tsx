import React from 'react';

const Location = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Email = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Globe = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
  );

const LinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const Upwork = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.46.021a6.365 6.365 0 00-4.634 2.112c-1.353 1.43-2.035 3.39-2.013 5.372v.226c.036 2.019.82 3.86 2.062 5.397 1.348 1.63 3.167 2.493 5.337 2.493 2.134 0 3.905-.835 5.286-2.423 1.29-1.488 2.022-3.415 1.96-5.411v-.218c.032-2.045-.69-4.04-2.012-5.454C21.365.843 19.57.02 17.46.02zm-.009 13.561c-1.31 0-2.372-.644-3.033-1.855-.65-1.2-1.026-2.738-1.04-4.223v-.194c-.01-1.465.34-2.946 1.04-4.148.653-1.198 1.713-1.84 3.034-1.84 1.339 0 2.413.65 3.09 1.864.71 1.258 1.056 2.766 1.03 4.19v.194c.025 1.451-.318 2.922-1.03 4.18-.68 1.213-1.75 1.832-3.09 1.832zm-7.6-5.834h-2.3v5.6h-2.14v-5.6H3.2V5.98h2.24V3.53c0-1.13.31-2.01 1.01-2.6.66-.55 1.6-.82 2.72-.82.35 0 .68.03.95.06v1.94c-.1-.02-.27-.04-.48-.04-.54 0-1.01.12-1.3.43-.32.3-.46.8-.46 1.52v.94h2.24l-.16 1.77z"/>
    </svg>
);

const OnlineJobs = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12.5 13.09V8h-1v5.5l4.25 2.5.75-1.23-3.5-2.08z"/>
    </svg>
);

const ZapierV2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path fill="#FF4A00" d="M128 0l128 85.333v85.333L128 256 0 170.667V85.333L128 0z"></path>
    <path fill="#fff" d="M181.333 138.667l-53.333-21.334-53.333 21.334-26.667-10.667 80-32 80 32-26.667 10.667zM181.333 170.667l-53.333-21.334-53.333 21.334-26.667-10.667 80-32 80 32-26.667 10.667z"></path>
  </svg>
);

const MakeV2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M128 24a104 104 0 10104 104A104.1 104.1 0 00128 24zm-40 152V80l40 40zm80 0l-40-40 40-40z" fill="#A455FF"></path>
  </svg>
);

const N8NV2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M103.2 86.8a28.4 28.4 0 11-40.2 0 28.4 28.4 0 0140.2 0zm-14 62.4a28.4 28.4 0 11-40.2 0 28.4 28.4 0 0140.2 0z" fill="#FF479A"></path>
    <path d="M192.8 86.8a28.4 28.4 0 11-40.2 0 28.4 28.4 0 0140.2 0zm-14 62.4a28.4 28.4 0 11-40.2 0 28.4 28.4 0 0140.2 0z" fill="#FF479A"></path>
    <path d="M141.6 117.2c-4 0-7.8-1.6-10.6-4.4l-16.8-16.8a15 15 0 010-21.2 15 15 0 0121.2 0l16.8 16.8a15 15 0 010 21.2 15 15 0 01-10.6 4.4z" fill="#FF479A"></path>
  </svg>
);

const GoHighLevel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <circle cx="128" cy="128" r="128" fill="#4B66EA"></circle>
    <path d="M141 190.5V102h18.5l-32.5-44-32.5 44H113v88.5h28z" fill="#fff"></path>
    <path d="M141 190.5V102h18.5l-32.5-44-32.5 44H113v88.5h28z" fill="#fff"></path>
  </svg>
);

const GoogleWorkspace = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M128 24l104 104L128 232 24 128z" fill="#4285F4"></path>
    <path d="M208 56v144H56" fill="#34A853"></path>
    <path d="M128 24l-72 72v72l72 72 72-72V96z" fill="#FFBC00"></path>
    <path d="M128 24v208l72-72V96z" fill="#EA4335"></path>
    <path d="M128 128l-48-48h96z" fill="#fff"></path>
  </svg>
);

const Airtable = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M216 40H40a8 8 0 00-8 8v160a8 8 0 008 8h176a8 8 0 008-8V48a8 8 0 00-8-8z" fill="#FEC22F"></path>
    <path d="M128 40v176h88a8 8 0 008-8V48a8 8 0 00-8-8z" fill="#F3A70D"></path>
    <path d="M40 96h176v64H40z" fill="#44A1FF"></path>
    <path d="M128 96v64h88v-64z" fill="#2E7AD5"></path>
  </svg>
);

const Slack = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M80 40a40 40 0 100 80h40V80a40 40 0 10-40-40z" fill="#36C5F0"></path>
    <path d="M216 80a40 40 0 10-80 0v40h40a40 40 0 1040-40z" fill="#2EB67D"></path>
    <path d="M176 216a40 40 0 100-80h-40v40a40 40 0 1040 40z" fill="#ECB22E"></path>
    <path d="M40 176a40 40 0 1080 0v-40H80a40 40 0 10-40 40z" fill="#E01E5A"></path>
  </svg>
);

const HubSpot = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M128 24a104 104 0 10104 104A104.1 104.1 0 00128 24zm45.3 149.3L128 152l-45.3 21.3-21.3-45.3L82.7 128l-21.3-45.3 45.3-21.3L128 104l45.3-21.3 21.3 45.3-21.3 45.3z" fill="#FF7A59"></path>
  </svg>
);

const IconServiceWorkflow = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M15 7h5v5h-5V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M4 12h5v5H4v-5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 12V9a2 2 0 0 1 2-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IconServiceAI = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IconServiceCRM = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IconServiceData = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M19.34 14.66a8.88 8.88 0 0 1-2.28 2.28l-.72.72a1.5 1.5 0 0 0-.43 1.06v.98m-1.39 1.39a8.88 8.88 0 0 1-2.28 2.28l-.72.72a1.5 1.5 0 0 1-1.06.43h-.98m-1.39-1.39a8.88 8.88 0 0 1-2.28-2.28l-.72-.72a1.5 1.5 0 0 0-1.06-.43h-.98m1.39-1.39a8.88 8.88 0 0 1-2.28-2.28l-.72-.72a1.5 1.5 0 0 1-.43-1.06v-.98m1.39-1.39a8.88 8.88 0 0 1 2.28-2.28l.72-.72a1.5 1.5 0 0 1 1.06-.43h.98m1.39 1.39a8.88 8.88 0 0 1 2.28 2.28l.72.72a1.5 1.5 0 0 0 1.06.43h.98m-1.39 1.39a8.88 8.88 0 0 1 2.28 2.28l.72.72a1.5 1.5 0 0 1 .43 1.06v.98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IconServiceAPI = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IconServiceWordPress = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10v0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

const IconServiceCRMAndMarketing = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 8 20 11 23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="20" y1="5" x2="20" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ChatGPT = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M165.2,49.3l-44.5,25.7L76.3,49.3,31.8,75,76.3,100.7l44.5-25.7,44.4,25.7,44.5-25.7ZM31.8,181,76.3,155.3l44.5,25.7,44.4-25.7,44.5,25.7-44.5,25.7-44.4-25.7L76.3,206.7ZM210.1,128l-44.4-25.7-44.5,25.7-44.4-25.7L32.2,128l44.1,25.7,44.5-25.7,44.5,25.7Z" fill="#10A37F"></path>
  </svg>
);

const Gemini = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M128,24,150,86l62,22-44,44,22,62-62-22L86,234l-22-62,44-44-62-22Z" fill="#8E44AD"></path>
  </svg>
);

const Copilot = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-80a40,40,0,1,1-40-40,16,16,0,0,1,32,0,24,24,0,1,0,24,24,16,16,0,0,1,0,32,40,40,0,0,1-16-32Z" fill="#6E5494"></path>
  </svg>
);

const Pipedrive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <path d="M224,128a96,96,0,0,1-92.4,95.9,8,8,0,0,1-7.2-8.8,96.3,96.3,0,0,1,23.1-65.7,40,40,0,0,0-55.7-55.7A96,96,0,1,1,224,128Z" fill="#29B36B"></path>
  </svg>
);

const Asana = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <circle cx="128" cy="128" r="32" fill="#F06A6A"></circle>
    <circle cx="64" cy="128" r="32" fill="#F06A6A"></circle>
    <circle cx="192" cy="128" r="32" fill="#F06A6A"></circle>
  </svg>
);

const ClickUp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
        <rect width="256" height="256" fill="none"></rect>
        <path d="M78.6,35.4,128,84.9,215.1,35.4a8,8,0,0,1,11.3,0l9.9,9.9a8,8,0,0,1,0,11.3L144.9,148,236.3,200a8,8,0,0,1,0,11.3l-9.9,9.9a8,8,0,0,1-11.3,0L128,171.1,40.9,220.6a8,8,0,0,1-11.3,0l-9.9-9.9a8,8,0,0,1,0-11.3L111.1,148,19.7,96.6a8,8,0,0,1,0-11.3l9.9-9.9a8,8,0,0,1,11.3,0L78.6,35.4Z" fill="#7B68EE"></path>
    </svg>
);

const Trello = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <rect x="32" y="32" width="192" height="192" rx="16" fill="#0079BF"></rect>
    <rect x="72" y="72" width="48" height="80" rx="8" fill="#FFFFFF"></rect>
    <rect x="136" y="72" width="48" height="112" rx="8" fill="#FFFFFF"></rect>
  </svg>
);

const Calendly = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-full w-full">
    <rect width="256" height="256" fill="none"></rect>
    <rect x="32" y="48" width="192" height="160" rx="16" fill="#006BFF"></rect>
    <circle cx="128" cy="128" r="48" fill="#FFFFFF"></circle>
    <path d="M128,88v48l33.9,19.6a8,8,0,0,0,8.1-13.9L136,123.2V88a8,8,0,0,0-16,0Z" fill="#006BFF"></path>
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

const IconCalendar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const IconSend = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
  Location,
  Phone,
  Email,
  Globe,
  LinkedIn,
  Upwork,
  OnlineJobs,
  ZapierV2,
  MakeV2,
  N8NV2,
  GoHighLevel,
  GoogleWorkspace,
  Airtable,
  Slack,
  HubSpot,
  IconServiceWorkflow,
  IconServiceAI,
  IconServiceCRM,
  IconServiceData,
  IconServiceAPI,
  IconServiceWordPress,
  IconServiceCRMAndMarketing,
  ChatGPT,
  Gemini,
  Copilot,
  Pipedrive,
  Asana,
  ClickUp,
  Trello,
  Calendly,
  APIsWebhooks,
  IconCalendar,
  IconSend,
  IconPhone,
  IconMail,
};