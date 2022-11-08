import React from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const { description, img, price, title, _id } = useLoaderData();
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-5">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;