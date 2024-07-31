import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Expretise from './components/Expretise'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import WebServices from './components/WebServices'
//import MainPage from './components/MainPage'
//import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Header/>}/>
      </Routes> */}
      <Header/>
      <Banner/>
      <About/>
      <Service />
      <Expretise/>
      <Footer/>
     
    </>
  )
}

export default App






























// <div id="hs-toggle-between-modals-first-modal" classNameName="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-toggle-between-modals-first-modal-label">
    // <div classNameName="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
    //     <div classNameName="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
    //     <div classNameName="flex justify-between items-center py-3 px-4 border-b">
    //         <h3 id="hs-toggle-between-modals-first-modal-label" classNameName="font-bold text-gray-800">
    //         Movie Management System
    //         </h3>
    //         <button type="button" classNameName="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-toggle-between-modals-first-modal" data-hs-overlay-close="">
    //         <span classNameName="sr-only">Close</span>
    //         {/* <svg classNameName="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //             <path d="M18 6 6 18"></path>
    //             <path d="m6 6 12 12"></path>
    //         </svg> */}
    //         </button>
    //     </div>
    //     <div classNameName="p-4 overflow-y-auto">
    //         <p classNameName="mt-1 text-gray-800">
    //         Show a second modal and hide this one with the button below.
    //         </p>
    //     </div>
    //     </div>
    //  </div>
    // </div>
    