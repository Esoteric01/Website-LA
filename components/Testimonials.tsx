import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white rounded-xl shadow-sm">
        <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What My Clients Say</h2>
            <div className="max-w-3xl mx-auto mt-12 bg-gray-50 p-8 rounded-lg border border-dashed border-gray-300">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="mt-4 text-lg text-gray-600">
                    Client testimonials are coming soon. Stay tuned for feedback on successful projects and collaborations!
                </p>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
