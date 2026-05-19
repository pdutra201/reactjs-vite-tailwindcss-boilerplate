const skills = [
  { name: "React", icon: "/reactLogo.svg" },
  { name: "Angular", icon: "/Angular.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "PHP", icon: "/php.svg" },
  { name: "SQL", icon: "/sql.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.svg" },
  { name: "AWS", icon: "/aws.svg" },
];


const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-primary-white flex flex-col-reverse xl:flex-row items-center py-32 px-12 -mx-[16.7%] relative border-t-8 border-black">
      <div>
        <h1 className="absolute md:w-64 md:h-20 bg-primary-white border-x-8 border-t-8 border-black rounded-t-2xl z-40 xl:-top-[5rem] md:-top-[80px] -top-[52px]  left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-evenly items-center py-2">Skills</h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-yellow-400 border-black border-8 rounded-2xl 
            w-full aspect-square flex flex-col items-center justify-center 
            shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold"
          >
            <img
              className="h-16 w-16 md:h-24 md:w-24 object-contain mb-4"
              src={skill.icon}
              alt={`${skill.name} Logo`}
            />

            <p className="font-bold text-lg md:text-2xl text-center px-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills