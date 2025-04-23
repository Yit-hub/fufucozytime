import React from 'react';

const Header = () => {
  return (
    <header className="bg-white-500 text-black p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="../src/assets/logo.jpg"
            alt="Logo"
            className="w-16 h-16 mr-4"
          />
          <nav className="flex">
            <a href="#" className="px-4 py-2 text-xl font-bold hover:text-gray-200">
              Inicio
            </a>
            <a href="#" className="px-4 py-2 text-xl font-bold hover:text-gray-200">
              Galería
            </a>
            <a href="#" className="px-4 py-2 text-xl font-bold hover:text-gray-200">
              Menu
            </a>
            <a href="#" className="px-4 py-2 text-xl font-bold hover:text-gray-200">
              Contacto
            </a>
          </nav>
        </div>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Pedir
        </button>
      </div>
    </header>
  );
};

export default Header;