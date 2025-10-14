import React from 'react';
import { Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[80vh] w-[120%] max-w-[1000px]"
        style={{
            backgroundImage: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0, 196, 106, 0.1), transparent 80%)',
        }}
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & CTA */}
          <div className="lg:pr-8 animate-fade-in-up">
            <h2 className="text-5xl sm:text-6xl font-black font-display mb-4 text-text-main">
              Ready to build your automated future?
            </h2>
            <p className="max-w-2xl text-xl text-primary mb-8">
              Let's connect. I'm here to help you streamline operations, boost efficiency, and unlock your business's full potential.
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-bold font-display text-text-main mb-4">Other ways to connect</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-lg text-primary">
                            <div className="bg-surface p-3 rounded-lg border border-primary/50"><Icons.IconMail /></div>
                            <span>loizalmerino@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg text-primary">
                            <div className="bg-surface p-3 rounded-lg border border-primary/50"><Icons.IconPhone /></div>
                            <span>09219173684</span>
                        </div>
                    </div>
                </div>
                 <div>
                    <h3 className="text-2xl font-bold font-display text-text-main mb-4">Find me on</h3>
                    <div className="flex flex-wrap gap-4">
                         <a 
                            href="https://www.linkedin.com/in/la-almerino-2873aa155/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
                        >
                            <span>LinkedIn</span>
                        </a>
                        <a 
                            href="https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
                        >
                            <span>Upwork</span>
                        </a>
                        <a 
                            href="https://www.onlinejobs.ph/jobseekers/info/1993414" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
                        >
                            <span>OnlineJobs.ph</span>
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="bg-surface rounded-2xl p-8 md:p-10 border border-primary shadow-2xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-3xl font-bold font-display text-text-main mb-6">Send me a message</h3>
            <form
              action="mailto:loizalmerino@gmail.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-primary mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-background border-2 border-border rounded-lg p-3 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 cursor-hover-target"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-primary mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-background border-2 border-border rounded-lg p-3 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 cursor-hover-target"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-background border-2 border-border rounded-lg p-3 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition duration-200 cursor-hover-target"
                  placeholder="Tell me about your project or how I can help..."
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-background font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg shadow-lg transform active:scale-95 hover:-translate-y-1 cursor-hover-target"
                >
                  <Icons.IconSend />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;