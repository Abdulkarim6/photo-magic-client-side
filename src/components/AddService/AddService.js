import React from 'react';
import useTitle from '../Hooks/useTitle';

const AddService = () => {
    useTitle('addService');
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const ServiceName = form.ServiceName.value;
        const ServicePhotoURL = form.ServicePhotoURL.value;
        const ServiceAbout = form.ServiceAbout.value;
        const price = form.price.value;

        // object for Add service data send mongodb
        const AddService = {
            title: ServiceName,
            description: ServiceAbout,
            img: ServicePhotoURL,
            price: price
        };

        console.log(AddService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AddService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Thanks for Add your service')
                }
                // form.reset();
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <div className="hero bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Add Service</h1>
                            <form onSubmit={handleAddService} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Name</span>
                                    </label>
                                    <input name='ServiceName' type="text" placeholder="Service Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service Photo URL</span>
                                    </label>
                                    <input name='ServicePhotoURL' type="text" placeholder="Service Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Service about</span>
                                    </label>
                                    <textarea name='ServiceAbout' className="textarea textarea-bordered w-full" placeholder="Service about"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name='price' type="text" placeholder="Price" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit Service</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddService;