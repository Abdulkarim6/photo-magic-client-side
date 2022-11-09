import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewsCart from './MyReviewsCart';

const MyReviews = () => {
    const [MyReviews, setMyReviews] = useState([]);
    // console.log(reviews);

    const { user } = useContext(AuthContext);
    // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyReviews(data);
            })
    }, [user?.email]);
    return (
        <div>
            {
                MyReviews.map(eatchReview => <MyReviewsCart
                    key={eatchReview._id}
                    eatchReview={eatchReview}
                ></MyReviewsCart>)
            }
        </div>
    );
};

export default MyReviews;