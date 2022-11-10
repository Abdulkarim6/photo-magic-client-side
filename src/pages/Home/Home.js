import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contuct from '../../components/Contuct/Contuct';
import ServiceAbout from '../../components/ServiceAbout/ServiceAbout';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contuct></Contuct>
            <ServiceAbout></ServiceAbout>
        </div>
    );
};

export default Home;