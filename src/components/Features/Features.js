import React from 'react';
import feature1 from '../../assets/icons/check.svg';
import feature2 from '../../assets/icons/Wrench.svg';
import feature3 from '../../assets/icons/person.svg';
import feature4 from '../../assets/icons/group.svg';
import feature5 from '../../assets/icons/Group 38729.svg';
import feature6 from '../../assets/icons/deliveryt.svg';

const Features = () => {
    return (
        <div id='features' className='mb-10 lg:mb-32'>
            <div className='text-center'>
                <p className='text-primary text-xl font-semibold'>Core Features</p>
                <h1 className='text-4xl font-bold my-4'>Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 lg:px-28 py-12'>
                <div className='flex flex-col items-center justify-center w-[170px] h-[150px] border-2 rounded-xl'>
                    <img src={feature1} alt='Feature' className='w-1/2'></img>
                    <h3 className='text-xl font-semibold'>100% Guranty</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;