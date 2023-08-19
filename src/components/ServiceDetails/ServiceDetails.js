import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import Review from '../Review/Review';
import ReviewForm from '../ReviewForm/ReviewForm';

const ServiceDetails = () => {
    useTitle('serviceDetail')
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    const { description, img, price, title, _id } = useLoaderData();
    const service = { description, img, price, title, _id };

    useEffect(() => {
        fetch(`https://photo-magic-server-side.vercel.app/reviews?_id=${_id}`)
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
                <div className='mb-7'>
                    {

                        reviews.map(serviceReview => <Review
                            key={serviceReview._id}
                            serviceReview={serviceReview}
                        ></Review>)
                    }
                </div>

                <div className='mt-2 mb-2'>
                    {
                        user?
                            <ReviewForm service={service}></ReviewForm>
                            :
                            <h3 className='text-xl'>Please <Link to='/login' className='text-blue-500'><strong>login</strong></Link> to add a review</h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;