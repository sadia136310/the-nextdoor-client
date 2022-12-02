import React from 'react';

import img from '../../../images/imagee.jpg';

const Banner = () => {
    return (

        <div className='my-4'>
            <div className="hero min-h-screen rounded">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-lg max-w-md rounded-lg" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to the <span className='text-purple-400'>Nextdoor!!</span></h1>
                        <br />
                        <h3 className="text-2xl font-bold">Smart Solutions for Modern Living.!</h3>
                        <br />
                        <button className="btn btn-outline btn-warning">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;