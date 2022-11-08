import React from 'react';
import Banner from '../../components/Banner/Banner';
import Contuct from '../../components/Contuct/Contuct';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contuct></Contuct>
        </div>
    );
};

export default Home;