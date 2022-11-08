import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCart = ({ limitService }) => {
    const { description, img, price, title, _id } = limitService;
    // console.log(description, img, price, title, _id);


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} style={{ objectFit: 'cover' }} alt="imagebb" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 100 ?
                            description.slice(0, 100) : description
                    }
                </p>
                <div className="card-actions justify-around">
                    <button className="btn btn-primary">Buy Now : $ {price} </button>
                    <button className="btn btn-primary"> <Link to={`/serviceDetail/${_id}`}>View Details</Link>  </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;