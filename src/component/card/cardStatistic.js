import React from 'react'

const Card = ({data}) =>{
    return(
        <div className={`m-4 bg-White p-4 h-56 w-72 rounded-md relative mt-20 md:mt-${data.marginTop}`}>
            <div className="p-5 h-20 w-20 ml-4 absolute -top-10 rounded-full bg-DarkViolet">
                <img className="mx-auto" src={data.icon} alt="ll"/>
            </div>
            <h3 className="mt-8 text-xl font-bold text-VeryDarkViolet">{data.title}</h3>
            <p className="mt-4 font-semibold text-GrayishViolet">{data.description}</p>
        </div>
    )
}

export default Card


