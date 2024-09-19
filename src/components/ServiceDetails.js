// ServiceDetails.js
import React, { useState } from 'react';

const ServiceDetails = ({ services, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Initialize the current index

    if (!services || services.length === 0) return null; // No services selected or empty array

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length); // Loop back to the start
    };

    const service = services[currentIndex]; // Get the current service based on the index

    return (
        <div className="fixed inset-0 bg-slate-300 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-12 flex flex-col md:flex-row space-y-6 px-10 space-x-6">
                <div className='mt-6 ml-6 bg-slate-100 hover:bg-gray-300 p-5 text-center shadow-lg rounded-xl space-y-4'>

                <span className="close" onClick={onClose}>&times;</span>
                <h2>Service Details</h2>
                <div>
                    <p>{service.description}</p>
                   <p>{service.link}</p>
                   <img src={service.image}/>
                </div>
                <button onClick={handleNext} className="mt-4 px-3 py-2 bg-gradient-to-r from-fuchsia-300 to-purple-500 hover:from-pink-500 hover:to-purple-300 rounded-full">
                    Next
                </button>
                </div>
            </div>
        </div>
      
    );
};

export default ServiceDetails;
