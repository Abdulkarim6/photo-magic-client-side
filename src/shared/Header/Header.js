import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    };

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/allservices'>Services</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myreviews'>My Reviews</Link></li>
                    <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>
                    <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className="btn btn-ghost">Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-neutral text-neutral-content rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <strong className="btn btn-ghost normal-case text-xl">Photo Magic</strong>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;