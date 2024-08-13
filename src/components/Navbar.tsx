interface toogleProps {
  setToggleNav?: (toggleNav: boolean) => void
}

// Prop tiene valor por defecto una funcion vacia para evitar el undefined

export default function Navbar({ setToggleNav = () => { } }: toogleProps) {
  return (
    <nav className="sm:flex-row sm:pt-0 sm:gap-5 sm:text-base flex flex-col gap-10 pt-20 font-semibold text-xl">
      {[
        ['Sobre Mi', '#About'],
        ['Proyectos', '#Projects'],
        ['Contacto', '#Contact'],
      ].map(([name, path]) => (
        <a key={name} onClick={() => setToggleNav(false)} href={path} className="text-slate-300 cursor-pointer hover:text-teal-400">{name}</a>
      ))}
    </nav>
  )
}
