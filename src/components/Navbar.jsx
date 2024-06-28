import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import sunImage from '../assets/Theme/sun.png';
import moonImage from '../assets/Theme/moon.png';

const Navbar = ({ handleMoonClick, theme }) => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {theme === 'dark' ? (
          <img src={sunImage} alt="Sun" className="h-8 w-8 cursor-pointer" onClick={handleMoonClick} />
        ) : (
          <img src={moonImage} alt="Moon" className="h-8 w-8 cursor-pointer" onClick={handleMoonClick} />
        )}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedinIn />
        <FaGithub />
        <FaInstagram />
        <FaTwitter />
      </div>
    </nav>
  );
};

export default Navbar;

