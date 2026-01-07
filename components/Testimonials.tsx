
import React, { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Loiz transformed our lead generation process. What used to take hours of manual data entry now happens in seconds, with 100% accuracy. Truly a game changer for our sales team.",
    author: "Sarah Johnson",
    role: "Marketing Director at GrowthFlow",
    avatar: "SJ"
  },
  {
    quote: "The AI chatbot integration Loiz built for us is incredibly smart. It handles 80% of our initial customer inquiries, allowing our support team to focus on complex issues. High ROI project!",
    author: "Michael Ramirez",
    role: "CEO of TechPulse",
    avatar: "MR"
  },
  {
    quote: "Working with Loiz was seamless. He took the time to understand our complex HubSpot requirements and built a custom integration that simply works. I can't recommend him enough.",
    author: "Emily Chen",
    role: "Operations Lead at CloudScale",
    avatar: "EC"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className={`text-center mb-16 ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl sm:text-6xl font-black font-display text-text-main mb-4 tracking-tighter">Client Stories</h2>
            <p className="max-w-3xl mx-auto text-2xl text-primary">Real results from successful automation partnerships.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
                <div 
                    key={index} 
                    className={`bg-surface p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 group ${isVisible ? 'motion-safe:animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 150}ms` }}
                >
                    <div>
                        <div className="mb-6">
                            <svg className="h-10 w-10 text-primary opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.1046 12.1216 17 11.017 17H10.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V15C4.017 16.1046 3.12157 17 2.017 17H1.017V21H5.017Z" />
                            </svg>
                        </div>
                        <p className="text-lg text-text-secondary italic mb-8 leading-relaxed">"{t.quote}"</p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-border pt-6">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-xl">
                            {t.avatar}
                        </div>
                        <div>
                            <p className="font-bold text-text-main">{t.author}</p>
                            <p className="text-sm text-text-secondary">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Testimonials;
