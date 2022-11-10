import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import ReviewForm from '../ReviewForm/ReviewForm';

const ServiceDetails = () => {
    const [reviews, setReviews] = useState([]);


    const { description, img, price, title, _id } = useLoaderData();
    const service = { description, img, price, title, _id };

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?_id=${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [_id]);

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
                    {
                        reviews.map(serviceReview => <Review
                            key={serviceReview._id}
                            serviceReview={serviceReview}
                        ></Review>)
                    }
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