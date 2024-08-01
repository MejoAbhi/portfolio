import movieflix from '../assets/movieflix.jpg';
import React, { useState } from 'react';

const WebServices = ({ WebServicesModal, setWebServiceModal, modalType }) => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [desc, setDescription] = useState('');
    const [image, setImage] = useState('');

    let web =[
      {
        "name": "Movie management System",
        "id": 0,
        "image":movieflix,
        "description": `The Online Movie Management Web Application is a comprehensive platform designed to enhance the movie-going experience. Built using React JS and Bootstrap for a responsive and user-friendly frontend, and Spring Boot for a robust backend, the application offers a seamless way for users to explore movie listings.

      Users can browse through a wide range of movies, access detailed information including showtimes and theatre locations, and book tickets with ease. A secure login page ensures that users are authenticated before proceeding to the payment gateway, safeguarding their personal and payment information.

      For administrators, the application provides a secure and intuitive dashboard. This dashboard facilitates full CRUD (Create, Read, Update, Delete) operations on movie, show, and theatre data, allowing for efficient management of the entire movie ecosystem. The system employs advanced authentication mechanisms to ensure the security of both user and administrator accounts.

  MySQL serves as the underlying database, ensuring reliable data storage and retrieval to support the dynamic nature of the application. Overall, the Online Movie Management Web Application combines modern technologies and secure practices to deliver a robust and enjoyable user experience.`
      },

      {
        "name": "Food delivary App",
        "id": 1,
        "image":movieflix,
       "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi odit, quia ratione fugiat quidem minima corrupti saepe vitae iusto."
      },

      {
        "name": "Charlie",
        "id": 2,
        "image":movieflix,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi odit, quia ratione fugiat quidem minima corrupti saepe vitae iusto."
      }
    ]

    let backend =[
      {
        "name": "Backend 1",
        "id": 0,
        "image":movieflix,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi odit, quia ratione fugiat quidem minima corrupti saepe vitae iusto."
      },

      {
        "name": "Backend2",
        "id": 1,
        "image":movieflix,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi odit, quia ratione fugiat quidem minima corrupti saepe vitae iusto."
      },

      {
        "name": "Charlie",
        "id": 2,
        "image":movieflix,
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quasi odit, quia ratione fugiat quidem minima corrupti saepe vitae iusto."
      }
    ]

    const handleNext = (data) => {
        setCount((previous) => previous + 1);

        if (data?.length > count) {
            if (modalType === "service") {
                setText(web[count].name);
                setDescription(web[count].description);
                setImage(web[count].image);
            } else if (modalType === "backendService") {
                setText(backend[count].name);
                setDescription(backend[count].description);
                setImage(backend[count].image);
            }
        }
    };

    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 ">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                                            {modalType === "service" ? "Web Development " : "Backend Development"}
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-lg text-black">{text}</p>
                                            <p className="text-sm text-gray-500">{desc}</p>
                                            {image && <img className='rounded-s shadow w-fit' src={image} alt={text} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button 
                                    type="button" 
                                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" 
                                    onClick={() => modalType === "service" ? handleNext(web) : handleNext(backend)}
                                >
                                    Next
                                </button>
                                <button  
                                    type="button" 
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" 
                                    onClick={() => setWebServiceModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebServices;
