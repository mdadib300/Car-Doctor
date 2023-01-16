import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../assets/icons/Facebook (1).png';
import gg from '../../assets/icons/Google.png';
import lin from '../../assets/icons/in.png';
import image from '../../assets/images/login/login.svg';

const SignUp = () => {
    return (
        <div className='flex items-center justify-around my-10 lg:my-24 mx-5'>
            <img src={image} alt='login or sign up' className='hidden md:block'></img>
            <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                <div className="card-body">
                    <h1 className='text-3xl font-semibold text-center'>Sign-up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Your Password" className="input input-bordered" />
                        <label className="label">
                            <a href="*" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Sign-up</button>
                        <span className="label-text text-center mt-3">Or, continue with</span>
                        <div className='flex items-center justify-around mt-5'>
                            <img src={fb} alt='facebook'></img>
                            <img src={gg} alt='google'></img>
                            <img src={lin} alt='linkedin'></img>
                        </div>
                    </div>
                    <span className="label-text text-center mt-3">Already have an account? <Link to='/login' className='text-primary'>Log-in</Link></span>
                </div>
            </div>
        </div>
    );
};

export default SignUp;