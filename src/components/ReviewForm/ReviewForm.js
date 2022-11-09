import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewForm = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, phoneNumber, photoURL, uid } = user;
    const { description, img, price, title, _id } = service;

    const handleForReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        console.log(review);

        // for reviews send to database
        const Reviews = {
            // service: _id,
            // serviceName: title,
            // price,
            // customer: name,
            // phone,
            // email,
            // message
        };
    }

    return (
        <div>
            <form onSubmit={handleForReview} >
                <div className='my-5'>
                    <textarea name='review' className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
                    <input className="btn btn-primary" type="submit" value="Place your order" />
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;