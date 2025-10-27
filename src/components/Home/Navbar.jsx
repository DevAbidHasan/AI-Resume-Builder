import React from 'react';
import { Link, useNavigate } from 'react-router';
import logo from "../../assets/logo.svg"

const Navbar = () => {


    const user = {
        name : "John Doe",

    }

    const navigate = useNavigate();
    const logoutUser = () =>{
        navigate("/");
    }


    return (
        <div className='shadow bg-white'>
            <nav className='flex items-center justify-between max-w-7xl mx-auto px-6 py-3.5'>
                <Link to="/">
                    <img src={logo} alt="logo" className='h-11 w-auto' />
                </Link>
                <div className='flex items-center gap-5 text-sm'>
                    <p className='max-sm:hidden'>Hi, {user?.name}</p>
                    <button onClick={logoutUser} className='bg-white hover:bg-blue-500 hover:text-white border border-gray-300 px-7 py-1.5 rounded-3xl active:scale-95 transition-all'>Logout</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;