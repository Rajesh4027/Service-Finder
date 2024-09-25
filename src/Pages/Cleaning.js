import React from "react";

const services = [
  {
    title: "Full Home Cleaning",
    image: "https://sparklecommercialcleaning.com.au/wp-content/uploads/2022/01/cleaning-professional-contractors-working-house-cleaning-professional-contractors-working-house-118925165.jpg", 
  },
  {
    title: "Cockroach, Ant & General Pest Control",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/4/410041251/XW/CJ/BM/83357423/cockroach-control-services.jpg", 
  },
  {
    title: "Sofa & Carpet Cleaning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZaBTNeLt4vrInU4VkeX40HNDcDuBsrMRPJVPjrLT94JS7Wd3wn3k9FCnvyUsBtVE2pY&usqp=CAU", 
  },
  {
    title: "Bathroom Cleaning",
    image: "https://cdn.prod.website-files.com/6397d1f7c4e0e51d3bd5a80f/63bf3d2b3fac7c5eb2a3c323_Cleaning-Bathtub-Hero.jpg", 
  },
  {
    title: "Kitchen Cleaning",
    image: "https://www.tasteofhome.com/wp-content/uploads/2022/04/GettyImages-1214477617.jpg", 
  },
];

const Cleaning = () => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Cleaning & pest control</h2>
        <a href="#" className="text-indigo-600 hover:text-indigo-800">
          See all
        </a>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-end ">
        {services.map((service, index) => (
          <div key={index} className="rounded-lg hover:shadow p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              src={service.image}
              alt={service.title}
              className="h-32 w-full object-cover mb-4 rounded-lg "
            />
                        <h3 className="text-start font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cleaning;
