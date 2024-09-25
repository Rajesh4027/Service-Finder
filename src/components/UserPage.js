import React from 'react'
import Header from '../navbar/Header'
import MainServices from '../Services/MainServices'
import Footer from '../Pages/Footer'
import Acappliance from '../Pages/Ac&applicance'
import FestiveBanner from '../Pages/FestiveBanner'
import Cleaning from '../Pages/Cleaning'
import QuickHomeRepairs from '../Pages/QuickHomeRepairs'

function UserPage() {

  




  return (

    <div className="font-sans text-gray-900">
      <Header />
      <MainServices />
      <Cleaning />
      <FestiveBanner />
      <Acappliance />


      <QuickHomeRepairs />


      

    

      {/* Footer */}
      <Footer />
      </div>
  )
}

export default UserPage