import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewsCart from './MyReviewsCart';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);

    const { user } = useContext(AuthContext);
    // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReviews(data);
            })
    }, [user?.email]);
    return (
        <div>
            {
                reviews.map(eatchReview => <MyReviewsCart
                    key={eatchReview._id}
                    eatchReview={eatchReview}
                ></MyReviewsCart>)
            }
        </div>
    );
};

export default MyReviews;