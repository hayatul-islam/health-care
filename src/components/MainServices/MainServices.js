import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import SingleService from '../SingleService/SingleService';
import './MainService.css';

const MainServices = () => {
    const { services } = useAuth();
    return (
        <div className="pb-5 mb-5">
            <div className="service-banner mb-5">
                <img className="w-100" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWxfPCxD6fZpiLkhgZcF61WfU7wzWnxTZ1M7gOcnWt4SdtOKvdBksJ1QKsEaczDb8kDA&usqp=CAU'} alt="" />
                <h1>Our Services</h1>
            </div>
            <div className="pt-5">
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.map(singleService => <SingleService
                                key={singleService.id}
                                singleService={singleService}
                            ></SingleService>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MainServices;