import React from 'react';
import product1 from '../../assets/images/products/1.png';
import product2 from '../../assets/images/products/2.png';
import product3 from '../../assets/images/products/3.png';
import product4 from '../../assets/images/products/4.png';
import product5 from '../../assets/images/products/5.png';
import product6 from '../../assets/images/products/6.png';

const Products = () => {
    return (
        <div id='products' className='mb-10 lg:mb-32'>
            <div className='text-center'>
                <p className='text-primary text-xl font-semibold'>Popular Products</p>
                <h1 className='text-4xl font-bold my-4'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-28 py-12'>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={product1} alt="product" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">⭐⭐⭐⭐⭐</h2>
                        <h2 className="text-xl font-bold">RedTape Brake</h2>
                        <p className='text-primary text-xl font-semibold'>$30</p>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={product2} alt="product" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">⭐⭐⭐⭐</h2>
                        <h2 className="text-xl font-bold">Hydrelic brake</h2>
                        <p className='text-primary text-xl font-semibold'>$48</p>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={product3} alt="product" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">⭐⭐⭐⭐⭐</h2>
                        <h2 className="text-xl font-bold">Air filter</h2>
                        <p className='text-primary text-xl font-semibold'>$78</p>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={product4} alt="product" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">⭐⭐⭐⭐⭐</h2>
                        <h2 className="text-xl font-bold">HV Battery</h2>
                        <p className='text-primary text-xl font-semibold'>$80</p>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={product5} alt="product" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">⭐⭐⭐⭐⭐</h2>
                        <h2 className="text-xl font-bold">Adibo Tire</h2>
                        <p className='text-primary text-xl font-semibold'>$82</p>
                    </div>
                </div>
                <div className="card mx-auto border">
                    <figure className="px-5 pt-5">
                        <img src={product6} alt="product" className="rounded-xl h-52 w-80" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold">⭐⭐⭐⭐⭐</h2>
                        <h2 className="text-xl font-bold">Full package of Tire</h2>
                        <p className='text-primary text-xl font-semibold'>$100</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;