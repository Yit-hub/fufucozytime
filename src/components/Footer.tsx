import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Columna 1 */}
        <div>
          <h4 className="font-semibold mb-2">Preguntas frecuentes</h4>
        </div>

        {/* Columna 2 */}
        <div>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Galería</a></li>
            <li><a href="#" className="hover:underline">Menú</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-semibold mb-2">Política de cookies</h4>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <div className="flex space-x-2 mt-2">
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">
              <img src="facebook-icon.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">
              <img src="twitter-icon.svg" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">
              <img src="instagram-icon.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="w-8 h-8 bg-gray-300 hover:bg-gray-400 flex items-center justify-center">
              <img src="linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

