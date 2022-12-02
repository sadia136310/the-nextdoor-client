import React from 'react';
import img from '../../../images/download.jpg'
const Section = () => {
    return (
      <div className='my-4 mx-10'>
        <h2 className='text-purple-400 text-3xl text-center font-bold'>About Us</h2>
          <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={img} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">Our Collection!</h2>
          <p>Explore our second hand furniture in best price.Best & largest furniture online shop in Bangladesh..</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-warning">See More</button>
          </div>
        </div>
      </div>

      </div>

    );
};

export default Section;