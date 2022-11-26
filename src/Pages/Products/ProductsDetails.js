import React from 'react';

const ProductsCard = ({ category, setProducts }) => {
    const { sellerName, sellerPhoneNumber, purchaseYear, originalPrice, productName, productPhoto, resalePrice, yearOfUse, postTime,
        description, condition, location } = category;

    return (
        <div>
            <div className="card card-compact w-96 h-full  bg-base-100 shadow-xl" style={{ width: '18rem' }}>


                <figure><img className='h-40 w-full' src={productPhoto} alt='' /></figure>

                <div className="card-body">
                    <h2 className="card-title text-2xl"> {productName}</h2>

                    <p>Seller Name: {sellerName}</p>
                    <p>Seller phone No: {sellerPhoneNumber}</p>
                    <p>Selling Price: ${resalePrice}</p>
                    <p>Buying Price: ${originalPrice} </p>
                    <p>Condition: {condition}</p>
                    <p>Location: {location}</p>
                    <p>PurchaseYear: {purchaseYear}</p>
                    <p>Year of Use: {yearOfUse}</p>
                    <p>PostTime: {postTime}</p>

                    <p>Description: {description}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="booking-modal" className="btn btn-outline btn-warning" onClick={() => setProducts(category)}
                        
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
