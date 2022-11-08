import React from 'react';
import { Link } from 'react-router-dom';

const AllServicescart = ({ Service }) => {
    const { description, img, price, title, _id } = Service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="imagebb" /></figure>
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

export default AllServicescart;