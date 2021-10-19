import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TakeCare from '../TakeCare/TakeCare';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <TakeCare />
            <WhyChoose />
        </div>
    );
};

export default Home;