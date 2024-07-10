import React from 'react'

const Expretise = () => {
  return (
    <div className='space-y-6'>
        <h1 className='text-center font-bold text-4xl md:text-5xl underline'>Expertise</h1>
        <div className='box-container items-center flex flex-col md:flex-row md:max-w-full '>
            <div className='flex justify-center py-6 text-white bg-gradient-to-r from-indigo-500 via-purple-300 to-white'>
                <div className='w-2/3 text-center space-y-5'>
                <h1 className='text-2xl font-semibold md:text-3xl'>I love these Technologies</h1>
                <p className='text-xl md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla dolorem quia cum nesciunt optio ducimus quasi rem voluptates, incidunt veniam quaerat. Recusandae odit placeat labore fugiat magnam tempore maxime?</p>
                <button className='md:text-2xl px-4 py-2  bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' href='/contact'> Hire Me</button>
                </div>
            </div>
            {/* skills container */}
            <div className='flex justify-center mt-4'>
                <div className='flex space-x-3 justify-center flex-wrap space-y-3'>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-4 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Core Java</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Java-J2EE</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Spring Framework</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Spring Boot Framework</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Spring Security</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Microservices</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>MySql</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Git</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2  px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Jenkins</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>Docker</p>
                <p className='bg-slate-300 text-xl md:text-2xl mt-2 px-3 py-2 rounded-full hover:bg-purple-400 cursor-pointer'>React js</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expretise