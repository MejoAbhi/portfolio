import React, { useState } from 'react';
//import { useRef } from 'react';
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Expretise from './Expretise'
import Footer from './Footer'

const Header = () => {



  const [brandName, setBrandName] = useState("Abhishek Singha");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: 'Home',
      link: '/home',
      id: "1"
    },
    {
      title: 'About',
      link: '/about',
      id: "2"
    },
    {
      title: 'Service',
      link: '/skills',
      id: "3"
    },
    {
      title: 'Portfolio',
      link: '/portfolio',
      id: 4
    },
    {
      title: 'Contact',
      link: '/contact',
      id: 5
    }
  ]);

  const actionButton = {
    title: "Hire Me",
    link: "/hire-me"
  };

  return (
  

    <div>
      <div className='h-20 border main flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-16 bg-purple-600'>
        <div className='text-2xl font-bold'>
          <h1>{brandName}</h1>
        </div>
        <div className='flex flex-wrap justify-end gap-4'>
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className='hover:text-pink-100' >{link.title}</a>
          ))}
        </div>
        <a href={actionButton.link} className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl'>
          {actionButton.title}
        </a>
      </div>
    </div>



  
  

  );
}

export default Header;
