import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 py-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Loiz Almerino. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;