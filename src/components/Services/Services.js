import React from 'react';
import image1 from '../../assets/images/services/1.jpg';
import image2 from '../../assets/images/services/2.jpg';
import image3 from '../../assets/images/services/3.jpg';
import image4 from '../../assets/images/services/4.jpg';
import image5 from '../../assets/images/services/5.jpg';
import image6 from '../../assets/images/services/6.jpg';

const Services = () => {
    return (
        <div className='mb-10 lg:mb-32'>
            <div className='text-center'>
                <p className='text-primary text-xl font-semibold'>Services</p>
                <h1 className='text-4xl font-bold my-4'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-28 py-12'>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={image1} alt="Service" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Engine Oiling</h2>
                        <div className="card-actions">
                            <p className='text-primary text-xl font-semibold'>Price: $30</p>
                            <button className="text-primary">🡪</button>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={image2} alt="Service" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Engine Service</h2>
                        <div className="card-actions">
                            <p className='text-primary text-xl font-semibold'>Price: $34</p>
                            <button className="text-primary">🡪</button>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={image3} alt="Service" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Tire Servicing</h2>
                        <div className="card-actions">
                            <p className='text-primary text-xl font-semibold'>Price: $17</p>
                            <button className="text-primary">🡪</button>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={image4} alt="Service" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Electrical System</h2>
                        <div className="card-actions">
                            <p className='text-primary text-xl font-semibold'>Price: $24</p>
                            <button className="text-primary">🡪</button>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={image5} alt="Service" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Electrical Reading</h2>
                        <div className="card-actions">
                            <p className='text-primary text-xl font-semibold'>Price: $19</p>
                            <button className="text-primary">🡪</button>
                        </div>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={image6} alt="Service" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title mb-2">Wire Replacing</h2>
                        <div className="card-actions">
                            <p className='text-primary text-xl font-semibold'>Price: $7.9</p>
                            <button className="text-primary">🡪</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline btn-primary'>More Services</button>
            </div>
        </div>
    );
};

export default Services;