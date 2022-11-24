import React from 'react';

import img1 from '../../../images/s6.webp';
import img2 from '../../../images/s7.jpg';
import img3 from '../../../images/Slider-8.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full my-14">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt='' className="w-full h-96 " />
                <div className="absolute transform -translate-y-1/2 left-12 top-2/4">
                    <h1 className='text-5xl text-white'>Welcome to the nextdoor.</h1>

                    <p className='text-4xl text-white'>Smart Solutions for Modern Living.!</p>

                    <div className="card-actions">
                        <button className="btn btn-outline">Discover More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full h-96 " />

                <div className="absolute transform -translate-y-1/2 left-12 top-2/4">
                    <h1 className='text-5xl text-white'>Welcome to the nextdoor.</h1>

                    <p className='text-4xl text-white'>Smart Solutions for Modern Living.!</p>

                    <div className="card-actions">
                        <button className="btn btn-outline">Discover More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} alt='' className="w-full h-96" />

                <div className="absolute transform -translate-y-1/2 left-12 top-2/4">
                    <h1 className='text-5xl text-white'>Welcome to the nextdoor.</h1>

                    <p className='text-4xl text-white'>Smart Solutions for Modern Living.!</p>
                    <div className="card-actions">
                        <button className="btn btn-outline">Discover More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-3/4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;