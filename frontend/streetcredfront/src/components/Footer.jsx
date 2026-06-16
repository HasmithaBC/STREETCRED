import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiFramer } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-pink-600 w-full py-8 lg:py-10 px-8 flex justify-between items-center text-white">
      <div className="font-bangers text-2xl tracking-wider text-yellow-400">Street Cred</div>
      <div className="text-xs">© 2024 StreetCred All right reserved</div>
      <div className="flex gap-4">
          <a href="#" className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors"><SiFramer /></a>
          <a href="#" className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors"><FaTelegramPlane /></a>
          <a href="#" className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition-colors"><FaXTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
