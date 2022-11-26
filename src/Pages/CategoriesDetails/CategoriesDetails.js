import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

import ProductsDetails from '../Products/ProductsDetails';



const CategoriesDetails = () => {

    const categories = useLoaderData();
    // console.log(categories);

    const [products, setProducts] = useState('null');
    

    return (
        <section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10'>
                {

                    categories.map(category => <ProductsDetails
                        key={category._id}
                        category={category}

                        setProducts={setProducts}

                    ></ProductsDetails>)
                }
            </div>
            {products && <BookingModal
                products={products}
                setProducts={setProducts}
            ></BookingModal>}
        </section>
    );
};

export default CategoriesDetails;