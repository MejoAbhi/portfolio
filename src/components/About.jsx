import React, { useState } from 'react'
import aboutAvater from '../assets/avater1.png';

const paragraphStyles={
  WebkitLineClamp:5,
  WebkitBoxOrient:'vertical',
  overflow:'hidden',
  display:'-webkit-box'
}
const About = () => {
     const[isOpen,setIsOpen]=useState(false);
    const[data,setData]= useState({
       image:aboutAvater,
       title:"Java Backend Developer",
       desc1:`With 2 years' experience, I innovate with Spring Boot, RESTful APIs, and microservices, delivering advanced Java backend solutions that prioritize scalability, performance, and user-centric design.`,
       desc2:`As a Java backend developer with 2 years of experience, I specialize in developing scalable applications using Java EE/SE, Spring Boot, and RESTful APIs. I have a strong grasp of ORM frameworks like Hibernate for database interactions and implement microservices architecture for robust scalability. Proficient in version control with Git, I ensure code quality through unit testing (JUnit) and continuous integration (CI/CD). Agile methodologies drive my development process, enabling rapid iteration and delivery of backend solutions. My expertise includes optimizing SQL queries and leveraging caching mechanisms like radis for performance enhancements.`
     })
   
  return (
    <div className='main md:py-16 md:px-16 '>
       {/* bg-gradient-to-b from-gray-100 to-slate-50  */}
       <h1 className='text-center text-5xl underline font-bold'>About </h1>
       <div className='flex items-center py-2 flex-col-reverse md:flex-row  h-full'>
        {/* image container */}
        <div className='w-fit justify-center'>
          
        <img className='w-full' src={data.image}/>
        </div>
        {/* text container */}
        <div className='w-full flex justify-center md:justify-end'>
         
          <div className='space-y-5 w-2/3'>
          <h1 className='text-3xl  font-semibold'>{data.title}</h1>
          <p>{data.desc1}</p>

          <p style={isOpen ? null:paragraphStyles}>{data.desc2}</p>
          <button className=' px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? 'Read less...' :'Read more...'}</button>
          </div>
        </div>

       </div>

        {/* <div className='about-photo ml-10'>
        <img className='h-80' src={aboutAvater}/>
       </div>
       <div className='about-me justify-center items-center'>
          
        <div className='space-y-2 ms-10 mx-20'>
       <h1 className='text-5xl font-semibold ml-40'>About myself</h1>
        <p>Lorem ipsum dolor sit amet, consectet4ur adipisicing elit. Possimus numquam similique commodi voluptatum sunt qui quam veniam sint omnis cum!</p>
        </div>
       </div> */}
    </div>
  )
}

export default About
