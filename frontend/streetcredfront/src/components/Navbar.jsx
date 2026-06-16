import React, { useState } from 'react';
import { FaTelegramPlane, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiFramer } from 'react-icons/si';
import navBg from '../assets/elements/imageNavigationBar.png';
import logoProfile from '../assets/elements/imagelogoprofile.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 lg:top-6 left-0 w-full z-50 lg:px-10">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex w-full justify-between items-center relative">
          
          {/* Left Side: Logo Profile + Navigation Links */}
          <div className="flex items-center gap-6">
            <img src={logoProfile} alt="Profile Logo" className="w-[80px] drop-shadow-md z-20" />
            
            <div className="relative flex justify-center items-center w-[800px] h-[70px]">
              <img src={navBg} alt="Nav Background" className="absolute top-0 left-0 w-full h-full object-fill -z-10 drop-shadow-[0_0_15px_rgba(255,0,255,0.4)]" />
              <div className="flex justify-center items-center gap-10 text-white font-rubik text-[20px] tracking-wider w-full px-16 pt-1">
                <a href="#home" className="hover:text-pink-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">HOME</a>
                <a href="#about" className="hover:text-pink-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">ABOUT</a>
                <a href="#story" className="hover:text-pink-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">STORY</a>
                <a href="#tokenomics" className="hover:text-pink-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">TOKENOMICS</a>
                <a href="#roadmap" className="hover:text-pink-400 transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">ROADMAP</a>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
              <a href="#" className="bg-yellow-400 text-black p-2 rounded-md hover:bg-yellow-300 transition-colors"><SiFramer /></a>
              <a href="#" className="bg-yellow-400 text-black p-2 rounded-md hover:bg-yellow-300 transition-colors"><FaTelegramPlane /></a>
              <a href="#" className="bg-yellow-400 text-black p-2 rounded-md hover:bg-yellow-300 transition-colors"><FaXTwitter /></a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden w-full flex justify-between items-center bg-[#d4b062] px-6 h-[60px] drop-shadow-md">
          <span className="font-serif font-bold text-[18px] tracking-wide">STREET CRED</span>
          <button onClick={() => setIsOpen(true)} className="text-2xl text-black focus:outline-none">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex justify-end">
          <div className="w-[70%] max-w-[300px] h-full bg-[#fdf5e6] shadow-2xl relative flex flex-col pt-16 px-6">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl text-pink-600 focus:outline-none">
              <FaTimes />
            </button>
            <div className="flex items-center gap-4 mb-8">
              <img src={logoProfile} alt="Profile Logo" className="w-[50px]" />
              <span className="font-serif font-bold text-lg text-pink-600">STREET CRED</span>
            </div>
            
            <div className="flex flex-col gap-6 font-bold text-lg mb-8 text-black">
              <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-pink-600">About</a>
              <a href="#story" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Story</a>
              <a href="#tokenomics" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Tokenomics</a>
              <a href="#roadmap" onClick={() => setIsOpen(false)} className="hover:text-pink-600">Roadmap</a>
            </div>

            <button className="bg-pink-600 text-white font-bold py-3 rounded-md mb-4 shadow-md">BUY NOW</button>
            <button className="bg-pink-600 text-white font-bold py-3 rounded-md shadow-md">JOIN NOW</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
