import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import ReviewForm from '../ReviewForm/ReviewForm';

const ServiceDetails = () => {
    const { description, img, price, title, _id } = useLoaderData();
    const service = { description, img, price, title, _id };
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-5 grid lg:grid-cols-2">
                <figure><img className='w-full' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Price :$ {price}</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="4xl">this is review </h1>
                </div>
                <div>
                    <h1 className="4xl">this is review form</h1>
                    <ReviewForm service={service}></ReviewForm>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;