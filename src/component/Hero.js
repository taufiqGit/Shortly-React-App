import React from 'react';
import Illustration from '../asset/images/illustration-working.svg';

const Hero = ()=>{
    return(
        <div className="container mx-auto px-8 lg:px-16 pb-48 mt-6 h-auto w-full flex flex-col-reverse lg:flex-row overflow-x-hidden font-Poppins">
            <section className="lg:w-10/12 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mt-10 leading-tight text-VeryDarkViolet">More than just shorter links</h1>
                <p className="mt-1 lg:max-w-xl text-GrayishViolet">Build your brand’s recognition and get detailed insights 
                   on how your links are performing.</p>
                <button className="rounded-full h-10 w-32 bg-Cyan mt-6 text-White hover:bg-opacity-50 transition duration-500 ease-in-out">Get Started</button>
            </section>
            <section className="">
                <img className="relative w-full lg:ml-20" src={Illustration} alt="Illustration Hero"/>
            </section>
        </div>
    )
}

export default Hero