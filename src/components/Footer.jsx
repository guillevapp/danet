import React from 'react';
import { FaWhatsapp , FaLinkedin } from 'react-icons/fa';


export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">Copyright © 2023 Creado por <a className='hover:text-white' href="https://wa.me/+5358902778">Guillezdev<FaWhatsapp  className="inline-block mr-1" /> </a>. Todos los derechos reservados</p>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/guillezdev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} className="inline-block mr-1" />Linkedin
            </a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;