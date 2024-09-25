import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const serviceData = [
  {
    title: "Door Lock Repair",
    imgSrc: "https://content.jdmagicbox.com/comp/def_content/lock-repair-and-services/1-lock-repair-and-services-1-9q3tt.jpg", // Replace with actual image path
  },
  {
    title: "Native Water Purifier",
    imgSrc: "https://content.jdmagicbox.com/v2/comp/bangalore/x6/080pxx80.xx80.240518140547.q5x6/catalogue/aquatech-water-purifier-banashankari-3rd-stage-bangalore-water-purifier-repair-and-services-lf7t03rchg.jpg", // Replace with actual image path
  },
  {
    title: "Hair Studio for Woman",
    imgSrc: "https://static.vecteezy.com/system/resources/previews/013/000/440/large_2x/beautiful-caucasian-women-feel-relax-and-comfortable-while-getting-hair-wash-with-shampoo-and-massage-hair-salon-studio-with-hair-stylish-beauty-and-fashion-concept-free-photo.jpg", // Replace with actual image path
  },
  {
    title: "Full Home Painting",
    imgSrc: "https://assets.nobroker.in/nb-new/public/Home-Services/painting.jpg", // Replace with actual image path
  },
  {
    title: "Television Repair",
    imgSrc: "https://media.vyaparify.com/vcards/products/41559/TR-1.jpg", // Replace with actual image path
  }
];


const InfiniteScrollGrid = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
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
    <div className="container overflow-hidden w-full col-span-2 ">
      <Slider {...settings}>
        {serviceData.map((service, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover"
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

export default InfiniteScrollGrid;

