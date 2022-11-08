import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52">
                        <li tabIndex={0}>
                            <a href='#/' className="justify-between">
                                Services
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2 w-52 bg-neutral text-neutral-content">
                                <Link className='p-2 text-base'>Wedding Photography</Link>
                                <Link className='p-2 text-base'>Fashion Photography</Link>
                                <Link className='p-2 text-base'>Product Photography</Link>
                                <Link className='p-2 text-base'>Food Photography</Link>
                                <Link className='p-2 text-base'>Sports Photography</Link>
                                <Link className='p-2 text-base'>Wild Photography</Link>

                            </ul>
                        </li>
                        <li><Link>My Service</Link></li>
                        <li><Link>My Reviews</Link></li>
                        <li><Link>Sign Out</Link></li>
                    </ul>
                </div>
                <a href='#/' className="btn btn-ghost normal-case text-xl">Photo Magic</a>
            </div>

            <div className="dropdown dropdown-bottom dropdown-end hidden lg:flex">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral text-neutral-content rounded-box w-52">
                    <li><Link className='p-2 text-base'>Wedding Photography</Link></li>
                    <li> <Link className='p-2 text-base'>Fashion Photography</Link></li>
                    <li><Link className='p-2 text-base'>Product Photography</Link></li>
                    <li><Link className='p-2 text-base'>Food Photography</Link></li>
                    <li><Link className='p-2 text-base'>Sports Photography</Link></li>
                    <li><Link className='p-2 text-base'>Wild Photographer</Link></li>
                </ul>
            </div>


            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0">
                    {/* <li tabIndex={0}>
                        <a href='#/'>
                            Servicessssss
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 w-52 bg-neutral text-neutral-content">
                            <li><Link className='p-2 text-base'>Wedding Photography</Link></li>
                            <li> <Link className='p-2 text-base'>Fashion Photography</Link></li>
                            <li><Link className='p-2 text-base'>Product Photography</Link></li>
                            <li><Link className='p-2 text-base'>Food Photography</Link></li>
                            <li><Link className='p-2 text-base'>Sports Photography</Link></li>
                            <li><Link className='p-2 text-base'>Wild Photographer</Link></li>
                        </ul>
                    </li> */}
                    <li><Link>My Service</Link></li>
                    <li><Link>My Reviews</Link></li>
                    <li><Link>Sign Out</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='#/' className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;