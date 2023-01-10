import React from 'react';
import img1 from '../../assets/images/banner/1.jpg';

const Banner = () => {
    return (
        <div className="hero px-0 lg:px-20 mb-10 lg:mb-28">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img1} alt='Car doctor' className="w-full lg:w-1/2 rounded-md" />
                <div className='text-left ml-0 lg:ml-20'>
                    <h1 className="text-5xl font-bold">Affordable<br />Price For Car<br />Servicing</h1>
                    <p className="py-6">There are many variations of passages of  available, but<br />the majority have suffered alteration in some form</p>
                    <button className="btn btn-primary">Discover More</button>
                    <button className="btn btn-outline btn-primary ml-5">Latest projects</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;