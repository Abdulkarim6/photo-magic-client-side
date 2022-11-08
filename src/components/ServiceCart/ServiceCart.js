import React from 'react';

const ServiceCart = ({ limitService }) => {
    const { description, img, price, title, _id } = limitService;
    // console.log(description, img, price, title, _id);

    const text = description.slice(0, 100);
    console.log(text);

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
                    <button className="btn btn-primary">View details </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;