import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white text-black p-4 shadow-md">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center z-10">
          <img
            src="../src/assets/logo1.jpg"
            alt="Logo"
            className="w-50 h-25 mr-4"
          />
        </div>

        {/* Nav - Desktop */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <a href="/inicio" className="px-4 py-2 text-xl font-bold hover:text-gray-500">
            Inicio
          </a>
          <a href="/galeria" className="px-4 py-2 text-xl font-bold hover:text-gray-500">
            Galería
          </a>
          <a href="/menu" className="px-4 py-2 text-xl font-bold hover:text-gray-500">
            Menú
          </a>
          <a href="/contacto" className="px-4 py-2 text-xl font-bold hover:text-gray-500">
            Contacto
          </a>
        </nav>

        {/* Botón Pedir - Desktop */}
        <div className="z-10 hidden md:block">
          <a
            href="https://glovoapp.com/es/es/sevilla/fufu-cozy-time-sevilla/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Pedir
          </a>
        </div>

        {/* Botón Hamburguesa - Mobile */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav - Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-2">
          <a href="/inicio" className="text-lg font-bold hover:text-gray-500">
            Inicio
          </a>
          <a href="/galeria" className="text-lg font-bold hover:text-gray-500">
            Galería
          </a>
          <a href="/menu" className="text-lg font-bold hover:text-gray-500">
            Menú
          </a>
          <a href="/contacto" className="text-lg font-bold hover:text-gray-500">
            Contacto
          </a>
          <a
            href="https://glovoapp.com/es/es/sevilla/fufu-cozy-time-sevilla/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Pedir
          </a>
        </div>
      )}
    </header>
  );
};
export default Header;
