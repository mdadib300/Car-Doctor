import React from 'react';
import brandLogo from '../../assets/logo.svg';

const Navigation = () => {
    return (
        <div className="navbar bg-base-100 py-2 lg:py-[50px] px-2 lg:px-[150px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='*'>Home</a></li>
                        <li><a href='*'>About</a></li>
                        <li><a href='*'>Services</a></li>
                        <li><a href='*'>Blog</a></li>
                        <li><a href='*'>Contact</a></li>
                    </ul>
                </div>
                <a href='*'><img src={brandLogo} alt='Brand logo' className="w-[100px] h-[90px]"></img></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='*'>Home</a></li>
                    <li><a href='*'>About</a></li>
                    <li><a href='*'>Services</a></li>
                    <li><a href='*'>Blog</a></li>
                    <li><a href='*'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='*' className="btn btn-outline btn-primary">Appointment</a>
            </div>
        </div>
    );
};

export default Navigation;