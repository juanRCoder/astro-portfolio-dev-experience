import { FaGitAlt, FaReact, FaNodeJs, FaDocker } from "react-icons/fa6";
import { SiAstro, SiJavascript, SiTypescript, SiMysql, SiMongodb, SiExpress, SiAngular, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Habilidades() {

  return (
    <>
      <section className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {[
          ['JAVASCRIPT', <SiJavascript className="text-6xl text-yellow-500" />],
          ['TYPESCRIPT', <SiTypescript className="text-6xl text-sky-500" />],
          ['REACT', <FaReact className="text-6xl text-sky-500" />],
          ['NEXT', <RiNextjsFill className="text-6xl text-black" />],
          ['ASTRO', <SiAstro className="text-6xl text-orange-500" />],
          ['TAILWINDCSS', <SiTailwindcss className="text-6xl text-blue-500" />],
          ['ANGULAR', <SiAngular className="text-6xl text-red-500" />],
          ['NODE', <FaNodeJs className="text-6xl text-green-500" />],
          ['EXPRESS', <SiExpress className="text-6xl text-white" />],
          ['MYSQL', <SiMysql className="text-6xl text-pink-200" />],
          ['MONGODB', <SiMongodb className="text-6xl text-green-500" />],
          ['DOCKER', <FaDocker className="text-6xl text-sky-500" />],
          ['GIT', <FaGitAlt className="text-6xl text-orange-500" />],
        ].map(([title, tech], i) => (
          <div key={i} className="py-3 flex flex-col items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="1000">
            {tech}
            <p className="text-xl">{title}</p>
          </div>
        ))}
      </section>
    </>
  )
}
