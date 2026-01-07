
import React, { useRef, useState, useEffect } from 'react';
import { Icons } from '../constants';

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
    timezone: '',
    anythingElse: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');


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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setFormStatus('submitting');
    
    const FORM_ENDPOINT = "https://formspree.io/f/mrbynjyp";

    const needsText = [
        ...formData.needs,
        ...(formData.otherNeed ? [`Other: ${formData.otherNeed}`] : [])
    ].map(n => `- ${n}`).join('\n');

    const discoveryText = (formData.discoveryDate || formData.discoveryTime || formData.timezone)
        ? `  Date: ${formData.discoveryDate || 'N/A'}\n  Time: ${formData.discoveryTime || 'N/A'}\n  Timezone: ${formData.timezone || 'N/A'}`
        : 'Not requested';

    const summary = `
New Inquiry Summary
--------------------------
Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}

Needs:
${needsText}

Problem/Goal:
${formData.problemGoal}

Timeline: ${formData.timeline}

Discovery Call:
${discoveryText}

Additional Info:
${formData.anythingElse || 'None'}
`;
    
    const dataToSend = {
      ...formData,
      _subject: `New Inquiry from ${formData.fullName}`,
      summary: summary,
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData(initialFormData);
      } else {
        console.error('Form submission failed:', await response.json());
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus('error');
    }
  };
  
  const needsOptions = [
    "Workflow Automation (Zapier, Make, n8n)",
    "AI Chatbot Integration (ChatGPT, Gemini)",
    "CRM & Lead Integrations (HubSpot, Facebook Forms)",
    "Productivity & Reporting Automation",
    "API & Custom Webhook Connections",
  ];

  const timelineOptions = [
      "ASAP",
      "Within 2 weeks",
      "Within a month",
      "Just exploring for now",
  ];

  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const totalMinutes = i * 30;
    const hours24 = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const period = hours24 >= 12 ? 'PM' : 'AM';
    let hours12 = hours24 % 12;
    if (hours12 === 0) {
      hours12 = 12;
    }
    return `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;
  });

  const timezones = [
    { value: 'Etc/GMT+12', label: '(UTC-12:00) International Date Line West' },
    { value: 'Pacific/Midway', label: '(UTC-11:00) Midway Island, Samoa' },
    { value: 'Pacific/Honolulu', label: '(UTC-10:00) Hawaii' },
    { value: 'America/Anchorage', label: '(UTC-09:00) Alaska' },
    { value: 'America/Los_Angeles', label: '(UTC-08:00) Pacific Time (US & Canada)' },
    { value: 'America/Tijuana', label: '(UTC-08:00) Tijuana, Baja California' },
    { value: 'America/Denver', label: '(UTC-07:00) Mountain Time (US & Canada)' },
    { value: 'America/Phoenix', label: '(UTC-07:00) Arizona' },
    { value: 'America/Chicago', label: '(UTC-06:00) Central Time (US & Canada)' },
    { value: 'America/Mexico_City', label: '(UTC-06:00) Mexico City' },
    { value: 'America/Regina', label: '(UTC-06:00) Saskatchewan' },
    { value: 'America/New_York', label: '(UTC-05:00) Eastern Time (US & Canada)' },
    { value: 'America/Bogota', label: '(UTC-05:00) Bogota, Lima, Quito' },
    { value: 'America/Halifax', label: '(UTC-04:00) Atlantic Time (Canada)' },
    { value: 'America/Caracas', label: '(UTC-04:00) Caracas' },
    { value: 'America/Santiago', label: '(UTC-04:00) Santiago' },
    { value: 'America/St_Johns', label: '(UTC-03:30) Newfoundland' },
    { value: 'America/Sao_Paulo', label: '(UTC-03:00) Brasilia' },
    { value: 'America/Argentina/Buenos_Aires', label: '(UTC-03:00) Buenos Aires' },
    { value: 'America/Godthab', label: '(UTC-03:00) Greenland' },
    { value: 'Atlantic/South_Georgia', label: '(UTC-02:00) Mid-Atlantic' },
    { value: 'Atlantic/Azores', label: '(UTC-01:00) Azores' },
    { value: 'Atlantic/Cape_Verde', label: '(UTC-01:00) Cape Verde Islands' },
    { value: 'Europe/London', label: '(UTC+00:00) London, Dublin, Lisbon' },
    { value: 'Africa/Casablanca', label: '(UTC+00:00) Casablanca, Monrovia' },
    { value: 'Europe/Berlin', label: '(UTC+01:00) Amsterdam, Berlin, Rome, Paris' },
    { value: 'Africa/Lagos', label: '(UTC+01:00) West Central Africa' },
    { value: 'Europe/Athens', label: '(UTC+02:00) Athens, Bucharest, Istanbul' },
    { value: 'Africa/Cairo', label: '(UTC+02:00) Cairo' },
    { value: 'Africa/Johannesburg', label: '(UTC+02:00) Harare, Pretoria' },
    { value: 'Europe/Moscow', label: '(UTC+03:00) Moscow, St. Petersburg' },
    { value: 'Asia/Riyadh', label: '(UTC+03:00) Kuwait, Riyadh' },
    { value: 'Africa/Nairobi', label: '(UTC+03:00) Nairobi' },
    { value: 'Asia/Tehran', label: '(UTC+03:30) Tehran' },
    { value: 'Asia/Dubai', label: '(UTC+04:00) Abu Dhabi, Muscat' },
    { value: 'Asia/Baku', label: '(UTC+04:00) Baku, Tbilisi, Yerevan' },
    { value: 'Asia/Kabul', label: '(UTC+04:30) Kabul' },
    { value: 'Asia/Karachi', label: '(UTC+05:00) Islamabad, Karachi, Tashkent' },
    { value: 'Asia/Kolkata', label: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi' },
    { value: 'Asia/Kathmandu', label: '(UTC+05:45) Kathmandu' },
    { value: 'Asia/Dhaka', label: '(UTC+06:00) Astana, Dhaka' },
    { value: 'Asia/Almaty', label: '(UTC+06:00) Almaty, Novosibirsk' },
    { value: 'Asia/Yangon', label: '(UTC+06:30) Yangon (Rangoon)' },
    { value: 'Asia/Bangkok', label: '(UTC+07:00) Bangkok, Hanoi, Jakarta' },
    { value: 'Asia/Krasnoyarsk', label: '(UTC+07:00) Krasnoyarsk' },
    { value: 'Asia/Shanghai', label: '(UTC+08:00) Beijing, Hong Kong, Singapore' },
    { value: 'Australia/Perth', label: '(UTC+08:00) Perth' },
    { value: 'Asia/Taipei', label: '(UTC+08:00) Taipei' },
    { value: 'Asia/Tokyo', label: '(UTC+09:00) Osaka, Sapporo, Tokyo' },
    { value: 'Asia/Seoul', label: '(UTC+09:00) Seoul' },
    { value: 'Australia/Darwin', label: '(UTC+09:30) Darwin' },
    { value: 'Australia/Brisbane', label: '(UTC+10:00) Brisbane' },
    { value: 'Australia/Sydney', label: '(UTC+10:00) Canberra, Melbourne, Sydney' },
    { value: 'Pacific/Guam', label: '(UTC+10:00) Guam, Port Moresby' },
    { value: 'Asia/Vladivostok', label: '(UTC+10:00) Vladivostok' },
    { value: 'Pacific/Noumea', label: '(UTC+11:00) Magadan, Solomon Islands, New Caledonia' },
    { value: 'Pacific/Auckland', label: '(UTC+12:00) Auckland, Wellington' },
    { value: 'Pacific/Fiji', label: '(UTC+12:00) Fiji, Kamchatka, Marshall Is.' },
    { value: 'Pacific/Tongatapu', label: "(UTC+13:00) Nuku'alofa" },
    { value: 'Pacific/Kiritimati', label: '(UTC+14:00) Kiritimati Island' }
  ];


  return (
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

          <div ref={rightColRef} className={`bg-surface border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(0,196,106,0.2)] motion-safe:hover:-translate-y-2 cursor-hover-target ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms', willChange: 'transform' }}>
             <h3 className="text-3xl font-bold font-display text-text-main mb-2">Share Your Requirements</h3>
             <p className="text-text-secondary mb-6">Tell me about your project, and I’ll reach out to discuss the next steps with you.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-text-secondary mb-1">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main placeholder:text-text-secondary/60 transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main placeholder:text-text-secondary/60 transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-1">Company / Organization</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main placeholder:text-text-secondary/60 transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                
                <fieldset>
                    <legend className="block text-sm font-medium text-text-secondary mb-2">What do you need help with? *</legend>
                    <div className="space-y-2">
                        {needsOptions.map(option => (
                            <div key={option} className="flex items-center p-2 -m-2 rounded-lg hover:bg-background transition-colors duration-200">
                                <input id={option} name="needs" type="checkbox" value={option} checked={formData.needs.includes(option)} onChange={handleCheckboxChange} className="h-4 w-4 rounded border-border bg-background cursor-pointer accent-primary focus:ring-primary focus:ring-offset-surface" />
                                <label htmlFor={option} className="ml-3 text-sm text-text-main cursor-pointer">{option}</label>
                            </div>
                        ))}
                        <div className="flex items-center p-2 -m-2 rounded-lg hover:bg-background transition-colors duration-200">
                            <input id="other" type="checkbox" checked={formData.otherNeed !== '' || formData.needs.includes('Other')} onChange={(e) => { if (!e.target.checked) setFormData(p => ({...p, otherNeed: ''})) }} className="h-4 w-4 rounded border-border bg-background cursor-pointer accent-primary focus:ring-primary focus:ring-offset-surface"/>
                            <label htmlFor="other" className="ml-3 text-sm text-text-main mr-2 cursor-pointer">Other:</label>
                            <input type="text" name="otherNeed" value={formData.otherNeed} onChange={handleInputChange} className="flex-1 bg-transparent border-b border-border text-text-main focus:ring-0 focus:border-primary hover:border-primary transition text-sm p-1" />
                        </div>
                    </div>
                    {errors.needs && <p className="text-red-500 text-sm mt-1">{errors.needs}</p>}
                </fieldset>

                <div>
                  <label htmlFor="problemGoal" className="block text-sm font-medium text-text-secondary mb-1">Describe your problem or goal *</label>
                  <textarea id="problemGoal" name="problemGoal" rows={4} value={formData.problemGoal} onChange={handleInputChange} required className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main placeholder:text-text-secondary/60 transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Example: “I want to automate lead transfer from Facebook to HubSpot to save time.”"></textarea>
                  {errors.problemGoal && <p className="text-red-500 text-sm mt-1">{errors.problemGoal}</p>}
                </div>

                <fieldset>
                    <legend className="block text-sm font-medium text-text-secondary mb-2">Project Timeline *</legend>
                    <div className="grid grid-cols-2 gap-2">
                        {timelineOptions.map(option => (
                             <div key={option} className="flex items-center p-2 -m-2 rounded-lg hover:bg-background transition-colors duration-200">
                                <input id={option} name="timeline" type="radio" value={option} checked={formData.timeline === option} onChange={handleInputChange} required className="h-4 w-4 border-border bg-background cursor-pointer accent-primary focus:ring-primary focus:ring-offset-surface" />
                                <label htmlFor={option} className="ml-3 text-sm text-text-main cursor-pointer">{option}</label>
                            </div>
                        ))}
                    </div>
                    {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
                </fieldset>
                
                 <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">When would you like to schedule a quick discovery call?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="date" name="discoveryDate" value={formData.discoveryDate} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" style={{ colorScheme: 'dark' }} />
                    <select name="discoveryTime" value={formData.discoveryTime} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" style={{ colorScheme: 'dark' }}>
                      <option value="" disabled>Select a time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                   <div className="mt-4">
                     <label htmlFor="timezone" className="sr-only">Timezone</label>
                     <select id="timezone" name="timezone" value={formData.timezone} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" style={{ colorScheme: 'dark' }}>
                       <option value="" disabled>Select your timezone</option>
                       {timezones.map(tz => (
                         <option key={tz.value} value={tz.value}>{tz.label}</option>
                       ))}
                     </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="anythingElse" className="block text-sm font-medium text-text-secondary mb-1">Anything else you’d like to share?</label>
                  <textarea id="anythingElse" name="anythingElse" rows={3} value={formData.anythingElse} onChange={handleInputChange} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-main placeholder:text-text-secondary/60 transition hover:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>

                <div>
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-primary hover:bg-primary/90 text-background font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 cursor-hover-target disabled:opacity-50 disabled:cursor-not-allowed">
                    {formStatus === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                  </button>
                </div>
              </div>
            </form>
             {formStatus === 'success' && <p className="mt-4 text-center text-primary bg-primary/10 p-3 rounded-md">✅ Thank you! Your message has been sent. I'll get back to you shortly.</p>}
             {formStatus === 'error' && <p className="mt-4 text-center text-red-500 bg-red-500/10 p-3 rounded-md">❌ Error! Something went wrong. Please try again or contact me directly.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
