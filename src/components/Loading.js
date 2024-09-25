import React, { useEffect, useState } from 'react'

export default function Loading() {
    const [filled,setFilled] = useState(0);
    useEffect(()=>{
        setTimeout(()=> setFilled(prev => prev +=2),10)
    })
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100 p-4'>
        <img  className='w-1/4' src="https://cdn.worldvectorlogo.com/logos/lixil-company-logo.svg" />
        <div className='overflow-hidden w-1/4 h-1 rounded-md bg-white mt-5'>
        <div style={{
            height:"100%",
            width:`${filled}%`,
            backgroundColor:'#ffa500',
            transition:'width 0.5s'
        }}>
           
        </div>
    </div>
    </div>
  )
}
