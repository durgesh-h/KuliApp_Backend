// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-black font-thin text-md text-white p-10 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="flex flex-col space-y-4 items-center ">
          <h2 className="text-red-500 text-lg font-extrabold">Social Media</h2>
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
          <h3 className="text-red-500 text-lg font-extrabold">Need Help</h3>
          <ul className="space-y-2">
            
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
                FAQ's
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-red-500 text-lg font-extrabold">Location</h3>
          <ul className="space-y-2">
            <p>Pryagraj, UP</p>{" "}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-red-500 text-lg font-extrabold">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-black border-2 border-red-700 text-black"
            />
            <div className="flex justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-red-600 hover:bg-black w-24 text-white hover:text-red-500 hover:border-2 hover:border-red-700 p-2 rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" flex flex-col border-t border-gray-700 text-center p-4 mt-8">
        © {new Date().getFullYear()} Kuli. <br></br>
       Designed & Developed by:{" "}
       <ul className="flex flex-row justify-center">
        <li>
        <a
          href="https://dgfolio.vercel.app"
          target="blank"
          className="hover:text-white"
        >
          Skillancer 
        </a>
        </li>
        <li>
        <a
          href="https://dgfolio.vercel.app"
          target="blank"
          className="hover:text-white"
        >
          Skillancer 
        </a>
        </li>
       </ul>
       
      </div>
    </footer>
  );
};

export default Footer;
