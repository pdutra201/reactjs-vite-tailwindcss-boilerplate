import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={`md:py-10 md:px-10 flex justify-between items-center md:sticky top-0 z-[999] bg-yellow-400 border-t-4 border-x-2 border-black rounded-t-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] shadow-opacity-50' : 'bg-transparent'`}>
      <div className="w-full md:flex justify-between hidden">
        </div>
    </footer>
  );
};

export default Footer;