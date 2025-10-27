import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Home/Navbar';

const Layout = () => {
    return (
        <div>
            <div className='min-h-screen bg-gray-50'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;