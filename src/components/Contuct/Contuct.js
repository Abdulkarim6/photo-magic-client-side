import React from 'react';
import { CalendarIcon, PhoneIcon, EnvelopeIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

const Contuct = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-6 my-6 bg-gray-700 text-white font-medium text-lg py-24 px-16 rounded-xl '>
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
                    <p className='flex'>Need a Service? My Gmail<ArrowDownIcon className="h-6 w-6 ml-2" /> </p>
                    <h4>mdhossainjwel687@gmail.com</h4>
                </div>
            </div>
        </div>
    );
};

export default Contuct;