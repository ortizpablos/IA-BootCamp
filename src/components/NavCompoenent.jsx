

export default function NavCompoenent() {
  return (
    <>
        <div className="navbar justify-around m-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        <li><a>Inicio</a></li>
        <li><a href="#estrategia">Estrategia</a></li>
        <li><a>Agenda</a></li>
        <li><a>Colaboradores</a></li>
        <li><a>Reto</a></li>
      </ul>
    </div>
    <div>
      
    <a className="btn btn-ghost text-xl text-white">
    <img src="./logosena.png" className="w-20"></img>
    </a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex text-white">
        <li><a>Inicio</a></li>
        <li><a>Estrategia</a></li>
        <li><a>Agenda</a></li>
        <li><a>Colaboradores</a></li>
        <li><a>Reto</a></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>
    </>
  )
}
