import React from 'react';
import image from '../../assets/images/notFound/notFound.gif';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-2xl font-bold text-center mt-10 md:mt-0'>404 | Page not found</h2>
            <img src={image} alt='page not available' className='mx-auto'></img>
        </div>
    );
};

export default NotFound;