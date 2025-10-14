import React from 'react';
import { Icons } from '../constants';

const Footer: React.FC = () => {
  
  const navLinks = [
    { id: 'services', title: 'Services' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
  ];

  const socialLinks = [
    { icon: <Icons.LinkedIn />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/la-almerino-2873aa155/' },
    { icon: <Icons.Upwork />, text: 'Upwork', href: 'https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share' },
    { icon: <Icons.OnlineJobs />, text: 'OnlineJobs.ph', href: 'https://www.onlinejobs.ph/jobseekers/info/1993414' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-border">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-8 text-text-secondary">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-3xl font-bold font-display text-text-main mb-2">Loiz Almerino</div>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg">
                {navLinks.map(link => (
                    <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-primary transition-colors cursor-hover-target">
                        {link.title}
                    </button>
                ))}
            </div>
             <div className="flex items-center justify-center space-x-6">
                {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors duration-300 cursor-hover-target" aria-label={link.text}>
                    {link.icon}
                </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;