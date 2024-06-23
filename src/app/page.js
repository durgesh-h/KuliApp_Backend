"use client"
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import PNRComponentWithToast from './Components/PNRapp'; // Updated import
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Image from './Components/ImageWrapper'
const Home = () => {
  return (
    <ChakraProvider>
      <div className='bg-blue-400 text-center'>
        <Navbar/>
      <Image/>
        <Footer/>
      </div>
    </ChakraProvider>
  );
};

export default Home;
