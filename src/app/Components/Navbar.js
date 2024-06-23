"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // Default active link

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the menu if a link is clicked
  };

  const links = [
    { name: 'Home', href: 'https://kuli.live' },
    { name: 'Contact Us', href: 'https://kuli.live' },
    { name: 'Book Now', href: '/' },
    { name: 'About Us', href: 'https://kuli.live' }
  ];

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto text-sm flex justify-between items-center px-0 sm:px-6">
        {/* Links */}
        <div className="hidden md:flex space-x-4">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold transition-all duration-300 ${activeLink === link.name ? 'text-red underline' : 'hover:text-red hover:underline'}`}
              onClick={() => handleNavLinkClick(link.name)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center">
          <a href="https://kuli.live">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </a>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex text-lg space-x-4 ml-36">
          <FaFacebookF className="hover:text-red transition-all duration-300" />
          <FaInstagram className="hover:text-red transition-all duration-300" />
          <FaLinkedinIn className="hover:text-red transition-all duration-300" />
          <FontAwesomeIcon icon={faXTwitter} className="hover:text-red transition-all duration-300 w-4 h-4" />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none">
            <svg className={`w-8 h-8 transition-transform duration-300 ${isOpen ? "transform rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-end space-y-4 mt-4 pr-4">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold transition-all duration-300 ${activeLink === link.name ? 'text-red underline' : 'hover:text-red hover:underline'}`}
              onClick={() => handleNavLinkClick(link.name)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-red transition-all duration-300" />
            <FaInstagram className="hover:text-red transition-all duration-300" />
            <FaLinkedinIn className="hover:text-red transition-all duration-300" />
            <FontAwesomeIcon icon={faXTwitter} className="hover:text-red transition-all duration-300 w-4 h-4" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
