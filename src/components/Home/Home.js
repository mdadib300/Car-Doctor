import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Contact />
            <Products />
            <Team />
            <Features />
            <Testimonials />
        </div>
    );
};

export default Home;