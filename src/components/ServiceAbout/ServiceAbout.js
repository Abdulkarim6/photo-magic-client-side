import React from 'react';
import aboutimg from '../../images/aboutimgt.jpg'

const ServiceAbout = () => {
    return (
        <div className="hero p-5 bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='w-full'>
                    <img src={aboutimg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">My Services about</h1>
                    <p className="py-6">I am professional PhotoGraper !!! My experience of 10 years.If you need ? You can Hair me</p>

                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-title">Total Orders</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Dec 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Pending</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Reviews</div>
                            <div className="stat-value">1,200</div>
                            <div className="rating gap-1">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" disabled />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" disabled />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" disabled />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" disabled />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" disabled />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceAbout;