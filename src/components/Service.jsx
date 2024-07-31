import React, { useState } from 'react'
import WebServices from './WebServices'

const Service = () => {
    const [WebServicesModal,setWebServiceModal]=useState(false)
    const [modalType,setModalType]=useState()
    console.log("WebServicesModal",WebServicesModal)
    //for scrolling
    


    const[data1,setData1]=useState({
        id:"id",
        title:"Web Development",
        description:`Welcome to my full-stack project portfolio! Here, you'll find a collection of web applications that showcase my skills in creating both beautiful and functional websites. Each project uses a mix of Spring Boot, Java, and ReactJS for the back end, along with Tailwind CSS and Bootstrap for the design. From online stores to social media tools,I blend front-end design with back-end technology to build user-friendly and efficient applications. Enjoy browsing through these examples of how I turn ideas into effective and engaging web solutions.`
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
        description:`Welcome to my full-stack project portfolio! Here, you'll find a collection of web applications that showcase my skills in creating both beautiful and functional websites. Each project uses a mix of Spring Boot, Java, and ReactJS for the back end, along with Tailwind CSS and Bootstrap for the design. From online stores to social media tools,I blend front-end design with back-end technology to build user-friendly and efficient applications. Enjoy browsing through these examples of how I turn ideas into effective and engaging web solutions.`
    }
)
    const handelModalOpen=(test)=>{
        setModalType(test)
        setWebServiceModal(true)
    }
  return (
    <>
    <div id='serviceId'  className='main py-16 md:py-16 shadow-xl'>
        <h1 className='text-5xl text-bold underline text-center'>My Services</h1>
        <div className='service-container mt-12 flex  flex-col md:flex-row space-y-6  px-10 space-x-6'>
            <div className='service1 mt-6 ml-6 bg-slate-100 hover:bg-gray-300 p-5 text-center shadow-lg rounded-xl space-y-4  '>
            <i class="text-4xl fa-brands fa-aws"></i>
            <h1 className='text-3xl md:text-4xl'>{data1.title}</h1>
            <p>{data1.description}</p>
            {/* <a href={WebServices} className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl'>Check</a> */}

            {/* <button onClick={()=>handelModalOpen("service")} type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-toggle-between-modals-first-modal" data-hs-overlay="#hs-toggle-between-modals-first-modal">Open modal</button> */}

            <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' onClick={()=>handelModalOpen("service")}>Check</button>
            
            </div>


            <div className='bg-slate-100 p-5 mt-6 ml-6 hover:bg-gray-300 text-center service2 shadow-lg rounded-xl space-y-4'>
           
            <i class="text-4xl fa-brands fa-java"></i>
            <h1 className='text-4xl'>{data3.title}</h1>
            <p>{data3.description}</p>
            <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' onClick={()=>handelModalOpen("backendService")}>Check</button>
            </div>


            
            
        </div>
    </div>
    {WebServicesModal && <WebServices WebServicesModal={WebServicesModal} setWebServiceModal={setWebServiceModal} modalType={modalType}/>}
    </>
  )
}

export default Service