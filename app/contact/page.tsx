import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

const contactPage = () => {
  return (
    <div>
        <Header/>
      <section className='py-10 bg-orange-200'>
        <div className='container mx-auto text-center'>
            <h1 className='text-3xl mb-6 font-bold text-red-700'>Contact Us</h1>
            <form className='max-w-md mx-auto'>
                <div className='mb-4 text-red-700'>
                    <input type="text" placeholder="Your Name" className='w-full p-3 border border-grey300 rounded-md'
                    required/>
                </div>

                <div className='mb-4'>
                    <input type="email" placeholder="Your Email" className='w-full p-3 border border-grey300 rounded-md'
                    required/>
                </div>
             
                <div className='mb-4'>
                    <input type="textarea" placeholder="Your Message" className='w-full p-3 border border-grey300 rounded-md'
                    required/>
                </div>

                <div className='mb-4'>
                <button type="submit" className='bg-red-400 hover:bg-red-500
                 py-2 px-4 rounded-full'>Submit</button>
                </div>
            </form>

        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default contactPage