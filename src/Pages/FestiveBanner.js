import React from "react";

const FestiveBanner = () => {
  return (
    
    <div className="mx-3">


<div className="container mx-auto my-10 flex bg-[#f9e5c9]  rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:scale-105">
      {/* Left Side: Text Section */}
      <div className="p-8 flex flex-col justify-around gap-3 md:gap-0">
        <span className="inline-block bg-green-600  text-white text-xl w-1/3  rounded-md pl-2 font-semibold p ">
          Festive special
        </span>
        <h2 className="text-4xl font-bold mb-2 text-black">
          Elevate your home this festive season
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-4">Home painting</p>
        <button className="bg-black w-1/2 text-white px-2 py-2 rounded-md font-semibold">
          Buy now
        </button>
      </div>
      
      {/* Right Side: Image Section */}
      <div className="flex-1">
        <img
          src="https://media.architecturaldigest.com/photos/64de2433389b0c41a0a17a70/master/w_1600%2Cc_limit/GettyImages-1213239873.jpg" // Replace with the path to the actual image
          alt="Home painting"
          className="w-full h-full object-cover"
        />
      </div>
    </div>


    </div>
  );
};

export default FestiveBanner;
