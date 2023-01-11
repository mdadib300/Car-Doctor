import React from 'react';
import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center px-4 lg:px-36 mb-10 lg:mb-32'>
            <div className='relative hidden lg:block'>
                <img src={person} alt='About us' className='rounded-md w-4/5'></img>
                <img src={parts} alt='About us' className='rounded-md border-8 border-white w-1/2 absolute bottom-[-60px] left-64'></img>
            </div>
            <div>
                <p className='text-primary text-xl font-semibold'>Services</p>
                <h1 className='text-4xl font-bold my-4'>We are qualified<br />& of experience<br />in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <p className='my-4'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <button className='btn btn-primary'>Get more info</button>
            </div>
        </div>
    );
};

export default About;