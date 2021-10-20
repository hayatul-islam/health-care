import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {

    const { serviceId } = useParams();
    const { services } = useAuth();

    const singleService = services.find(service => service.id === serviceId);
    const { name, photoUrl, description, details } = singleService;

    return (
        <div className="py-5">
            <div className="container">
                <h1 className="text-center pb-5">Service Details</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={photoUrl} alt="" />
                    </div>
                    <div className="col-md-6 p-3">
                        <h3 className="mb-3 text-info">{name}</h3>
                        <h5 className="mb-3">{description}</h5>
                        <p>{details}</p>
                        <button className="btn btn-outline-dark">
                            Back Services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;