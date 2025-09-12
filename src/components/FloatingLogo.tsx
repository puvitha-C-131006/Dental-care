import React from 'react';

const FloatingLogo = () => {
  return (
    <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-40 transition-transform duration-300 hover:scale-105">
      <a href="/" aria-label="Back to homepage">
        <img
          src="/poo.jpg"
          alt="Poonguzhali Dental Care Logo"
          className="w-24 h-24 lg:w-32 lg:h-32 object-contain rounded-full shadow-lg bg-background/80 p-2"
        />
      </a>
    </div>
  );
};

export default FloatingLogo;