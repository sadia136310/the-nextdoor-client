import React from 'react';
import img from '../../../images/s6.webp'
const Section = () => {
    return (
        <div className='mx-10 my-4'>
            <div className="hero min-h-screen bg-base-200 rounded">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">About Us Our Collection!</h1>
                        <p className="py-6">Explore our second hand furniture in best price.Best & largest furniture online shop in Bangladesh.</p>
                        <button className="btn btn-outline btn-warning">About More</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Section;