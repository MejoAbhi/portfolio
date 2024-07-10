import React, { useState } from 'react';
//import { useRef } from 'react';
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Expretise from './Expretise'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

const Header = () => {



  const [brandName, setBrandName] = useState("Abhishek Singha");
  
  const [menuLinks, setMenuLinks] = useState([
    {
      title: 'Home',
      link: '/home',
      component:About,
      id: "1"
    },
    {
      title: 'Banner',
      link: '/banner',
      component: Banner ,
      id: "2"
    },
    {
      title: 'About',
      link: '/about',
      component: About ,
      id: "3"
    },
    {
      title: 'Service',
      link: '/service',
      component: Service ,
      id: "4"
    },
    {
      title: 'Expertise',
      link: '/expertise',
      component: Expretise ,
      id: "5"
    },
    
  ]);

  const actionButton = {
    title: "Hire Me",
    link: "/hire-me"
  };

  //this is for scrolling to the section here i have taken the id of that component and fetching the complete component by getelementById
  const scrollToSection = (sectionId) => {
    console.log("sectionId",sectionId)
    const section = document.getElementById(sectionId);
    console.log("section",section)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (

<div>
<div className='h-20 border main flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-16 bg-purple-600'>
  <div className='text-2xl font-bold'>
    <h1>{brandName}</h1>
  </div>
  <div className='flex flex-wrap justify-center gap-4'>

         
                  <Router>
                      <Link className=' hover:text-purple-300' to="/">Home</Link>
                      <Link className=' hover:text-purple-300' to="/banner" onClick={() =>scrollToSection("bannerId")}>Banner</Link>
                      <Link className=' hover:text-purple-300' to="/about"onClick={() =>scrollToSection("aboutId")}>About</Link>
                        <Link className=' hover:text-purple-300' to="/service"onClick={() =>scrollToSection("serviceId")}>Service</Link>
                       <Link className=' hover:text-purple-300' to="/expertise"onClick={() =>scrollToSection("expertiseId")}>Expertise</Link>
                       
                   
                   
                    <Routes>
                       {/* <Route exact path="/" component={About} /> */}
                        {menuLinks.map((link,index) => <Route key={index} exact path={`${link?.link}`}  component={link?.component}>Test</Route>)}
                      </Routes>
                  
                </Router>
   
  </div>
  <a href={actionButton.link} className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl'>
    {actionButton.title}
  </a>
</div>
</div>

  
  

  );
}

export default Header;
