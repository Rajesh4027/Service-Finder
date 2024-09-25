import React from 'react'
import { Link } from "react-router-dom";
import MainServices from '../Services/MainServices';
import Footer from '../Pages/Footer';
import Acappliance from '../Pages/Ac&applicance';
import FestiveBanner from '../Pages/FestiveBanner';
import Cleaning from '../Pages/Cleaning';


function FrontUI() {
  return (
    <div className="font-sans text-gray-900">
        
      <div className='bg-indigo-500'>
      <div className='flex justify-end'>
      <Link to="/login" className="bg-white static text-black px-3 py-2 m-3 rounded-md text-lg font-semibold shadow-md hover:bg-gray-100">
            Login
          </Link>
          
      </div>
     
      <section className=" text-white h-screen flex flex-col justify-center items-center gap-2">
      
      <h1 className="px-40  text-5xl md:text-7xl font-bold mb-4 ">Hello,Welcome To my [Service Finder app]</h1>
      <p className="text-xl md:text-2xl">Available to the all Services</p>
      <div className="mt-8">
        <Link to="/register" className="bg-white  text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100">
          Get Started
        </Link>
      </div>
      
    </section>
      </div>

      
      <MainServices />


      <Cleaning />
      
      <FestiveBanner />


      <Acappliance />


     
      <Footer />
    </div>
  )
}

export default FrontUI