import React from 'react';

const Footer: React.FC = () => {
  
  const navLinks = [
    { id: 'services', title: 'Services' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/la-almerino-2873aa155/',
      imageUrl: 'https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Footer%20Section%20Images/linkedin.webp?raw=true',
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share',
      imageUrl: 'https://raw.githubusercontent.com/Esoteric01/loizalmerino.com-assets/238f7d996b86a577ef74334fb5385d715e8bbe82/Footer%20Section%20Images/upwork.svg',
    },
    {
      name: 'OnlineJobs.ph',
      href: 'https://www.onlinejobs.ph/jobseekers/info/1993414',
      imageUrl: 'https://github.com/Esoteric01/loizalmerino.com-assets/blob/main/Footer%20Section%20Images/onlinejobsph.png?raw=true',
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer id="page-footer" className="border-t border-border">
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
             <div className="flex flex-col items-center md:items-start gap-y-3 text-text-secondary">
                {socialLinks.map(({ name, href, imageUrl }) => (
                    <a 
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit my ${name} profile`}
                        className="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-hover-target"
                    >
                        <img src={imageUrl} alt={`${name} logo`} className="h-5 w-5 object-contain" />
                        <p className="text-base font-normal text-text-main">{name}</p>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;