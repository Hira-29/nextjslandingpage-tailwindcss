import React from 'react'
import Link from "next/link";


const Header = () => {
  return (
    <div>
      <header>
        <div  className='flex justify-between items-center sm:text-left' >
          <h1 className='m-3 font-bold text-[20px] hover:text-red-600'>TastyBites</h1>
          <nav>
            <ul className='flex justify-between items-center gap-6  mx-10 font-bold'>
              <li className='hover:text-red-600'><Link href="/">Home</Link></li>
              <li className='hover:text-red-600'><Link href="#">MyCart</Link></li>
              <li className='hover:text-red-600'><Link href="/about">About</Link></li>
              <li className='hover:text-red-600'><Link href="/contact">Contact</Link></li>
              <button type="button" className='bg-red-400 hover:bg-red-500 py-2 px-4 rounded-full'>Login</button>
              <button type="button" className='bg-red-400 hover:bg-red-500 py-2 px-4 rounded-full'>Sign Up</button>
              
            </ul>
          </nav>
        </div>
      </header>


    </div>
  )
}

export default Header
