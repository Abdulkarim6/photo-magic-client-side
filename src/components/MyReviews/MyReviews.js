import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';
import MyReviewsCart from './MyReviewsCart';

const MyReviews = () => {
    useTitle('myReviews');
    const [MyReviews, setMyReviews] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://photo-magic-server-side.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email]);

    const handleDelete = id => {
        const procced = window.confirm('Are you sure, you want to cancel this order')
        if (procced) {
            fetch(`https://photo-magic-server-side.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = MyReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                        alert('deleted successfuly')
                    }
                })
        }
    }

    return (
        <div>
            {
                !MyReviews?.length ? <h3 className='text-3xl text-center text-sky-500 font-bold mt-10'>You have no reviews</h3>
                    :
                    MyReviews.map(eatchReview => <MyReviewsCart
                        key={eatchReview._id}
                        eatchReview={eatchReview}
                        handleDelete={handleDelete}
                    ></MyReviewsCart>)
            }
        </div>
    );
};

export default MyReviews;