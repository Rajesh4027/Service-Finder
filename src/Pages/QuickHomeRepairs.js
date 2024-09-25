import React from "react";

// Example Data for the services
const services = [
  {
    id: 1,
    img: 'https://www.shutterstock.com/image-photo/professional-handyman-using-drill-drilling-600nw-2171950193.jpg',
    title: "Drill & hang (wall decor)",
    rating: 4.87,
    reviews: "122K",
    price: "₹129"
  },
  {
    id: 2,
    img: 'https://www.shutterstock.com/image-photo/electrician-repairing-ceiling-fan-lamps-600nw-1958436523.jpg',
    title: "Fan repair (ceiling/exhaust/wall)",
    rating: 4.82,
    reviews: "116K",
    price: "₹199"
  },
  {
    id: 3,
    img: 'https://cdn.mos.cms.futurecdn.net/j9kNmRrVWZqSy2kL8XVvtX.jpg',
    title: "Switch/socket replacement",
    rating: 4.86,
    reviews: "47K",
    price: "₹109"
  },
  {
    id: 4,
    img: 'https://www.theshadestore.com/blog/wp-content/uploads/the-shade-store-installation-how-to-install-curtain-rods-hanging-drapery-rod-and-rings-content-2020-chappaqua-950x550px.jpg.webp',
    title: "Curtain rod installation (2 brackets)",
    rating: 4.86,
    reviews: "47K",
    price: "₹199"
  },
  {
    id: 5,
    img: 'https://images.squarespace-cdn.com/content/v1/58d90911725e25ffc9bd5786/827f1fb7-75c3-4ab3-978c-5954f5937f8c/shutterstock_548686102.jpeg',
    title: "Door lock repair",
    rating: 4.85,
    reviews: "42K",
    price: "₹199"
  }
];

const QuickHomeRepairs = () => {
  return (
    <div className="container mx-auto p-5 text-center">
      <h2 className="text-2xl font-bold mb-6">Quick home repairs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg transition-transform transform hover:scale-105 overflow-hidden"
          >
            <img src={service.img} alt={service.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">⭐ {service.rating} ({service.reviews})</p>
              <p className="text-gray-900 font-bold mt-2">{service.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300">
        See all
      </button>
    </div>
  );
};

export default QuickHomeRepairs;
