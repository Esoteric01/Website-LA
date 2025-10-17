import React, { useRef, useState, useEffect } from 'react';
import { Icons } from '../constants';

interface ChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: string;
  body: string;
  recipientEmail: string;
}

const ChoiceModal: React.FC<ChoiceModalProps> = ({ isOpen, onClose, subject, body, recipientEmail }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  const handleEmailAppClick = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    handleClose();
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className={`bg-surface rounded-xl shadow-2xl w-full max-w-md transform border border-border p-8 text-center ${isClosing ? 'animate-fade-out-down' : 'animate-fade-in-up'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold font-display text-text-main mb-3">How would you like to send?</h3>
        <p className="text-text-secondary mb-8">Choose your preferred method to open the pre-filled email.</p>
        <div className="space-y-4">
          <button
            onClick={handleGmailClick}
            className="w-full flex items-center justify-center gap-3 bg-border hover:bg-border/80 text-text-main font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
          >
            <Icons.IconGmail />
            Open in Gmail (Browser)
          </button>
          <button
            onClick={handleEmailAppClick}
            className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"
          >
            <Icons.IconEmailApp />
            Open Email App (Desktop)
          </button>
        </div>
      </div>
    </div>
  );
};


const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  
  const initialFormData = {
    fullName: '',
    email: '',
    company: '',
    needs: [] as string[],
    otherNeed: '',
    problemGoal: '',
    timeline: '',
    discoveryDate: '',
    discoveryTime: '',
    anythingElse: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isChoiceModalOpen, setChoiceModalOpen] = useState(false);
  const [emailContent, setEmailContent] = useState({ subject: '', body: '' });


  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        },
        { threshold: 0.1 }
    );
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (glowRef.current && sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        const scrollY = window.innerHeight - top;
        const speed = 0.1;
        if (scrollY > 0) {
            glowRef.current.style.transform = `translate(-50%, -50%) translateY(${scrollY * speed}px)`;
        }
      }

      const screenHeight = window.innerHeight;
      if (leftColRef.current) {
          const { top, height } = leftColRef.current.getBoundingClientRect();
          if (top < screenHeight && top > -height) {
              const speed = -0.08;
              const translateY = (screenHeight / 2 - top) * speed;
              leftColRef.current.style.transform = `translateY(${translateY}px)`;
          }
      }
      if (rightColRef.current) {
          const { top, height } = rightColRef.current.getBoundingClientRect();
          if (top < screenHeight && top > -height) {
              const speed = 0.04;
              const translateY = (screenHeight / 2 - top) * speed;
              rightColRef.current.style.transform = `translateY(${translateY}px)`;
          }
      }
    };

    const onScroll = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
        if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
        }
        window.removeEventListener('scroll', onScroll);
    };
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newNeeds = checked
        ? [...prev.needs, value]
        : prev.needs.filter(need => need !== value);
      return { ...prev, needs: newNeeds };
    });
     if (errors.needs) {
      setErrors(prev => ({ ...prev, needs: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (formData.needs.length === 0 && !formData.otherNeed.trim()) {
      newErrors.needs = 'Please select at least one service.';
    }
    if (!formData.problemGoal.trim()) newErrors.problemGoal = 'Please describe your problem or goal.';
    if (!formData.timeline) newErrors.timeline = 'Please select a project timeline.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setFormStatus('submitting');
    
    try {
      const subject = `Project Inquiry from ${formData.fullName}`;
      
      const needsHelpWith = [
        ...formData.needs,
        formData.otherNeed ? `Other: ${formData.otherNeed}` : ''
      ].filter(Boolean).join(', ');
      
      const discoveryDateTime = `${formData.discoveryDate} ${formData.discoveryTime}`.trim();

      const emailBody = `A new inquiry has been submitted through your portfolio contact form.

--- DETAILS ---

Full Name:
${formData.fullName}

Email Address:
${formData.email}

Company / Organization:
${formData.company || 'Not provided'}

Needs Help With:
${needsHelpWith}

Problem or Goal:
${formData.problemGoal}

Project Timeline:
${formData.timeline}

Requested Discovery Call Time:
${discoveryDateTime || 'Not specified'}

Anything Else to Share:
${formData.anythingElse || 'None'}

--- END ---
      `;

      setEmailContent({ subject, body: emailBody.trim() });
      setChoiceModalOpen(true);
      setFormStatus('success');
      
    } catch (error) {
      console.error('Error preparing for email:', error);
      setFormStatus('error');
    }
  };
  
  const needsOptions = [
    "Workflow Automation (Zapier, Make, n8n)",
    "AI Chatbot Integration (ChatGPT, Gemini, Copilot)",
    "CRM Setup / Optimization (HubSpot, Pipedrive)",
  ];

  const timelineOptions = [
      "ASAP",
      "Within 2 weeks",
      "Within a month",
      "Just exploring for now",
  ];

  return (
    <>
    <ChoiceModal
        isOpen={isChoiceModalOpen}
        onClose={() => setChoiceModalOpen(false)}
        subject={emailContent.subject}
        body={emailContent.body}
        recipientEmail="loizalmerino@gmail.com"
      />
    <section ref={sectionRef} id="contact" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[80vh] w-[120%] max-w-[1000px]"
        style={{
            backgroundImage: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(0, 196, 106, 0.1), transparent 80%)',
        }}
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div ref={leftColRef} style={{ willChange: 'transform' }} className={`lg:pr-8 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-center lg:text-left text-5xl sm:text-6xl font-black font-display mb-4 text-text-main tracking-tighter">
              Ready to build your automated future?
            </h2>
            <p className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left text-xl text-primary mb-8">
              Let's connect. I'm here to help you streamline operations, boost efficiency, and unlock your business's full potential.
            </p>

            <div className="space-y-6">
                <div>
                    <h3 className="text-center lg:text-left text-3xl font-bold font-display text-text-main mb-4 leading-snug">Other ways to connect</h3>
                    <div className="space-y-4">
                        <a href="mailto:loizalmerino@gmail.com" className="flex items-center justify-center lg:justify-start gap-4 text-lg text-primary cursor-hover-target group">
                            <div className="bg-surface p-3 rounded-lg border border-primary/50"><Icons.IconMail /></div>
                            <span className="group-hover:underline">loizalmerino@gmail.com</span>
                        </a>
                        <a href="tel:+639219173684" className="flex items-center justify-center lg:justify-start gap-4 text-lg text-primary cursor-hover-target group">
                            <div className="bg-surface p-3 rounded-lg border border-primary/50"><Icons.IconPhone /></div>
                            <span className="group-hover:underline">09219173684</span>
                        </a>
                    </div>
                </div>
                 <div>
                    <h3 className="text-center lg:text-left text-3xl font-bold font-display text-text-main mb-4 leading-snug">Find me on</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                         <a href="https://www.linkedin.com/in/la-almerino-2873aa155/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"><span>LinkedIn</span></a>
                        <a href="https://www.upwork.com/freelancers/~01dfae3bcba7fd3a41?mp_source=share" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"><span>Upwork</span></a>
                        <a href="https://www.onlinejobs.ph/jobseekers/info/1993414" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target"><span>OnlineJobs.ph</span></a>
                    </div>
                </div>
            </div>
          </div>

          <div ref={rightColRef} className={`bg-surface border border-border rounded-2xl p-6 md:p-8 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', willChange: 'transform' }}>
             <h3 className="text-3xl font-bold font-display text-text-main mb-2">Share Your Requirements</h3>
             <p className="text-text-secondary mb-6">Tell me about your project, and I’ll reach out to discuss the next steps with you.</p>

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition" />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1">Company / Organization</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition" />
                </div>
                
                <fieldset>
                    <legend className="block text-sm font-medium text-text-secondary mb-2">What do you need help with? *</legend>
                    <div className="space-y-2">
                        {needsOptions.map(option => (
                            <div key={option} className="flex items-center">
                                <input id={option} name="needs" type="checkbox" value={option} checked={formData.needs.includes(option)} onChange={handleCheckboxChange} className="h-4 w-4 rounded border-border text-primary focus:ring-primary bg-background cursor-pointer" />
                                <label htmlFor={option} className="ml-3 text-sm text-text-main cursor-pointer">{option}</label>
                            </div>
                        ))}
                        <div className="flex items-center">
                            <input id="other" type="checkbox" checked={formData.otherNeed !== '' || formData.needs.includes('Other')} onChange={(e) => { if (!e.target.checked) setFormData(p => ({...p, otherNeed: ''})) }} className="h-4 w-4 rounded border-border text-primary focus:ring-primary bg-background cursor-pointer"/>
                            <label htmlFor="other" className="ml-3 text-sm text-text-main mr-2 cursor-pointer">Other:</label>
                            <input type="text" name="otherNeed" value={formData.otherNeed} onChange={handleInputChange} className="flex-1 bg-background border-b border-border text-text-main focus:ring-0 focus:border-primary transition text-sm p-1" />
                        </div>
                    </div>
                    {errors.needs && <p className="text-red-500 text-sm mt-1">{errors.needs}</p>}
                </fieldset>

                <div>
                  <label htmlFor="problemGoal" className="block text-sm font-medium text-text-secondary mb-1">Describe your problem or goal *</label>
                  <textarea id="problemGoal" name="problemGoal" rows={4} value={formData.problemGoal} onChange={handleInputChange} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition" placeholder="Example: “I want to automate lead transfer from Facebook to Google Sheets to save time.”"></textarea>
                  {errors.problemGoal && <p className="text-red-500 text-sm mt-1">{errors.problemGoal}</p>}
                </div>

                <fieldset>
                    <legend className="block text-sm font-medium text-text-secondary mb-2">Project Timeline *</legend>
                    <div className="grid grid-cols-2 gap-2">
                        {timelineOptions.map(option => (
                             <div key={option} className="flex items-center">
                                <input id={option} name="timeline" type="radio" value={option} checked={formData.timeline === option} onChange={handleInputChange} required className="h-4 w-4 border-border text-primary focus:ring-primary bg-background cursor-pointer" />
                                <label htmlFor={option} className="ml-3 text-sm text-text-main cursor-pointer">{option}</label>
                            </div>
                        ))}
                    </div>
                    {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
                </fieldset>
                
                 <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">When would you like to schedule a quick discovery call?</label>
                  <div className="flex gap-4">
                    <input type="date" name="discoveryDate" value={formData.discoveryDate} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition" />
                    <input type="time" name="discoveryTime" value={formData.discoveryTime} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition" />
                  </div>
                </div>

                <div>
                  <label htmlFor="anythingElse" className="block text-sm font-medium text-text-secondary mb-1">Anything else you’d like to share?</label>
                  <textarea id="anythingElse" name="anythingElse" rows={3} value={formData.anythingElse} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main focus:ring-2 focus:ring-primary focus:border-primary transition"></textarea>
                </div>

                <div>
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target disabled:opacity-50 disabled:cursor-not-allowed">
                    {formStatus === 'submitting' ? 'Preparing...' : 'Send Inquiry'}
                  </button>
                </div>
              </div>
            </form>
             {formStatus === 'success' && !isChoiceModalOpen && <p className="mt-4 text-center text-primary bg-primary/10 p-3 rounded-md">✅ Thank you! Your email has been prepared.</p>}
             {formStatus === 'error' && <p className="mt-4 text-center text-red-500 bg-red-500/10 p-3 rounded-md">❌ Error! Could not prepare the email. Please try again or contact me directly.</p>}
            <p className="text-xs text-text-secondary text-center mt-6">📩 Clicking "Send Inquiry" will open your email application. I’ll reach out within 24–48 hours to follow up.</p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;