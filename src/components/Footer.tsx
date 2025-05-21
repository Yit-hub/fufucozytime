//import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black-200 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Columna 1 */}
        <div>
          <h4 className="font-semibold mb-2">Preguntas frecuentes</h4>
          <a href="#" className="hover:underline block mt-1">Ver todas</a>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="space-y-1">
            <li><a href="/inicio" className="hover:underline">Inicio</a></li>
            <li><a href="/galeria" className="hover:underline">Galería</a></li>
            <li><a href="#" className="hover:underline">Menú</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-semibold mb-2">Política</h4>
          <a href="#" className="hover:underline block mt-1">Política de cookies</a>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center rounded">
              <img src="facebook-icon.svg" alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center rounded">
              <img src="twitter-icon.svg" alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center rounded">
              <img src="instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center rounded">
              <img src="linkedin-icon.svg" alt="LinkedIn" className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

