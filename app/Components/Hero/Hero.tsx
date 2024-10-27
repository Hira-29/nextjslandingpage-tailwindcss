"use client";
import React from 'react'
import Image from 'next/image';




const Hero = () =>
{
    return(
        <div>
     

            <div className='h-{88vh} w-{100%} sm:text-left flex items-center justify-center bg-blue-700'>
              <div className=' w-{100%} flex justify-center items-center'>
            <Image src="/banner.png" alt="" width={1450} height={100}></Image>
           
            
            </div>
            </div>
      
        
        </div>
    )
}
export default Hero

