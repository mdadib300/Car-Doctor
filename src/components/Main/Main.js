import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Main = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <div>Navbar</div>
        </div>
    );
};

export default Main;