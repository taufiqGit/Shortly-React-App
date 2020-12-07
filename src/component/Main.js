import React, { useContext } from 'react'
import { DataStatistic } from '../DataStatis/dataStatis'
import { Context } from '../App'

import Card from './card/cardStatistic'
import SubmitUrl from './formInput/submitUrl'
import ListResults from './listResult/ListResult'

function Main(){
    const {allResult} = useContext(Context)
    return(
        <main className="w-full bg-AbuAbu pb-20 px-6 lg:px-24 xl:px-32"> 
           <SubmitUrl/>
           {
               allResult.length > 0 ? <ListResults dataResult={allResult}/> : ''
           }
           <section className="text-center flex flex-col items-center">
               <h2 className="text-3xl font-extrabold">Advanced Statistic</h2>
               <p className="text-xl font-semibold text-GrayishViolet max-w-xl">Track how your links are performing across the web with our 
                  advanced statistics dashboard.</p>
           </section>
           <section className="mt-16 h-auto flex flex-col lg:flex-row">
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