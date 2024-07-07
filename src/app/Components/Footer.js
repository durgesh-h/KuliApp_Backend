// Footer.jsx
import React from "react";
import logo from "../../assets/kulilogo.png";
import dglogo from "../../assets/dglogo.png";
import skill from "../../assets/skillancer_logo.png";
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
    <footer className="bg-back  text-md font-normal text-white px-10 p-1 ">
      <div className="border-t-4 mx-34 border-red border-solid"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 py-10 lg:grid-cols-3 lg:gap-22 gap-10">
        {/* Company Info */}
        <div className="flex flex-col space-y-4 items-center ">
          <h2 className="text-white text-md font-bold">Social Media</h2>
          <div className="flex text-lg space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61555889204274">
              {" "}
              <FaFacebookF className="hover:text-red transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/kuli_india/">
              {" "}
              <FaInstagram className="hover:text-red transition-all duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/kuliofficial/">
              {" "}
              <FaLinkedinIn className="hover:text-red transition-all duration-300" />
            </a>
            <a href="https://x.com/kuli_india">
              {" "}
              <FontAwesomeIcon
                icon={faXTwitter}
                className="hover:text-red transition-all duration-300 w-4 flex h-5"
              />
            </a>
          </div>
          <div className="flex">
            {/* Example Social Links */}
            <a href="mailto:contact@kuli.live" className="hover:text-gray-300">
              contact@kuli.live <br></br> +91 782-741-4428
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4 ">
          <h3 className="text-white text-md font-bold">Need Help</h3>
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
            {/* <li>
              <a
                href="https://www.durgeshprasad.co"
                className="hover:text-gray-300"
              >
                Developer
              </a>
            </li> */}
          </ul>
        </div>

        {/* Services */}
        {/* <div className="space-y-4">
          <h3 className="text-white text-md font-extrabold">Location</h3>
          <ul className="space-y-2">
            <p>Prayagraj, UP</p>{" "}
          </ul>
        </div> */}

        {/* Newsletter */}
        <div className="space-y-0  lg:text-start ">
          <h3 className="text-white text-md font-bold">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2  rounded bg-back border-2 border-white text-white"
            />
            <div className="flex justify-center lg:justify-start">
              <button
                type="submit"
                className="bg-red hover:bg-white w-24 text-red-600 hover:text-red hover:border-2 hover:border-red-700 hover:bg-red-600 p-2 rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" flex md:flex-row flex-col  justify-center items-center  gap-1 p-2 mt-8">
        {/* © {new Date().getFullYear()} Kuli. <br></br> */}
        <p className="lg:text-[1.0em]  text-sm font-normal"> Designed & Developed by : </p>
        <a
          href="https://skillancer.in/durgeshprasad"
          target="blank"
          className="hover:text-white"
        >
          <Image src={skill} alt="Skillancer Logo" width={100} height={100} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
