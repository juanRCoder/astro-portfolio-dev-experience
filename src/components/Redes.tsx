import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import CV from '../images/JuanRamirez_CV.pdf';
import '../styles/Redes.css';

export default function Redes() {
  return (
    <section className="-bottom-6 z-30 absolute w-full flex items-center">
      <span className="w-full h-2 bg-teal-400 rounded-full"></span>
      <div className="bg-transparent">
        <div className="flex gap-5 relative text-xl text-slate-200 px-5" data-aos="fade-up">
          <a className="name-red" target="_BLANK" href="https://github.com/juanRCoder" aria-label="Github"><FaGithub className="hover:scale-110 text-5xl" /></a>
          <a className="name-red1" target="_BLANK" href="https://www.linkedin.com/in/juan-ramirez-490b84271/" aria-label="LinkedIn"><FaLinkedinIn className="hover:scale-110 text-5xl" /></a>
          <a className="name-red2" target="_BLANK" href="https://wa.me/+51956402456" aria-label="WhatsApp"><FaWhatsapp className="hover:scale-110 text-5xl" /></a>
          <a className="name-red3" href={CV} aria-label="Descargar CV" download="JuanRamirez_CV.pdf">
            <GrDocumentUser className="hover:scale-110 text-5xl" />
          </a>
        </div>
      </div>
      <span className="w-full h-2 bg-teal-400 rounded-full"></span>
    </section>
  )
}
