import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

const Services = () => {
    const [limitServices, setLimitServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setLimitServices(data.limitServices);
            })
    }, [])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {/* <h1 className="text-4xl">this is service : {limitServices.length}</h1> */}
            {
                limitServices.map(limitService => <ServiceCart
                    key={limitService._id}
                    limitService={limitService}
                ></ServiceCart>)
            }
        </div>
    );
};

export default Services;