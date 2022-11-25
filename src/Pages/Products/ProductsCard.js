import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const { _id, sellerName, sellerPhoneNumber, purchaseYear, originalPrice, productName, productPhoto, resalePrice, yearOfUse, postTime,
        description, condition, category, location } = product;

    return (
        <div>
            <div className="card card-compact w-96  bg-base-100 shadow-xl" style={{ width: '18rem' }}>


                <figure><img src={productPhoto} alt='' /></figure>

                <div className="card-body">
                    <h2 className="card-title text-2xl"> {productName}</h2>

                    <p className='text-xl'>Seller Name: {sellerName}</p>
                    <p className='text-xl'>Seller phone No: {sellerPhoneNumber}</p>
                    <p className='text-xl'>Selling Price: ${resalePrice}</p>
                    <p className='text-xl'>Buying Price: ${originalPrice} </p>
                    <p className='text-xl'>Condition: {condition}</p>
                    <p className='text-xl'>Location: {location}</p>
                    <p className='text-xl'>PurchaseYear: {purchaseYear}</p>
                    <p className='text-xl'>Year of Use: {yearOfUse}</p>
                    <p className='text-xl'>PostTime: {postTime}</p>

                    <p className='text-xl'>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>  <button className="btn btn-outline btn-warning">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;




