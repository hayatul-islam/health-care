import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, description } = service;

    return (
        <div>
            <Col>
                <Card className="p-4 service-card">
                    <Card.Img className="service-img ps-4" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="text-muted">
                            {description}
                        </Card.Text>
                        <Link className="link-btn" to={`/service/${id}`}>{name} Details <i class="fas fa-arrow-right"></i></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;