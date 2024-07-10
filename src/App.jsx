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
