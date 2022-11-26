import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { id, image, Category_name } = category;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl" style={{ width: '18rem' }}>


                <figure><img className='h-40 w-96'  src={image} alt='' /></figure>


                <div className="card-body">
                    <h2 className="card-title">{Category_name}</h2>


                    <div className="card-actions justify-end">
                        <Link to={`/categories/${id}`}>  <button className="btn btn-outline btn-warning">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;