import React, {createContext, useState} from 'react'

//componenent
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Main from './component/Main';
import Boster from './component/Boster';
import Footer from './component/Footer';

// root css with tailwind
import './App.css';

import {getShortUrl} from './utils/fetchUrl'
//context
export const Context = createContext()

const DataResult = []

function App() {
  
  const [urlTxt, setUrlText] = useState("")
  const [allResult, setAllResult] = useState(DataResult)

  const setTextUrls =(val)=>{
    setUrlText(val)
  }

  const SendLinkToShorthen = async(value)=>{
    const Hasil = await getShortUrl(value)
    if(Hasil === undefined){
      alert("ceck your connection")
    }else{
      setAllResult(curr => [Hasil, ...curr])
    }
    
  }

  const Handles = {urlTxt, allResult, setTextUrls, SendLinkToShorthen}
  console.log(allResult)
  return (
      <Context.Provider value={Handles}>
        <Navbar/>
        <Hero/>
        <Main/>
        <Boster/>
        <Footer/>      
      </Context.Provider>
  );
}

export default App;