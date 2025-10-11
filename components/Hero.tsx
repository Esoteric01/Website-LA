import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  const contactInfo = [
    { icon: <Icons.Location />, text: 'Manila, Philippines' },
    { icon: <Icons.Phone />, text: '09219173684', href: 'tel:09219173684' },
    { icon: <Icons.Email />, text: 'loizalmerino@gmail.com', href: 'mailto:loizalmerino@gmail.com' },
  ];

  const socialLinks = [
    { icon: <Icons.LinkedIn />, text: 'LinkedIn', href: '#' },
    { icon: <Icons.Upwork />, text: 'Upwork', href: '#' },
    { icon: <Icons.OnlineJobs />, text: 'OnlineJobs.ph', href: '#' },
  ];
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2">Loiz Almerino</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">Workflow Automation Specialist</h2>
        
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-gray-600">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {item.icon}
              {item.href ? (
                 <a href={item.href} className="hover:text-orange-500 transition-colors">{item.text}</a>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-300">
              {link.icon}
              <span className="font-medium">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
      
      <div id="about" className="mt-12 max-w-4xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">Professional Summary</h3>
        <p className="text-lg leading-relaxed text-gray-700">
          Detail-oriented Workflow Automation Specialist with expertise in building no-code/low-code automation solutions using N8N, Make, and Zapier. Skilled in optimizing business processes, integrating applications, and creating AI-powered workflows to improve efficiency and reduce manual work. Strong background in CRM automation, lead management, and report generation.
        </p>
      </div>
    </section>
  );
};

export default Hero;