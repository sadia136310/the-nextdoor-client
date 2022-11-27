import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='text-center mt-20'>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-540'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button className='btn-primary p-2 rounded-xl' onClick={handleLogOut}>Sign Out</button> </h4>
        </div>
    );
};

export default DisplayError;