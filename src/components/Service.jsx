

import React, { useState } from 'react';
import { webdev, smallProjects } from './MyTech'; 
import ServiceDetails from './ServiceDetails'; 

const Service = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [currentService, setCurrentService] = useState(null);

    const webdevFunction = () => {
        setCurrentService(webdev); 
        setShowDetails(true);
    };

    const backendFunction = () => {
        setCurrentService(smallProjects); 
        setShowDetails(true);
    };

    const closeModal = () => {
        setShowDetails(false);
        setCurrentService(null);
    };

    return (
        <div className='main py-16 md:py-16'>
            <h1 className='text-5xl text-bold underline text-center'>My Services</h1>
            <div className='service-container mt-12 flex flex-col md:flex-row space-y-6 px-10 space-x-6'>
                {/* <div className='service1 mt-6 ml-6 bg-slate-100 hover:bg-gray-300 p-5 text-center shadow-lg rounded-xl space-y-4'>
                    <i className="text-4xl fa-brands fa-aws"></i>
                    <h1 className='text-4xl'>Web Development</h1>
                    <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' onClick={webdevFunction}>Check</button>
                </div> */}

                <div className='bg-slate-100 p-5 mt-6 ml-6 hover:bg-gray-300 text-center service3 shadow-lg rounded-xl space-y-4'>
                    <i className="text-4xl fa-brands fa-android"></i>
                    <h1 className='text-4xl'>Small Projects</h1>
                    <p>I’ve embarked on several small projects that showcase my growing skills in web development. These projects, built with HTML, CSS, JavaScript, Tailwind CSS, and React, highlight my ability to create dynamic and responsive web applications. Each project serves a unique purpose. By utilizing Tailwind CSS, I achieved clean and modern designs while maintaining responsiveness across devices. React allowed me to implement interactive features, improving user engagement and experience. These projects not only demonstrate my technical abilities but also reflect my creativity and passion for web development.</p>
                    <button className='px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full text-1xl' onClick={backendFunction}>Check</button>
                </div>
            </div>

            {showDetails && (
                <ServiceDetails services={currentService} onClose={closeModal} />
            )}
        </div>
    );
}

export default Service;
