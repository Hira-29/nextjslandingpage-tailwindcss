import Image from "next/image"
import React from 'react'
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const aboutPage = () => {
  return (
    <div>
      
   <Header/>


<div className="max-w-4xl mx-auto p-6 text-center border-dotted border-2 border-red-700 bg-orange-200">
    <h1 className="font-bold text-4xl text-red-700">About Us</h1>
<section className="my-8">
    <h2 className="text-2xl font-semibold">Our Story</h2>
    <p className="mt-4">
        Welcome to TastyBites! We are passionate about serving mouth-watering fast food that brings joy to our customers. Since our inception in 2020, we have been committed to using the freshest ingredients and offering a menu that satisfies every craving.
    </p>
</section>

<section className="my-8">
    <h2 className="text-2xl font-semibold">Our Mission</h2>
    <p className="mt-4">
        Our mission is to provide quick, delicious meals with exceptional service. We believe in creating a welcoming atmosphere where everyone feels at home.
    </p>
    <ul className="list-none ml-5 mt-4">
        <li>Quality ingredients</li>
        <li>Friendly service</li>
        <li>Community involvement</li>
    </ul>
</section>

<section className="my-8">
    <h2 className="text-2xl font-semibold">Our Values</h2>
    <p className="mt-4">
        We value quality, integrity, and community. Our team is dedicated to upholding these principles in every aspect of our business.
    </p>
</section>

<section className="my-8">
    <h2 className="text-2xl font-semibold">Join Us!</h2>
    <p className="mt-4">
        Come visit us and enjoy our delicious offerings. We can't wait to serve you!
    </p>
    <div className="flex justify-center mt-6">
        <Image src="/interior.webp" alt="Restaurant Interior" width={500} height={500} className="rounded-lg shadow-lg  max-w-lg"></Image>
    </div>
</section>
</div>
<Footer/>
</div>
  )
}

export default aboutPage