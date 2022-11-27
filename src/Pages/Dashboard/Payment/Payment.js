import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const { productName, resalePrice } = booking;

    return (
        <div className='my-4 py-3'>
            <h2 className='text-4xl'>Add To Card</h2>
           <div className='mt-5'>
           <h4 className='text-xl'>Payment for your selected furniture <strong>{productName} </strong></h4>
            <p className='text-xl'><strong>{productName}</strong> price  is <strong>{resalePrice}</strong></p>
           </div>
        </div>
    );
};

export default Payment;