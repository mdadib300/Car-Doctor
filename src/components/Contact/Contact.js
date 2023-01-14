import React from 'react';
import time from '../../assets/images/contact/time.png';
import query from '../../assets/images/contact/query.png';
import location from '../../assets/images/contact/location.png';

const Contact = () => {
    return (
        <div className='bg-[#151515] text-white rounded-md mx-4 lg:mx-36 my-10 lg:my-32 px-4 lg:px-16 py-7 lg:py-24'>
            <div className='flex flex-col lg:flex-row items-center justify-evenly'>
                <div className='flex items-center mb-7 lg:mb-0'>
                    <img src={time} alt='Our service providing time' className='mr-5'></img>
                    <div>
                        <p>We are open Monday - Friday</p>
                        <h3 className='text-xl font-bold'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex items-center mb-7 lg:mb-0'>
                    <img src={query} alt='Our service providing time' className='mr-5'></img>
                    <div>
                        <p>Have a question?</p>
                        <h3 className='text-xl font-bold'>+880 1871 061620</h3>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={location} alt='Our service providing time' className='mr-5'></img>
                    <div>
                        <p>Need a repair? our address</p>
                        <h3 className='text-xl font-bold'>Keraniganj, Bangladesh</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;