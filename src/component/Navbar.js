import React, { useState } from 'react'
import logo from '../asset/images/logo.svg'
import NavMobile from './NavMobile'

let hrefs = "";
const Navbar = ()=>{
    const [open, setOpen] = useState(false)
  
    return(
      <>
        <header className="container mx-auto px-8 lg:px-16 w-full h-24 flex items-center justify-between font-Poppins">
            <img src={logo} className="h-7 flex-grow-0" alt="Logo"/>
            <nav className="flex h-full items-center justify-end lg:justify-between flex-grow">
              <ul className="ml-10 hidden lg:flex">
                <li><a href={hrefs} className="text-GrayishViolet font-semibold mx-3 hover:text-DarkViolet">Features</a></li>
                <li><a href={hrefs} className="text-GrayishViolet font-semibold mx-3 hover:text-DarkViolet">Pricing</a></li>
                <li><a href={hrefs} className="text-GrayishViolet font-semibold mx-3 hover:text-DarkViolet">Resources</a></li>
              </ul>
              <div className="hidden lg:inline-block">
                <button className="rounded-full h-10 w-20 mx-4  font-semibold text-GrayishViolet hover:text-DarkViolet">Login</button>
                <button className="rounded-full h-10 w-32 mx-4 bg-Cyan text-White hover:bg-opacity-50 transition duration-500 ease-in-out">Sign Up</button>
              </div>
              <button onClick={()=> setOpen(!open)} className="lg:hidden">
                <span className="block h-1 mb-1 w-10 bg-VeryDarkBlue"></span>
                <span className="block h-1 mb-1 w-8 bg-VeryDarkBlue"></span>
                <span className="block h-1 w-10 bg-VeryDarkBlue"></span>
              </button>
            </nav>
        </header>
        {open && <NavMobile/>}
      </>
    )
}

export default Navbar