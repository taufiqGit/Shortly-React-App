import React, {useContext, useState} from 'react';

import {Context} from '../../App'
import {RegexValidUrl} from '../../utils/regexValidationUrl'

const SubmitUrl =()=>{
    const {urlTxt, setTextUrls, SendLinkToShorthen, setLoadingUrl, loading} = useContext(Context)

    const [emtyString, setEmtyString] = useState(false)
    const [isNotUrl, setIsNotUrl] = useState(false)

    const SubmitUrl =()=>{
        if(urlTxt === ""){
           setEmtyString(true)
           setIsNotUrl(false)
           console.log("Kosong, mohon diisi")
        } else{
            if (RegexValidUrl.test(urlTxt)) {
              setEmtyString(false)
              setIsNotUrl(false)
              setLoadingUrl(true)
              SendLinkToShorthen(urlTxt)
            } else {
                setIsNotUrl(true)
                setTextUrls(false)
                console.log("bukan url")
            }
        }
     }

    return(
        <section className="container flex flex-col lg:flex-row mx-auto h-auto -top-12 p-8 relative rounded-md bg-cover bg-no-repeat bg-shorten-mobile lg:bg-shorten-desktop bg-DarkViolet">
            <input onChange={(e) => setTextUrls(e.target.value)} className={`flex-grow rounded-lg lg:mr-2 py-3 px-4 text-xl ${emtyString || isNotUrl ? 'border-Red border-2':''}`} type="text" placeholder="Shorten a link here..."/>
            <p className={`absolute text-sm text-Red italic top-90px ${emtyString || isNotUrl ? 'block':'hidden'}`}>{isNotUrl ? "It's not link":"Plaease add a link"}</p>
            <button onClick={SubmitUrl} disabled={loading} className="flex-grow-0 px-8 py-3 mt-6 lg:mt-0 bg-Cyan rounded-lg text-White text-lg font-semibold hover:bg-opacity-50 focus:shadow-outline">Shorten It!</button>
        </section>
    )
}

export default SubmitUrl