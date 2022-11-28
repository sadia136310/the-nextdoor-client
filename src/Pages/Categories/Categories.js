import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading,setLoading]=useState(false);
        useEffect(() => {
            setLoading(true);
            fetch('https://the-nextdoor-server.vercel.app/product')
                .then(res => res.json())
                .then(data => setCategories(data))
                setLoading(false)
    
        }, []);

        if(loading){
            return <Loading></Loading>
        }
    return (
        <div>
        <h3 className='text-xl font-bold text-center text-purple-400'>Furniture Categories</h3>
        <h3 className='text-3xl font-bold text-center'>  Our Furniture Collections!!</h3>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 mx-10'>
            {
               categories.map(category => <CategoryCard
                key={category._id}
                category={category}
               >
               </CategoryCard>
               )
            }
        </div>
    </div>
    );
};

export default Categories;