import React, { useState } from 'react'

const Service = (serviceRef) => {
    //for scrolling
    


    const[data1,setData1]=useState({
        id:"id",
        title:"Web Development",
        description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius a debitis, qui at ea aut illum quam? Voluptate, excepturi autem.`
    }
)
    const[data2,setData2]=useState({
        id:"id",
        title:"App Development",
        description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius a debitis, qui at ea aut illum quam? Voluptate, excepturi autem.`
    }
)

    const[data3,setData3]=useState({
        id:"3",
        title:"Backend Development",
        description:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius a debitis, qui at ea aut illum quam? Voluptate, excepturi autem.`
    }
)
  return (
    <div   className='main py-16 md:py-16 '>
        <h1 className='text-5xl text-bold underline text-center'>My Services</h1>
        <div className='service-container mt-12 flex flex-col md:flex-row space-y-6  px-10 space-x-6'>
            <div className='service1 mt-6 ml-6 bg-slate-100 hover:bg-gray-300 p-5 text-center shadow-lg rounded-xl space-y-4  '>
            <i class="text-4xl fa-brands fa-aws"></i>
            <h1 className='text-4xl'>{data1.title}</h1>
            <p>{data1.description}</p>
            <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl'>Check</button>
            </div>


            <div className='bg-slate-100 p-5 mt-6 ml-6 hover:bg-gray-300 text-center service2 shadow-lg rounded-xl space-y-4'>
           
            <i class="text-4xl fa-brands fa-java"></i>
            <h1 className='text-4xl'>{data2.title}</h1>
            <p>{data2.description}</p>
            <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl'>Check</button>
            </div>


            <div className='bg-slate-100 p-5 mt-6 ml-6 hover:bg-gray-300 text-center service3 shadow-lg rounded-xl space-y-4'>
            <i class="text-4xl fa-brands fa-android"></i>
            <h1 className='text-4xl'>{data3.title}</h1>
            <p>{data3.description}</p>
            <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl'>Check</button>
            </div>
            
        </div>
    </div>
  )
}

export default Service