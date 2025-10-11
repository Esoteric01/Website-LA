import React from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
        I’m open to freelance projects, collaborations, or long-term partnerships focused on automation, AI integration, or CRM system design.
      </p>
      <a 
        href="mailto:loizalmerino@gmail.com"
        className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform active:scale-95 hover:-translate-y-1"
      >
        Email Me
      </a>
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Find me on</h3>
        <div className="flex justify-center space-x-8">
            <a href="https://www.linkedin.com/in/la-almerino-2873aa155/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors" aria-label="LinkedIn">
              <Icons.LinkedIn />
            </a>
            <a href="https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors" aria-label="Upwork">
              <Icons.Upwork />
            </a>
            <a href="https://www.onlinejobs.ph/jobseekers/info/1993414" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors" aria-label="OnlineJobs.ph">
              <Icons.OnlineJobs />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;