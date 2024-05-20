"use client"
import React from 'react'

import PNRComponent from './Components/PNRcomponents';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
const Home = () => {
  return (
    <>
     {/* <NavbarDemo/> */}
    <div className=' bg-slate-400 text-center'>
      {/* <h1>This is Homepage</h1> */}
      <Navbar/>
      <PNRComponent/>
    <Footer/>

    </div>
    </>
   
  )
}

export default Home;