// Footer.jsx
import React from "react";
import logo from '../../assets/kulilogo.png'
import dglogo from '../../assets/dglogo.png'
import skill from '../../assets/skillancer_logo.png'
import Image from "next/image";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
const Footer = () => {
  return (
    <footer className="bg-back text-md text-white p-10 text-sm">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {/* Company Info */}
        <div className="flex flex-col space-y-4 items-center ">
          <h2 className="text-white text-md font-extrabold">Social Media</h2>
          <div className="md:flex  sm:space-x-4 space-x-0 space-y-4 md:space-y-0 ">
            <FaFacebookF className="hover:text-red-500 transition-all duration-300" />
            <FaInstagram className="hover:text-red-500 transition-all duration-300" />
            <FaLinkedinIn className="hover:text-red-500 transition-all duration-300" />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="hover:text-red-500 transition-all duration-300 w-4 h-4"
            />
          </div>
          <div className="flex">
            {/* Example Social Links */}
            <a
              href="mailto:kuligmail.com"
              className="hover:text-gray-300"
            >
              kuli@gmail.com <br></br> +911234567890
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4 ">
          <h3 className="text-white text-md font-extrabold">Need Help</h3>
          <ul className="space-y-2 ">
            
            <li>
              <a href="/AboutUs" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/Projects" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/Projects" className="hover:text-gray-300">
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-white text-md font-extrabold">Location</h3>
          <ul className="space-y-2">
            <p>Pryagraj, UP</p>{" "}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-0">
          <h3 className="text-white text-md font-extrabold">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-back border-2 border-white text-white"
            />
            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-white hover:bg-white w-24 text-red-600 hover:text-white hover:border-2 hover:border-red-700 hover:bg-red-600 p-2 rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" flex flex-col border-t border-gray-700 text-center p-4 mt-8">
        © {new Date().getFullYear()} Kuli. <br></br>
       Designed & Developed by:{" "} <br></br> <br></br>
       <ul className="flex flex-row justify-center">
        <li>
        <a
          href="https://skillancer.in"
          target="blank"
          className="hover:text-white"
        >
       <Image src={skill} alt="Skillancer Logo" width={90} height={90}   />
        </a>
        </li>
      
        <li>
          <p className="font-extrabold ">
             & 
          </p>
        </li>
        <li>
        <a
          href="https://durgeshprasad.co"
          target="blank"
          className="hover:text-white"
        >
       <Image src={dglogo} alt="Durgesh Prasad Logo" width={170} height={170}   />
        </a>
        </li>
       </ul>
       
      </div>
    </footer>
  );
};

export default Footer;
