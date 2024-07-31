import React, { useEffect, useRef } from 'react'
import bannerImage from '../assets/bg1.png';
import bannnerBackground from '../assets/final.png';
import Typed from 'typed.js';

import resume from 'https://github.com/MejoAbhi/portfolio/raw/src/assets/Abhishek-Singha resume.pdf'
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
    <div id='bannerId'  className='main flex flex-col md:flex-row items-center h-full shadow-xl'>
       {/* this is text portion */}
        <div 
        className=' w-full py-10 flex justify-center bg-gradient-to-r from-indigo-500 via-purple-300 to-white'>
          <div className='w-2/3 space-y-2 ms-2'>
          <h3 className='text-xl md:text-2xl lg:text-3xl font-bold'>Hi, I am</h3>
          <h1 className='text-xl md:text-2xl lg:text-5xl font-bold'>Abhishek Singha</h1>
          <h4 className='text-xl md:text-3xl lg:text-4xl'>I am a <span className="" ref={el}></span></h4>
          <p className='text-1xl'>Experienced in leveraging cutting-edge technologies to meet and exceed project goals</p>
      
       <div className='iconContainer space-x-2'>
       <a className='' href='https://github.com/MejoAbhi'><i class="fa-brands text-4xl  fa-github"></i></a>
      <a className=''href='https://www.linkedin.com/in/abhishek-singha-65788520a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><i class="fa-brands text-4xl fa-linkedin"></i></a> 
       </div>
       
        <br/>
        {/* <a className=' bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate text-1xl' href={resume} download={resume}> Download CV <i class="fa-solid fa-download"></i></a>      */}
        <a className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400" href={resume} download="Abhishek-Singha resume.pdf">
  Download CV   <i class="fa-solid fa-download"></i>
</a>
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
