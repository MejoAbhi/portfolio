import React, { useEffect, useRef } from 'react'
import bannerImage from '../assets/bg1.png';
import bannnerBackground from '../assets/final.png';
import Typed from 'typed.js';
import FontAwesome from 'react-fontawesome'

const Banner = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div   className='main flex flex-col md:flex-row items-center h-full '>
       {/* this is text portion */}
        <div 
        className=' w-full  py-6 flex justify-center bg-gradient-to-r from-indigo-500 via-purple-300 to-white'>
          <div className='w-2/3 space-y-2 '>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Hi, I am</h3>
          <h1 className='text-xl md:text-2xl lg:text-5xl font-bold'>Abhishek Singha</h1>
          <h4 className='font-bold md:text-3xl lg:text-4xl'>I am a <span className="" ref={el}></span></h4>
          <p className='text-1xl'>Experienced in leveraging cutting-edge technologies to meet and exceed project goals</p>
      
       <div className='iconContainer space-x-2'>
       <a className='' href='https://github.com/MejoAbhi'><i class="fa-brands fa-github"></i></a>
      <a className=''href='https://www.linkedin.com/in/abhishek-singha-65788520a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a> 
       </div>
       
        <br/>
        <a className=' px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' href='/contact'> Contact Me</a>     
            </div>  
      </div>

      {/* image portion */}
        <div className=' w-fit flex justify-center'>
            <img  className='rounded-full shadow w-fit' src={bannerImage}/>
        </div>

    </div>
  )
}

export default Banner
