import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 text-center">
        <h2 className="text-5xl sm:text-6xl font-black font-display text-center mb-12 text-text-main [text-shadow:0_0_10px_rgba(0,196,106,0.5)]">What My Clients Say</h2>
        <div className="max-w-3xl mx-auto bg-surface p-8 rounded-2xl border border-border shadow-sm">
            <svg className="mx-auto h-12 w-12 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="mt-4 text-xl text-text-secondary">
                Client testimonials are coming soon. Stay tuned for feedback on successful projects and collaborations!
            </p>
        </div>
    </section>
  );
};

export default Testimonials;