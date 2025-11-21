import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import Collections from '../components/Collections';
import Brands from '../components/Brands';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyUs />
            <Collections />
            <Brands />
            <Newsletter />
            <Contact />
        </>
    );
};

export default Home;
