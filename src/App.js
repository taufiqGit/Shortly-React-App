import React, {createContext, useState} from 'react'

//componenent
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Main from './component/Main';
import Boster from './component/Boster';
import Footer from './component/Footer';

// root css with tailwindCss
import './App.css';

import {getShortUrl} from './utils/fetchUrl'

// create Context
export const Context = createContext()

const DataResult = []

function App() {
  
  const [urlTxt, setUrlText] = useState("")
  const [allResult, setAllResult] = useState(DataResult)
  const [loading, setLoading] = useState(false)

  const setTextUrls =(val)=>{
    setUrlText(val)
  }

  const setLoadingUrl =(bolLoading)=>{
    setLoading(bolLoading)
  }

  const SendLinkToShorthen = (value)=>{
    getShortUrl(value)
    .then(res =>{
      setAllResult(current => [res, ...current])
      setLoading(false)
    })
    .catch(err => {
      alert("please check your signal internet !!!")
      console.log(err)
    })
  }

  const Handles = {urlTxt, allResult, setTextUrls, SendLinkToShorthen, loading, setLoadingUrl}
  
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