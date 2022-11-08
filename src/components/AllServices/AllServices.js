import React, { useEffect, useState } from 'react';
import AllServicescart from '../AllServicescart/AllServicescart';

const AllServices = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
            })
    }, [])
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-5'>
            {
                Services.map(Service => <AllServicescart
                    key={Service._id}
                    Service={Service}
                ></AllServicescart>
                )
            }
        </div>
    );
};

export default AllServices;