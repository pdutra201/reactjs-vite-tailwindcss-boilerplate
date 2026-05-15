

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-end md:w-full w-[120%] pt-8 md:pt-16 border-8 border-black rounded-3xl bg-yellow-400 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col items-center justify-center mb-12">
          <h1 className="font-Archivo font-bold text-5xl md:text-7xl text-center">Hello</h1>
        <h3 className="font-Archivo font-semibold text-xl md:text-2xl text-center">my name is</h3>
        </div>
        
        <div className="bg-primary-white w-[95%] rounded-xl border-4  border-black flex flex-col items-center justify-center px-24 md:py-24 py-12 md:mb-7 mb-2 relative">
          <h2 className="font-DelaGothicOne lg:text-9xl md:text-7xl text-5xl w-fit text-center md:flex md:flex-col  ">Philip</h2>
          <h2 className="font-DelaGothicOne lg:text-9xl md:text-7xl text-5xl w-fit text-center md:flex md:flex-col  ">Dutra</h2>
          
        </div>
      </div>
        
    </section>
  )
}

export default Home