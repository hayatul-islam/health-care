
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = ({ singleService }) => {
    const { id, photoUrl, name, description } = singleService
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-fluid single-img" variant="top" src={photoUrl} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                    <Link className="single-btn" to={`/service/${id}`}>{name} Details <i class="fas fa-arrow-right"></i></Link>
                </Card>
            </Col>
        </div>
    );
};

export default SingleService;