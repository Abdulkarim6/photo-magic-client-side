import React from 'react';
import { CalendarIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Contuct = () => {
    return (
        <div className='grid justify-items-center lg:grid-cols-3 gap-6 my-6 bg-black text-white py-24 px-16 rounded-xl '>
            <div className='flex items-center'>
                <div className='mr-3'>
                    <CalendarIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <p>My service open from monday-friday</p>
                    <h4>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='mr-3'>
                    <PhoneIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <p>Have a question?</p>
                    <h4>01632*****</h4>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='mr-3'>
                    <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                    <p>Need a Service? my address Gmail</p>
                    <h4>Mdhossainjwel687@gmail.com</h4>
                </div>
            </div>
        </div>
    );
};

export default Contuct;