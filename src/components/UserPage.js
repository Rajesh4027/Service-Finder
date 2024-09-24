import React from 'react'
import Header from '../navbar/Header'
import MainServices from '../Services/MainServices'
import Footer from '../Pages/Footer'

function UserPage() {

  




  return (

    <div className="font-sans text-gray-900">
      <Header />
      <MainServices />
      <section className="bg-blue-500 text-white min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl md:text-2xl">A passionate developer building web experiences.</p>
        <div className="mt-8">
          <a href="#about" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100">
            Learn More
          </a>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold  mb-8">Ac & Appliance Repair</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Ac Repair & Service</h3>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LP30-0jLzfj9EH4sNdgACu89k0XavBLkjg&s" alt="" />

            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Washing Machine Repair</h3>
              <img src="https://content.jdmagicbox.com/v2/comp/bangalore/x1/080pxx80.xx80.240123135433.m3x1/catalogue/cloud-control-sadduguntepalya-bangalore-washing-machine-repair-and-services-5swm95pm6f.jpg" alt="" />
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Water Purifier Repair & Service</h3>
              <img src="https://www.rightcliq.in/blogs/images/blogs/water-purifier-service.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>


      


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