import React from 'react';
import Banner from '../components/Home/Banner';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Hero></Hero>
           <Features></Features>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;