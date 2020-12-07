import React from 'react'
import Logo from "../asset/images/logo-white.svg"

import { ListMenuFooter } from '../DataStatis/dataStatis'
import { SocialMediaIcon } from '../DataStatis/dataStatis'

const SocialMedia =({data})=>{
   return(
       <div className="flex w-48">
           {
               data.map((val, idx)=>(
                   <img className="h-8 w-8 mx-2" key={idx} src={val} alt="hows"/>
               ))
           }
       </div>
   )
}

const ListMenu =({data})=>{
    let href = ""
    return(
        <section className="mx-6 xl:mx-8 my-4 md:my-0">
            <h3 className="text-2xl font-bold text-White">{data.title}</h3>
            <ul>
                {
                    data.list.map((val, idx)=>(
                        <li className="my-2" key={idx}><a className="text-White" href={href}>{val}</a></li>
                    ))
                }
            </ul>
        </section>
    )
}

const Footer =()=>(
    <footer className="w-full px-4 lg:px-24 xl:px-32 py-16 flex flex-col md:flex-row items-center md:items-start justify-between bg-VeryDarkViolet">
        <div className="w-48">
           <img className="mx-auto h-8 w-32" src={Logo} alt="LOGO"/> 
        </div>
        <div className="flex flex-col md:flex-row my-10 md:my-0 text-center md:text-left w-auto">
            <ListMenu data={ListMenuFooter.Features}/>
            <ListMenu data={ListMenuFooter.Resources}/>
            <ListMenu data={ListMenuFooter.Company}/>
        </div>
        <SocialMedia data={SocialMediaIcon}/>
    </footer>
)

export default Footer