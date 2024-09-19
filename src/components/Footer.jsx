import React from 'react'

const Footer = () => {
  return (
    <div className='main border shadow-inner'>

    <div className=' bg-gray-200 flex flex-col md:flex-row justify-between space-y-2'>
        <div className=''>
            <p>@2024 Abhishek Singha<span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-5 flex flex-wrap justify-center'>
             <a href='/about'className='hover:underline'>About</a>
             <a href='/privacy'className='hover:underline'>Privacy Policy</a>
             <a href='/privacy'className='hover:underline'>Licencing</a>
             <a href='/about'className='hover:underline'>Contact</a>
             
        </div>
    </div>
    </div>
  )
}

export default Footer