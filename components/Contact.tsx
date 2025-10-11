import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
        I'm currently available for freelance projects and new opportunities. Feel free to reach out to discuss how I can help automate your business processes.
      </p>
      <a 
        href="mailto:loizalmerino@gmail.com"
        className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-all duration-300 text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform active:scale-95 hover:-translate-y-1"
      >
        Email Me
      </a>
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Check Out My Profiles</h3>
        <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Upwork Profile</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">OnlineJobs.ph Profile</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;