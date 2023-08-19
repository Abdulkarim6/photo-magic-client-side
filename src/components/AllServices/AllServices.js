import React, { useEffect, useState } from 'react';
import AllServicescart from '../AllServicescart/AllServicescart';
import useTitle from '../Hooks/useTitle';

const AllServices = () => {
    useTitle('allservices');
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://photo-magic-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                // console.log(data.services, 'data');
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