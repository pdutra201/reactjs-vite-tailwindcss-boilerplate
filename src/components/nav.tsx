import React, { useState, useEffect } from "react";

const links = ["About", "Projects", "Skills", "Experience", "Contact"];

const Nav: React.FC = () => {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);

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
    document
      .getElementById(link.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });

    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 relative z-[999] bg-primary-white border-b-4 border-x-2 border-black rounded-b-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] px-5 py-4 md:px-10 md:py-8">
      <div className="flex justify-between items-center">
        <button
          onClick={() => scrollToSection("Home")}
          className="font-DelaGothicOne text-xl md:text-2xl"
        >
          Full Stack Web Developer
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border-4 border-black rounded-xl bg-yellow-400 px-4 py-2 font-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
        >
          {menuOpen ? "X" : "Menu"}
        </button>

        <ul className="hidden md:flex font-Archivo font-semibold text-xl gap-10">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollToSection(link)}
              className={`cursor-pointer relative text-xl w-fit block
                after:block after:absolute after:h-[3px] after:bg-accent-orange after:w-full
                after:origin-center after:transition-all after:duration-500 after:ease-in-out
                transition-colors duration-500 ease-in-out
                ${
                  active === link
                    ? "text-purple-dark after:scale-x-100 after:opacity-100"
                    : "text-black after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-100"
                }`}
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
  <div className="md:hidden absolute top-full left-0 right-0 mt-3 mx-4 bg-primary-white border-4 border-black rounded-2xl p-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] z-[1000]">
    <ul className="flex flex-col gap-4 font-Archivo font-black text-xl">
      {links.map((link) => (
        <li
          key={link}
          onClick={() => scrollToSection(link)}
          className={`cursor-pointer border-4 border-black rounded-xl px-4 py-3 shadow-[4px_4px_0px_rgba(0,0,0,1)]
            ${
              active === link
                ? "bg-purple-300 text-purple-dark"
                : "bg-yellow-400 text-black"
            }`}
        >
          {link}
        </li>
      ))}
    </ul>
  </div>
)}
    </nav>
  );
};

export default Nav;