import React from 'react';
import { useLoaderData } from 'react-router-dom';

import ProductsDetails from '../Products/ProductsDetails';



const CategoriesDetails = () => {

    const categories = useLoaderData();
    console.log(categories);

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10'>
            {
          
              categories.map(category=><ProductsDetails key={category._id} category={category}></ProductsDetails>)
            }
        </div>
    );
};

export default CategoriesDetails;