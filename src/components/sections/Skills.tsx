import reactLogo from '../../../public/reactLogo.svg'
import angularLogo from '../../../public/Angular.svg'
import javascriptLogo from '../../../public/javascript.svg'
import pythonLogo from '../../../public/python.svg'
import typescriptLogo from '../../../public/typescript.svg'
import git from '../../../public/git.svg'
import php from '../../../public/php.svg'
import sql from '../../../public/sql.svg'
import tailwind from '../../../public/tailwind.svg'
import aws from '../../../public/aws.svg'

const Skills: React.FC = () => {
  return (
    <section id="skills" className="bg-primary-white flex flex-col-reverse xl:flex-row items-center py-32 px-12 -mx-[16.7%] relative border-t-8 border-black">
      <div>
        <h1 className="absolute md:w-64 md:h-20 bg-primary-white border-x-8 border-t-8 border-black rounded-t-2xl z-40 xl:-top-[5rem] md:-top-[80px] -top-[52px]  left-2 md:left-8 font-DelaGothicOne md:text-4xl text-xl flex justify-evenly items-center py-2">Skills</h1>
      </div>
      <div className="grid grid-cols-5 gap-6 justify-between items-center w-full px-12">
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={reactLogo} alt="React Logo"></img>
            <p className='text-bold text-2xl'>React</p>
          </div>
          <div className="bg-yellow-400 items-center border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={angularLogo} alt="Angular Logo"></img> 
            <p className='text-bold text-2xl'>Angular</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={javascriptLogo} alt="JavaScript Logo"></img>
            <p className='text-bold text-2xl'>JavaScript</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={pythonLogo} alt="Python Logo"></img>
            <p className='text-bold text-2xl'>Python</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={typescriptLogo} alt="TypeScript Logo"></img>
            <p className='text-bold text-2xl'>TypeScript</p>
          
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={git} alt="Git Logo"></img>
            <p className='text-bold text-2xl'>Git</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={php} alt="PHP Logo"></img>
            <p className='text-bold text-2xl'>PHP</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={sql} alt="SQL Logo"></img>
            <p className='text-bold text-2xl'>SQL</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={tailwind} alt="Tailwind CSS Logo"></img>
            <p className='text-bold text-2xl'>Tailwind CSS</p>
          </div>
          <div className="bg-yellow-400 border-black border-8 rounded-2xl w-[200px] h-[200px] flex flex-col  items-center col-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] font-Archivo font-semibold text-md ">
            <img className='h-24 w-24 m-3' src={aws} alt="AWS Logo"></img>
            <p className='text-bold text-2xl'>AWS</p>
          </div>
          

      </div>
    </section>
  )
}

export default Skills