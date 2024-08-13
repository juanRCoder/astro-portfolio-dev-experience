import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Navbar from "./Navbar";

export default function Header() {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <>
      <header className={`z-50 flex px-4 justify-between items-center py-5 fixed top-0 w-full border-b-[1px] border-[#11111111] ${toggleNav ? '' : 'backdrop-blur'}`}>
        <span className="block h-16 w-16 bg-teal-400 rounded-full"></span>
        <GiHamburgerMenu
          onClick={() => setToggleNav(!toggleNav)}
          className="sm:hidden text-5xl text-slate-200"
        />
        {toggleNav && (
          <>
            <div className="select-none fixed top-0 left-0  flex flex-col w-full h-screen text-slate-200 backdrop-blur items-center">
              <IoClose
                className="absolute right-3 top-6 cursor-pointer z-20 text-6xl"
                onClick={() => setToggleNav(!toggleNav)}
              />
              <Navbar setToggleNav={setToggleNav} />
            </div>
          </>
        )}
        <div className="hidden sm:block">
          <Navbar />
        </div>
      </header>
    </>
  )
}
