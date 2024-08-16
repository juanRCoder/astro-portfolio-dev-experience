import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaNodeJs, FaFigma, FaSass, FaDocker } from "react-icons/fa6";
import { SiAstro, SiJavascript, SiTypescript, SiPython, SiFlask, SiMysql, SiMongodb, SiExpress, SiAngular, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Habilidades() {

  return (
    <>
      <h1 className="text-left text-3xl font-thin my-5" data-aos="fade-right">Desarrollo Frontend</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div className="py-5 rounded-md p-2 flex flex-col items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex gap-4">
            <FaHtml5 className="text-6xl text-orange-500" />
            <FaCss3Alt className="text-6xl text-blue-500" />
          </div>
          <p className="text-xl">HTML & CSS</p>
        </div>
        <div className="py-5 rounded-md p-2 flex flex-col items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex gap-4">
            <SiJavascript className="text-6xl text-yellow-500" />
            <SiTypescript className="text-6xl text-blue-500" />
          </div>
          <p className="text-xl">TYPESCRIPT</p>
        </div>
        {[
          ['REACT', <FaReact className="text-6xl text-sky-500" />],
          ['ANGULAR', <SiAngular className="text-6xl text-red-500" />],
          ['SCSS', <FaSass className="text-6xl text-rose-500" />],
          ['TAILWINDCSS', <SiTailwindcss className="text-6xl text-blue-500" />],
          ['FIGMA', <FaFigma className="text-6xl text-white" />],
          ['NEXT', <RiNextjsFill className="text-6xl text-black" />],
          ['ASTRO', <SiAstro className="text-6xl text-orange-500" />],
        ].map(([title, tech], i) => (
          <div key={i} className="rounded-md py-5 p-2 flex flex-col items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="1000">
            {tech}
            <p className="text-xl">{title}</p>
          </div>
        ))}
      </section>
      <h1 className="text-left text-3xl font-thin my-5" data-aos="fade-right">Desarrollo Backend</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[
          ['NODE', <FaNodeJs className="text-6xl text-green-500" />],
          ['EXPRESS', <SiExpress className="text-6xl text-white" />],
          ['PYTHON', <SiPython className="text-6xl text-blue-500" />],
          ['FLASK', <SiFlask className="text-6xl text-white" />],
        ].map(([title, tech], i) => (
          <div key={i} className=" rounded-md py-5 p-2 flex flex-col items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="1000">
            {tech}
            <p className="text-xl">{title}</p>
          </div>
        ))}
      </section>
      <h1 className="text-left text-3xl font-thin my-5" data-aos="fade-right">Bases de Datos & Devops, entre otros</h1>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[
          ['MYSQL', <SiMysql className="text-6xl text-pink-200" />],
          ['MONGODB', <SiMongodb className="text-6xl text-green-500" />],
          ['DOCKER', <FaDocker className="text-6xl text-sky-500" />],
          ['GIT', <FaGitAlt className="text-6xl text-orange-500" />],
        ].map(([title, tech], i) => (
          <div key={i} className="rounded-md py-5 p-2 flex flex-col items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="1000">
            {tech}
            <p className="text-xl">{title}</p>
          </div>
        ))}
      </section>
    </>
  )
}
