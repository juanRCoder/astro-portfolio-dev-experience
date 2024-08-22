import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contacto() {
  return (
    <>
      <div className="-top-6 z-30 absolute w-full flex items-center">
        <span className="w-full h-2 bg-teal-400 rounded-full"></span>
        <h1
          id="Contact"
          className="text-slate-200 text-left sm:text-center text-4xl sm:text-5xl font-bold px-5"
          data-aos="fade-up"
        >
          Contactame
        </h1>
        <span className="w-full h-2 bg-teal-400 rounded-full"></span>
      </div>
      <div className="mx-4 sm:mx-auto">
        <aside className="sm:grid-cols-2 max-w-2xl pt-8 pb-24 relative mx-auto top-6 grid items gap-4">
          <div className="outline outline-1 outline-white py-4 rounded-lg flex justify-center gap-4" data-aos="fade-down">
            <MdEmail className="text-3xl text-slate-200" />
            <a className="text-xl text-teal-400 underline" href="mailto:guillecarck@gmail.com">guillecarck@gmail.com</a>
          </div>
          <div className="outline outline-1 outline-white py-4 rounded-lg flex justify-center gap-4" data-aos="fade-down">
            <FaPhoneAlt className="text-3xl text-slate-200" />
            <p className="text-xl text-teal-400">+51 956 402 456</p>
          </div>
          <div className="sm:row-start-2 sm:col-span-2 sm:grid">
            <div className="mx-auto outline outline-1 outline-white sm:px-28 py-4 rounded-lg flex justify-center gap-4" data-aos="fade-down">
              <FaLocationDot className="text-3xl text-slate-200" />
              <p className="text-xl text-teal-400">Lima, Peru</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
