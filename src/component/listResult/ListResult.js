import React from 'react'

const ListResults =({dataResult})=>{

    const copyToClipboard = async(copyMe)=>{
        try {
            await navigator.clipboard.writeText(copyMe);
            console.log('success')
            //setCopySuccess('Copied!');
          } catch (err) {
              console.log(err)
            //setCopySuccess('Failed to copy!');
          }
    }
    
    return(
        <section className="mb-16">
            {
                dataResult.map((res, idx)=>{
                   return res === undefined ? alert('please check your internet connection !!!') : res.status ? 
                    (
                        <div key={idx} className="flex flex-col md:flex-row justify-between bg-White h-auto rounded-md my-4 py-4 px-4">
                            <div className="flex flex-col md:flex-row w-full relative md:items-center justify-between">
                                <span className="text-lg my-2 md:my-0 text-VeryDarkViolet font-semibold">{res?.data?.original}</span>
                                <hr className="md:hidden"/>
                                <span className="text-Cyan my-2 md:my-0 pr-3 text-lg font-semibold">{`${process.env.REACT_APP_API_2}/${res.data.short}`}</span>
                            </div>
                            <button onClick={()=> copyToClipboard(`${process.env.REACT_APP_API_2}/${res.data.short}`)} className="bg-Cyan my-2 md:my-0 text-White font-bold rounded-md w-20 h-8 hover:shadow-lg focus:bg-DarkViolet">COPY</button>
                        </div>
                    )                   
                   : (
                       <div key={idx} className="bg-White h-auto rounded-md my-4 py-4 px-4">
                           <p className="font-bold text-Red">{res.message}</p>
                       </div>
                   )
                })
            }
        </section>
    )
}

export default ListResults