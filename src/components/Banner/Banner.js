import React from 'react';
import bannerImg from '../../images/banner-Img.jpg'

const Banner = () => {
    return (
            <div className="hero mt-3 mb-5" >
                <img className='w-full rounded h-80' src={bannerImg} alt="" />
                <div className="hero-content text-neutral-content flex justify-self-end mr-8">
                    <div className="max-w-md sm:text-right">
                        <h3 className="mb-5 text-2xl lg:text-4xl font-semibold">Hi !!! I am Abdul Karim</h3>
                        <p className="text-lg font-medium mb-5">I am professional photograper specializing in conceptual and still-life Photography</p>
                        <button className="btn btn-primary">About me</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;