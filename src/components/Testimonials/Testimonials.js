import React from 'react';
import customer1 from '../../assets/images/testimonials/happy-customer-1.png';
import customer2 from '../../assets/images/testimonials/happy-customer-2.png';
import invertedComma from '../../assets/icons/quote 1 (1).png';

const Testimonials = () => {
    return (
        <div id='testimonials' className='mb-10 lg:mb-32'>
            <div className='text-center'>
                <p className='text-primary text-xl font-semibold'>Testimonial</p>
                <h1 className='text-4xl font-bold my-4'>What Customer Says</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-28 py-12'>
                <div className='border-2 rounded-md p-6 md:p-12'>
                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex'>
                            <div className="avatar mr-5">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={customer2} alt='customer' />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>Albert Cozier</h2>
                                <h2 className='text-xl font-semibold'>Owner, SQI inc.</h2>
                            </div>
                        </div>
                        <img src={invertedComma} alt='#' className='w-14 hidden md:block'></img>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum<br />available, but the majority have suffered alteration in some<br />form, by injected humour, or randomised words which don't<br />look even slightly believable. </p>
                </div>
                <div className='border-2 rounded-md p-6 md:p-12'>
                    <div className='flex items-center justify-between mb-5'>
                        <div className='flex'>
                            <div className="avatar mr-5">
                                <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={customer1} alt='customer' />
                                </div>
                            </div>
                            <div>
                                <h2 className='text-xl font-bold'>Mr. Guu Shian</h2>
                                <h2 className='text-xl font-semibold'>Senior Engr, POSCO</h2>
                            </div>
                        </div>
                        <img src={invertedComma} alt='#' className='w-14 hidden md:block'></img>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum<br />available, but the majority have suffered alteration in some<br />form, by injected humour, or randomised words which don't<br />look even slightly believable. </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;