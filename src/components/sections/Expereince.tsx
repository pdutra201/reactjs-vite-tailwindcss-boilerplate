const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Apple",
      date: "2026",
      description:
        "Built and modernized internal tools using Angular, TypeScript, PHP, MySQL, and Tailwind CSS. Focused on improving user experience, streamlining workflows, and creating cleaner, more maintainable UI.",
    },
    {
      title: "Full-Stack Developer",
      company: "mymedicalimages.com",
      date: "2026 - Present",
      description:
        "Assisted in the development and modernization of internal web applications and medical imaging workflows. Worked across both front-end and backend systems using Angular, PHP, MySQL, and Tailwind CSS while helping improve UI design, workflow efficiency, and overall application functionality.",
    },
    {
      title:"Technical Expert",
      company: "Apple",
      date: "2022 - Present",
      description:
        "Provided technical support and troubleshooting for Apple products, assisting customers with hardware and software issues. Delivered exceptional customer service while resolving complex technical problems and ensuring customer satisfaction.",
    }
  ];

  return (
    <section
      id="experience"
      className="bg-yellow-400 py-32 px-12 -mx-[16.7%] relative border-t-8 border-black"
    >
      <h1 className="absolute md:w-[350px] md:h-20 bg-yellow-400 border-x-8 border-t-8 border-black rounded-t-2xl z-40 xl:-top-[5rem] md:-top-[80px] -top-[52px] left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-center items-center py-2">
        Experience
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-stretch">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-[#efeee3] border-8 border-black rounded-2xl shadow-[10px_10px_0px_rgba(0,0,0,1)] p-8"
          >
            <div className="flex justify-between gap-6 items-start mb-6">
              <div>
                <h3 className="text-3xl font-black">{exp.title}</h3>
                <p className="text-xl font-bold text-purple-700">
                  {exp.company}
                </p>
              </div>

              <span className="bg-yellow-400 border-4 border-black px-4 py-2 rounded-xl font-black whitespace-nowrap">
                {exp.date}
              </span>
            </div>

            <p className="font-semibold leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;