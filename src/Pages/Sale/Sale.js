import React from 'react';


import img from "../../images/5.jpg"

const Sale = () => {
    return (
        <div className='mx-10 py-6'>
            <div className="hero rounded-xl" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Seasonal Sale on!</h1>
                    <p className="mb-5">Here is a Furniture Sale! Last minute furniture deals with Free Delivery and Assembly.</p>
                   
                </div>
            </div>
        </div>
        </div>
    );
};

export default Sale;