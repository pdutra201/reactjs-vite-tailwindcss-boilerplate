const Projects: React.FC = () => {
  const projects = [
    {
      title: "Budget App",
      description:
        "A full-stack budgeting application built to help users track spending, manage categories, and visualize transactions.",
      tech: ["React", "Flask", "SQL"],
      liveDemo: "#",
      github: "#",
      image: null,
    },
    {
      title: "Door Knocking App",
      description:
        "A sales-focused application designed to help teams manage leads, track visits, and organize door-to-door outreach.",
      tech: ["React", "Python", "Flask"],
      liveDemo: "#",
      github: "#",
      image: null,
    },
  ];

  return (
    <section
      id="projects"
      className="bg-purple-200 py-32 px-12 -mx-[16.7%] relative border-t-8 border-black"
    >
      <h1 className="absolute md:w-64 md:h-20 bg-purple-200 border-x-8 border-t-8 border-black rounded-t-2xl z-40 xl:-top-[5rem] md:-top-[80px] -top-[52px] left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-center items-center py-2">
        Projects
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-16 py-20">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-yellow-400 border-8 border-black rounded-2xl shadow-[10px_10px_0px_rgba(0,0,0,1)] p-6"
          >
            <div className="bg-[#efeee3] border-4 border-black rounded-xl h-48 mb-6 flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <p className="font-bold">Project Screenshot</p>
              )}
            </div>

            <h3 className="text-3xl font-black mb-3">{project.title}</h3>

            <p className="font-semibold mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="bg-purple-300 border-2 border-black px-3 py-1 rounded-full font-bold"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="bg-purple-300 border-4 border-black px-4 py-2 rounded-lg font-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 border-4 border-black px-4 py-2 rounded-lg font-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;