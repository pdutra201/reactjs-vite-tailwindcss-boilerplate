import React, { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'];

const Nav: React.FC = () => {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(link);
        },
        { threshold: 0.5 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (link: string) => {
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`md:py-10 md:px-10 flex justify-between items-center md:sticky top-0 z-[999] bg-primary-white border-b-4 border-x-2 border-black rounded-b-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] shadow-opacity-50' : 'bg-transparent'`}>
      <div className="w-full md:flex justify-between hidden">
        <div className="w-full lg:w-2/3">
          <ul className='font-Archivo font-semibold text-xl flex w-full justify-between'>
            {links.map((link) => (
              <li
                key={link}
                onClick={() => scrollToSection(link)}
                className={`cursor-pointer relative text-xl w-fit block 
                  after:block after:absolute after:h-[3px] after:bg-accent-orange after:w-full 
                  after:origin-center after:transition-all after:duration-500 after:ease-in-out
                  transition-colors duration-500 ease-in-out
                  ${active === link 
                    ? 'text-purple-dark after:scale-x-100 after:opacity-100' 
                    : 'text-black after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100'}`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;