import React from 'react'
import Image from 'next/image'

const SandwichSection = () => {
  return (
    <div className='sm:text-left'>
      <section id="sandwich" className="mx-40 my-8 border-dotted border-2 border-red-700 bg-orange-200">
    
    <Image src="/Sandwiches.webp" alt="section"height={20} width={1200}></Image><br/><br/>
   
    <div className="flex justify-center">
   
      <div  className='transition all delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-10'>
     <Image src="/ClubSandwich.webp" alt="zinger" height={100} width={150}></Image>

     <figcaption className="m-4 text-center">
     <div className="font-black">
       Club Sandwich
     </div>
     <div className="text-red-700 font-bold">
        Rs 350
     </div>
   </figcaption>
     </div>

<div className='transition all delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mx-10'>
<Image src="/chickensandwich.webp" alt="chicken" height={100} width={150}></Image>

   <figcaption className="m-4 text-center">
     <div className="font-black">
        Chicken Sandwich
     </div>
     <div className="text-red-700 font-bold">
        Rs 310
     </div>
   </figcaption>
</div>


   </div>
 
     </section>


    </div>
  )
}

export default SandwichSection
