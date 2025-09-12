import React from 'react';

const FloatingLogo = () => {
  return (
    <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 left-8 z-40 transition-transform duration-300 hover:scale-105">
      <a href="/" aria-label="Back to homepage">
        <img
          src="/poo.jpg"
          alt="Poonguzhali Dental Care Logo"
          className="w-32 h-32 object-contain rounded-full shadow-lg bg-background/80 p-2"
        />
      </a>
    </div>
  );
};

export default FloatingLogo;