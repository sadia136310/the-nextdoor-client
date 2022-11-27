import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);


const Payment = () => {
    const booking = useLoaderData();
    const { productName, resalePrice } = booking;

    return (
        <div className='my-4 py-3'>
            <h2 className='text-4xl'>Add To Card</h2>
           <div className=''>
           <h4 className='text-xl'>Payment for your selected furniture <strong>{productName} </strong></h4>
            <p className='text-xl'><strong>{productName}</strong> price  is <strong>{resalePrice}</strong></p>
           </div>

           <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;