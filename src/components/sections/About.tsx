import selfie from "../../assets/self.jpeg";

const traits = ["Creative", "Analytical", "Adaptive", "Curious"];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-yellow-400 pt-40 pb-28 md:pt-44 md:pb-32 px-4 md:px-12 mt-20 -mx-[16.7%] relative border-t-8 border-black overflow-visible"
    >
      <div
        className="absolute bg-yellow-400 border-x-8 border-t-8 border-black rounded-t-2xl z-[100]
        top-[-3.5rem] md:top-[-5rem] left-4 md:left-8
        w-[210px] h-[56px] md:w-64 md:h-20
        font-DelaGothicOne text-2xl md:text-4xl
        flex justify-center items-center"
      >
        <h1>About</h1>
      </div>

     
      <div
        className="w-full max-w-7xl mx-auto
        flex flex-col xl:flex-row
        items-center justify-center
        gap-6 xl:gap-16"
      >
      
        <div
          className="bg-purple-300 rounded-2xl border-8 border-black
          w-full max-w-[540px]
          shadow-[8px_8px_0px_rgba(0,0,0,1)]
          font-Archivo font-semibold
          text-base md:text-xl
          leading-relaxed
          p-6 md:p-8"
        >
          <p className="mb-8">
            I’m the kind of developer who blends creativity with logic —
            someone who enjoys building applications that not only work well,
            but feel intuitive and engaging to use.
          </p>

          <p className="mb-8">
            Whether I’m designing a front end, solving backend problems, or
            learning a new technology, I’m always looking for ways to improve,
            simplify, and build things more efficiently.
          </p>

          <p className="mb-8">
            Outside of coding, you’ll usually find me diving into personal
            projects, exploring new tech, listening to music, spending time
            with my wife, or getting lost in a great RPG.
          </p>

          <p>
            I’m Philip, and I’d love to build something great with you.
          </p>
        </div>

        <div
          className="w-full max-w-[540px] xl:max-w-[320px]
          grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1
          gap-6"
        >
          {traits.map((trait) => (
            <div
              key={trait}
              className="bg-orange-500 rounded-2xl border-8 border-black
              w-full h-[90px]
              flex items-center justify-center
              shadow-[8px_8px_0px_rgba(0,0,0,1)]"
            >
              <h2 className="text-black text-xl font-semibold font-Archivo text-center">
                {trait}
              </h2>
            </div>
          ))}
        </div>

        <div
          className="bg-[#efeee3] rounded-2xl border-8 border-black
          w-full max-w-[360px] aspect-square
          flex items-center justify-center
          shadow-[8px_8px_0px_rgba(0,0,0,1)]
          overflow-hidden"
        >
          <img
            src={selfie}
            alt="Philip Dutra"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;