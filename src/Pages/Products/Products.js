import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import ProductsCard from './ProductsCard';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/AllProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)

    }, []);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10'>
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)

                }
            </div>
        </div>
    );
};

export default Products;