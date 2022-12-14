import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deletingUser, setDeletingUser] = useState(null);

    const closeModal = () => {
        setDeletingUser(null);
    }
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://the-nextdoor-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleAdminBtn = (id) => {
        fetch(`https://the-nextdoor-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin successfully!!")
                    refetch();
                }

            })
    }

    const handleDeleteProduct = (user) => {
        fetch(`https://the-nextdoor-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('User Deleted Successfully!!')
                    console.log(data);
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-4xl text-purple-300 font-bold m-10'>All users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                           
                            <th>Make Admin</th>
                            <th>Delete user</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' &&
                                    <button onClick={() => handleAdminBtn(user._id)} className='btn btn-xs btn-info'>Make Admin</button>

                                }</td>
                                

                                <td>
                                    <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className='btn btn-outline btn-warning'>Delete</label>

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>

                
            </div>
            {
                deletingUser &&
                <ConfirmationModal
                    title={`Are you sure Delete ?`}
                    message={`The user name ${deletingUser.name}`}
                    closeModal={closeModal}
                    handleDeleteProduct={handleDeleteProduct}
                    modalData={deletingUser}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;