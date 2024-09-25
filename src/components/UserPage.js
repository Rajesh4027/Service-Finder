import React from 'react'
import Header from '../navbar/Header'
import MainServices from '../Services/MainServices'
import Footer from '../Pages/Footer'
import Acappliance from '../Pages/Ac&applicance'
import FestiveBanner from '../Pages/FestiveBanner'
import Cleaning from '../Pages/Cleaning'

function UserPage() {

  




  return (

    <div className="font-sans text-gray-900">
      <Header />
      <MainServices />
      <Cleaning />
      <FestiveBanner />
      <Acappliance />


      


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-lg text-center leading-relaxed">
            I'm a developer with a love for crafting beautiful and functional web applications.
            My journey started with curiosity, and now I'm constantly learning and growing in the field of web development.
          </p>
        </div>
      </section>


      {/* Footer */}
      <Footer />
      </div>
  )
}

export default UserPage