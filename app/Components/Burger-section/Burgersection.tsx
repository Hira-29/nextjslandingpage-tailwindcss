import React from 'react'
import Image from 'next/image'

const BurgerSection = () => {
  return (
    <div className='sm:text-left'>
      <section id="burger" className="mx-40 my-8 border-dotted border-2 border-red-700 bg-orange-200">
    
    <Image src="/Burgers.webp" alt="section"height={20} width={1200}></Image><br/><br/>
   
    <div className="flex justify-center">
   
      <div  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-10'>
     <Image src="/zingerburger.webp" alt="zinger" height={100} width={150}></Image>

     <figcaption className="m-4 text-center">
     <div className="font-black">
       Zinger burger
     </div>
     <div className="text-red-700 font-bold">
        Rs 350
     </div>
   </figcaption>
     </div>

<div  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-10'>
   <Image src="/chickenburger.webp" alt="chicken" height={100} width={150}></Image>
   <figcaption className="m-4 text-center">
     <div className="font-black">
       Chicken burger
     </div>
     <div className="text-red-700 font-bold">
        Rs 310
     </div>
   </figcaption>
</div>

<div  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-10'>
   <Image src="/beefburger.webp" alt="beef" height={100} width={150}></Image>
   <figcaption className="m-4 text-center">
     <div className="font-black">
       Beef burger
     </div>
     <div className="text-red-700 font-bold">
        Rs 320
     </div>
   </figcaption>
</div>
   </div>
 
     </section>


    </div>
  )
}

export default BurgerSection
