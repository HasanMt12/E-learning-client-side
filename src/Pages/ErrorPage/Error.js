import React from 'react';
import Lottie from "lottie-react";
import error from "../../assets/error.json";
import './Error.css'
const Error = () => {
    return (
        <div>
           <div className='w-50 lottie'> <Lottie animationData={error} loop ={true}/></div >
           <a className='btn-homepage-back' href="/"> Go to Home</a>
        </div>
    );
};

export default Error;