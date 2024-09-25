import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const serviceData = [
  {
    title: "Washing Machine Repair",
    imgSrc: "https://5.imimg.com/data5/SELLER/Default/2021/3/KC/BR/JT/51351367/washing-machine-repair-service-500x500.jpeg", // Replace with actual image path
  },
  {
    title: "Water Purifier Repair & Service",
    imgSrc: "https://www.waterpurifiersinthane.com/images/service/2.png", // Replace with actual image path
  },
  {
    title: "Geyser Repair & Service",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSIn6wiGsV432FqGD28iFjYQnlpWulqt6Sw&s", // Replace with actual image path
  },
  {
    title: "Chimney Repair & Service",
    imgSrc: "https://www.dialhome.in/assets/img/Chimney-Repair-and-Rebuilding.jpg", // Replace with actual image path
  },
  {
    title: "Television Repair",
    imgSrc: "https://refix.co.in/landing/tv-repair-in-bangalore/img/tv1.jpg", // Replace with actual image path
  }
];

const Acappliance = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000ms)
    pauseOnHover: true,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6">AC & appliance repair</h2>
      <Slider {...settings}>
        {serviceData.map((service, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:scale-105 ">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover  "
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Acappliance;
