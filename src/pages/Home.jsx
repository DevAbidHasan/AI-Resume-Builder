import React from 'react';
import Banner from '../components/Home/Banner';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import Testimonial from '../components/Home/Testimonial';
import CallToAction from '../components/Home/CallToAction';
import Footer from '../components/Home/Footer';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Hero></Hero>
           <Features></Features>
           <Testimonial></Testimonial>
           <CallToAction></CallToAction>
           <Footer></Footer>
        </div>
    );
};

export default Home;