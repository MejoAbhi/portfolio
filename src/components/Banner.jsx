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
      
       <div className='iconContainer space-x-2 flex'>
       <a className='' target='_blank' href='https://www.linkedin.com/in/abhishek-singha-65788520a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'> <svg fill="none" viewBox="0 0 15 15" height="2em" width="3em" >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 1.5A1.5 1.5 0 011.5 0h12A1.5 1.5 0 0115 1.5v12a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 010 13.5v-12zM5 5H4V4h1v1zm-1 6V6h1v5H4zm4.5-4A1.5 1.5 0 007 8.5V11H6V6h1v.5a2.5 2.5 0 014 2V11h-1V8.5A1.5 1.5 0 008.5 7z"
        clipRule="evenodd"
      />
    </svg></a>
      <a className='' target='_blank' href='https://github.com/MejoAbhi'> <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="2em"
      width="3em"
      
    >
      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
    </svg></a> 
       </div>
       
        <br/>
        
        <div className=' flex'>

        {/* <a className=' px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' href='/contact'> Contact Me</a> 
             */}
     <a className="button flex gap-2 bg-black text-white rounded p-2" href='/AbhishekSingha-Resume.pdf' download = "AbhishekSingha-Resume.pdf">
      Download Resume <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      color='white'
      
    >
      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v242.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-32c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 104c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" />
    </svg>
    </a>
    
        </div>
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
