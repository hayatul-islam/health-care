import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Details = () => {

    const { serviceId } = useParams();
    const { services } = useAuth();

    const singleService = services.find(service => service.id === serviceId);
    const { name, img, description } = singleService;

    return (
        <div>
            <h4>This is Details: {serviceId}</h4>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Details;