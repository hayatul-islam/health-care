import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('health.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services-container">
            <div className="p-5 w-75 mx-auto text-center">
                <h4>Medical Services</h4>
                <h1>Our Healthcare Service</h1>
                <p>Some primary care services are delivered within hospitals. Depending on the organization and policies of the national health system</p>
            </div>

            <Container>
                <Row xs={1} md={3} className="g-4 pb-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
                <hr />
                <Row md={2} className="py-5">
                    <Col>
                        <div className="d-flex justify-content-center align-items-center">
                            <i class="far fa-calendar-check appointments-icon"></i>
                            <div>
                                <h2>Open for Appointments</h2>
                                <p>Square Appointments has everything you need to run</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="py-5">
                            <Link className="appointment-btn" to="/">Make Appointment</Link>
                            <Link className="service-btn" to="/">All Services <i class="fas fa-arrow-right"></i></Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Services;