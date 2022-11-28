import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const SellerProduct = () => {
    const { user, loader } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }



    const url = `http://localhost:5000/product_categories?email=${user?.email}`

    const { data: addProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['addProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if (loader) {
        return <progress className="progress w-56"></progress>
    }

    const handleDeleteProduct = (product) => {
        fetch(`http://localhost:5000/product_categories/${product._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product Deleted Successfully!!')
                    console.log(data);
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl font-bold m-5 text-purple-400'>My selling products..!!</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th> image</th>
                            <th> Name</th>
                            <th> price</th>
                            <th>phone</th>
                            <th> location</th>
                            <th> used</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            addProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <th><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={product.productPhoto} alt='' />
                                    </div>
                                </div></th>
                                <td>{product.sellerName}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.sellerPhoneNumber}</td>
                                <td>{product.location}</td>
                                <td>{product.yearOfUse}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className='btn btn-outline btn-warning'>Delete</label>

                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingProduct &&
                <ConfirmationModal
                    title={`Are you sure Delete ?`}
                    message={`This product name ${deletingProduct.productName}`}
                    closeModal={closeModal}
                    handleDeleteProduct={handleDeleteProduct}
                    modalData={deletingProduct}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default SellerProduct;