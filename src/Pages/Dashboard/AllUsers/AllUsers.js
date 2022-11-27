import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    const handleVerifyBtn=(id)=>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div>
            <h2 className='text-3xl font-bold m-10'>All users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User verify</th>
                            <th>Delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users.map((user,i)=><tr key={user._id}>
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'verified' && 
                                    <button onClick={()=>handleVerifyBtn(user._id)} className='btn btn-xs btn-info'>User verify</button>
                                   
                                }</td>
                                <td><button className='btn btn-xs btn-error'>Delete user</button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;