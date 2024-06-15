"use client"
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import PNRComponentWithToast from './Components/PNRcomponents'; // Updated import
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const Home = () => {
  return (
    <ChakraProvider>
      <div className='bg-blue-400 text-center'>
        <Navbar/>
        <PNRComponentWithToast/> {/* Use the component with toast integration */}
        <Footer/>
      </div>
    </ChakraProvider>
  );
};

export default Home;
