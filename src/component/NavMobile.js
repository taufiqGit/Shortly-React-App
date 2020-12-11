import React from 'react'

const NavMobile =()=>{
    let href = ""
    return(
        <div className="absolute inset-x-0 mx-0 h-auto flex justify-center lg:hidden z-20 font-Poppins">
          <nav className="w-9/12 sm:6/12 pb-4 h-auto bg-DarkViolet rounded-lg">
            <ul className="text-center text-White">
              <li className="my-6 font-semibold text-lg"><a href={href}>Features</a></li>
              <li className="my-6 font-semibold text-lg"><a href={href}>Pricing</a></li>
              <li className="my-6 font-semibold text-lg"><a href={href}>Resources</a></li>
            </ul>
            <hr className="w-10/12 mx-auto"/>
            <div className="flex flex-col px-4 font-semibold ">
              <button className="rounded-full my-2 block h-10 w-auto mx-4 text-White font-semibold">Login</button>
              <button className="rounded-full my-2 block h-10 w-auto mx-4 bg-Cyan text-White font-semibold hover:bg-opacity-25 transition duration-500 ease-in-out">Sign Up</button>
            </div>
          </nav>
        </div>
    )
}

export default NavMobile