import React from 'react';
import { Icons } from '../constants';

const Hero: React.FC = () => {
  const contactInfo = [
    { icon: <Icons.Location />, text: 'Manila, Philippines' },
    { icon: <Icons.Phone />, text: '+639219173684', href: 'tel:+639219173684' },
    { icon: <Icons.Email />, text: 'loizalmerino@gmail.com', href: 'mailto:loizalmerino@gmail.com' },
    { icon: <Icons.Globe />, text: 'loizalmerino.com', href: 'https://loizalmerino.com' },
  ];

  const socialLinks = [
    { icon: <Icons.LinkedIn />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/la-almerino-2873aa155/' },
    { icon: <Icons.Upwork />, text: 'Upwork', href: 'https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share' },
    { icon: <Icons.OnlineJobs />, text: 'OnlineJobs.ph', href: 'https://www.onlinejobs.ph/jobseekers/info/1993414' },
  ];
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2">Loiz Almerino</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">AI Workflow Automation Specialist</h2>
        
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-gray-600">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              {item.icon}
              {item.href ? (
                 <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">{item.text}</a>
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
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-orange-500 pl-4">About Me</h3>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          I’m an AI Workflow Automation Specialist focused on helping businesses streamline operations, reduce repetitive tasks, and boost efficiency through smart automation. Skilled in Zapier, n8n, and Make (Integromat), I design workflows that save time, reduce errors, and drive productivity.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Before specializing in automation, I built a strong background in network engineering and systems administration, working as a Network Engineer, Azure Systems Engineer, and MSP Team Leader. With experience in Cisco, Fortinet, Azure, Dell, and hybrid cloud deployments, I bring both technical depth and business understanding. This mix of IT infrastructure expertise and automation skills enables me to deliver solutions that are efficient, secure, scalable, and enterprise-ready.
        </p>
      </div>
    </section>
  );
};

export default Hero;