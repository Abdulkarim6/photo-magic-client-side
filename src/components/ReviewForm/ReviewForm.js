import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewForm = ({ service }) => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL} = user;
    const { description, img, price, title, _id } = service;


    const handleForReview = (event) => {
        event.preventDefault()
        const form = event.target;
        const review = form.review.value;
        console.log(review);

        // for reviews send to database
        const Reviews = {
            service: _id,
            serviceName: title,
            price,
            description,
            img,

            user: displayName,
            email,
            photoURL,

            review
        };

        fetch('https://photo-magic-server-side.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Thanks for your Review')
                }
                form.reset();
                console.log(data)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={handleForReview} >
                <div className='my-5'>
                    <textarea name='review' className="textarea textarea-bordered w-full" placeholder="Your Message"></textarea>
                    <input className="btn btn-primary" type="submit" value="send review" />
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;