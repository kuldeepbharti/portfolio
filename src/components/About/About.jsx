import React from 'react'


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            MERN Stack Development
                        </h2>
                        <p className="mt-6 text-gray-600">
                        A MERN Stack Developer is responsible for designing, developing, and maintaining web applications using the MERN technology stack. Their role includes both frontend and backend development, ensuring seamless performance and optimal user experience.</p>
                        <p className="mt-4 text-gray-600">
                        MERN stack, an acronym for MongoDB, Express.js, React, and Node.js, is a robust technology stack widely used for building modern web applications. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}