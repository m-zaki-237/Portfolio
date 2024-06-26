import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram ,FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedinIn />
        <FaGithub />
        <FaInstagram />
        <FaTwitter/>
      </div>
    </nav>
  );
};

export default Navbar;
