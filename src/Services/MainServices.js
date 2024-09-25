import React from 'react'
import InfiniteScrollGrid from '../navbar/InfiniteScrollGrid';

const MainServices = () => {
   
    return (

        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8">

                <div className="grid grid-rows-2 gap-4 bg-white p-6 rounded-lg ">
                    <h2 className=" text-2xl font-bold ml-4">Home services at your doorstep</h2>

                    <h2 className="row-span-2 p-4 text-2xl  ml-4">What are you looking for?</h2>
                    <div className=' p-4 rounded-md h-full grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 text-center'>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105 md:col-span-1 lg:col-span-2'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                        <div className='border rounded-lg bg-indigo-200 hover:bg-indigo-400 transition duration-300 ease-in-out hover:scale-105 lg:col-span-2 xl:col-span-1'>
                            <img width={80} className=' mx-auto' src="https://cdn.iconscout.com/icon/free/png-512/free-air-conditioner-icon-download-in-svg-png-gif-file-formats--conditioning-heating-electronics-technology-hotel-service-pack-holidays-icons-8031769.png?f=webp&w=256" alt="" />
                            <p>Ac Repair</p>
                        </div>
                    </div>

  


                    <div className="grid grid-cols-2 gap-4  ">

                        <InfiniteScrollGrid />


                        <div className=" rounded-lg text-center  hover:shadow-lg transition duration-300 ease-in-out hover:scale-105  ">
                            <img src="https://st2.depositphotos.com/1004713/7082/i/450/depositphotos_70822719-stock-photo-asian-woman-in-the-spa.jpg" alt="Women's Salon" className="mx-auto mb-2  rounded-md " />
                            <p>Women's Salon & Spa</p>
                        </div>
                        <div className="rounded-lg text-center  hover:shadow-lg transition duration-300 ease-in-out hover:scale-105  ">
                            <img src="https://st.depositphotos.com/1049680/52054/i/450/depositphotos_520549176-stock-photo-young-hispanic-hairdresser-woman-cutting.jpg" alt="Men's Salon" className="mx-auto mb-2 rounded-md " />
                            <p>Men Salon & Massage</p>
                        </div>
                    </div>
                </div>







                <div className="grid grid-rows-2 gap-4">
                    {/* Top row (First image) */}
                    <div className="row-span-1">
                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2023/11/359924333/GQ/PB/YH/42740482/washing-machine-repairing-service.jpg"
                            alt="Service 1"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    {/* Bottom row (Two images) */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://media.istockphoto.com/id/1305517076/photo/service-man-in-yellow-tshirt-looking-busy-while-installing-the-air-conditioner.jpg?s=612x612&w=0&k=20&c=NVAEyWfyKqkIfJP8GBsT2aHfFA2jjtYBbLsOSlZD5Ao="
                            alt="Service 2"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <img
                            src="https://www.mychimney.com/wp-content/uploads/2017/01/4L6A9026best.jpg"
                            alt="Service 3"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainServices