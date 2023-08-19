import React, { useEffect, useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';
import { Link } from 'react-router-dom';

const Services = () => {
    const [limitServices, setLimitServices] = useState([]);

    useEffect(() => {
        fetch('https://photo-magic-server-side.vercel.app/services', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                setLimitServices(response.limitServices);
            });
    }, [])

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 justify-items-center'>
                {
                    limitServices.map(limitService => <ServiceCart
                        key={limitService._id}
                        limitService={limitService}
                    ></ServiceCart>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link to='/allservices'> <button className="btn btn-primary"> See All Services </button> </Link>
            </div>
        </div>
    );
};

export default Services;