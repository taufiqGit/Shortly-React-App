import React, { useContext } from 'react'
import { DataStatistic } from '../DataStatis/dataStatis'
import { Context } from '../App'

import Card from './card/cardStatistic'
import SubmitUrl from './formInput/submitUrl'
import ListResults from './listResult/ListResult'

function Main(){
    const {allResult, loading} = useContext(Context)
    return(
        <main className="w-full bg-AbuAbu pb-20 px-6 md:px-8 lg:px-10 xl:px-32"> 
           <SubmitUrl/>
           {
               loading ? <p className="text-center mb-12 text-3xl tracking-widest font-bold">Loading...</p> : ''
           }
           {
               allResult.length > 0 ? <ListResults dataResult={allResult}/> : ''
           }
           <section className="text-center flex flex-col items-center">
               <h2 className="text-3xl font-extrabold">Advanced Statistic</h2>
               <p className="text-xl font-semibold text-GrayishViolet max-w-xl">Track how your links are performing across the web with our 
                  advanced statistics dashboard.</p>
           </section>
           <section className="mt-16 h-auto flex flex-wrap justify-center">
                    {
                        DataStatistic.map((value, index)=> (
                            <Card key={index} data={value}/>
                        ))
                    }
           </section>
        </main>
    )
}

export default Main