import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contuct from '../../components/Contuct/Contuct';
import useTitle from '../../components/Hooks/useTitle';
import ServiceAbout from '../../components/ServiceAbout/ServiceAbout';
import Services from '../../components/Services/Services';

const Home = () => {
    useTitle("home");
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