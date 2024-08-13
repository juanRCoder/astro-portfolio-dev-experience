import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


export default function Contacto() {
    return (
        <aside className="sm:grid-cols-2 max-w-2xl pt-8 pb-24 relative mx-auto top-6 grid items gap-4">
            <div className="outline outline-1 outline-white py-4 rounded-lg flex justify-center gap-4">
                <MdEmail className="text-3xl text-slate-200" />
                <p className="text-xl text-teal-400">guillecarck@gmail.com</p>
            </div>
            <div className="outline outline-1 outline-white py-4 rounded-lg flex justify-center gap-4">
                <FaPhoneAlt className="text-3xl text-slate-200" />
                <p className="text-xl text-teal-400">+51 956 402 456</p>
            </div>
            <div className="sm:row-start-2 sm:col-span-2 sm:grid">
                <div className="mx-auto outline outline-1 outline-white sm:px-28 py-4 rounded-lg flex justify-center gap-4">
                    <FaLocationDot className="text-3xl text-slate-200" />
                    <p className="text-xl text-teal-400">Lima, Peru</p>
                </div>
            </div>
        </aside>
    )
}
