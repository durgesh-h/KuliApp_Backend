"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF,FaTimes, FaInstagram, FaLinkedinIn } from "react-icons/fa";
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
    { name: 'Home', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Book Now', href: '#' }
  ];

  return (
    <nav className="bg-black text-white p-6">
      <div className="container mx-auto text-md flex justify-between items-center px-2 sm:px-12">
        {/* Logo and Links */}
        <div className="flex items-center space-x-8">
          <div className="logo">
            <Image src={logo} alt="Logo" width={80} height={80} />
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <a
                key={link.name}
                href={link.href}
                className={` font-thin  transition-all duration-300 ${activeLink === link.name ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline'}`}
                onClick={() => handleNavLinkClick(link.name)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex space-x-4">
          <FaFacebookF className="hover:text-red-500 transition-all duration-300" />
          <FaInstagram className="hover:text-red-500 transition-all duration-300" />
          <FaLinkedinIn className="hover:text-red-500 transition-all duration-300" />  
          <FontAwesomeIcon icon={faXTwitter} className="hover:text-red-500 transition-all duration-300 w-4 h-4" /> 
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
              className={`font-bold transition-all duration-300 ${activeLink === link.name ? 'text-red-500 underline' : 'hover:text-red-500 hover:underline'}`}
              onClick={() => handleNavLinkClick(link.name)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-red-500 transition-all duration-300" />
            <FaInstagram className="hover:text-red-500 transition-all duration-300" />
            <FaLinkedinIn className="hover:text-red-500 transition-all duration-300" />
            <FontAwesomeIcon icon={faXTwitter} className="hover:text-red-500 transition-all duration-300 w-4 h-4" /> 

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
