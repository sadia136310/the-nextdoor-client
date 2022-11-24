import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/download.png'
const Navbar = () => {
    const menuItems = <>
        <li className="font-semibold" > <Link to='/'>Home</Link></li>

        <li className="font-semibold" > <Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/add'>Add Service</Link></li>
        <li className='font-semibold'><Link to='/reviews'>My Reviews</Link></li>
        <li className='font-semibold'><Link to='/login'>Login</Link></li>
        {
            // user?.email ?
            <>
                <li className='font-semibold'>
                    {/* <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button> */}
                </li>
            </>
            // :
            // <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }


    </>
    return (
        <div className="navbar bg-sky-200">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}

                    </ul>
                </div>
                <img className='h-10 rounded-xl ' src={img} alt="" />
                <h1 className="btn btn-ghost normal-case text-lg font-bold text-purple-500">The Nextdoor</h1>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    {menuItems}

                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;