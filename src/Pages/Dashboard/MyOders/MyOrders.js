import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>payment</th>
                    </tr>
                </thead>
                <tbody>





                    {
                        bookings &&
                        bookings?.map((booking, i) => <tr
                            key={booking._id}
                        >
                            <th>{i + 1}</th>
                            <td><div className="avatar">
                                <div className="w-24 rounded-full">
                                    {/* <img src={}alt=" " /> */}
                                </div>
                            </div></td>
                            <td>{booking?.productName}</td>
                            <td>{booking.resalePrice}</td>
                            <td>
                                {
                                        booking.resalePrice && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.resalePrice && booking.paid && <span className='text-green-500'>Paid</span>
                                    }

                                {/* <button
                                    className='btn btn-primary btn-sm'
                                >Pay</button> */}
                            </td>
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;