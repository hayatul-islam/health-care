import React from 'react';
import './About.css';
import { Row, Col, Card, Container } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <div>
                <h1 className="text-center py-5">About Us</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid about-img" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/elementor/thumbs/diverse-medical-team-of-doctors-looking-at-camera-while-holding-clipboard-and-medical-files-e1623252244361-p8f2emhq44zv0exglrgf0kaiwzcsq8wi4157ioxs74.jpg'} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5 className="text-info mt-5">About MedicaLife</h5>
                            <h1>We Provide Essential Services For Your Health Care</h1>
                            <p className="mt-4">Recommendations to Member States to improve hand hygiene practices to help prevent the transmission of the COVID-19 virus.</p>
                            <div>
                                <i class="fas fa-check text-info p-2"></i>
                                <span>24 Hours Emergency Assistance Call Us</span>
                            </div>
                            <div>
                                <i class="fas fa-check text-info p-2"></i>
                                <span>We are committed to providing healthcare service</span>
                            </div>
                            <div>
                                <i class="fas fa-check text-info p-2"></i>
                                <span>Really know the true needs and expectations of patients</span>
                            </div>

                            <button className="btn btn-outline-info mt-4 ">More About Us</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* latest news */}
            <div className="latest-blog pb-5">
                <div className="text-center my-5">
                    <h5 className="text-info">Our Blog</h5>
                    <h1>Lates News & Articles</h1>
                    <p>Breaking science and technology news from around the world. Exclusive stories and expert analysis on space</p>
                </div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/medical-council.jpg'} />
                                <Card.Body>
                                    <Card.Title>Best Medical Network Directory For Physicians & Clients</Card.Title>
                                    <Card.Text>
                                        Over a million U.S. healthcare professionals as verified members. Largest network of MDs and other healthcare professionals.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/disability-and-healthcare.jpg'} />
                                <Card.Body>
                                    <Card.Title>Why Primary Health Care Is Very Important in Our life?</Card.Title>
                                    <Card.Text>
                                        Despite the promise of primary health care, at least 400 million people around the world still lack access to essential
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/05/psychologist-and-patient-talking-in-clinic-mental-health-concept.jpg'} />
                                <Card.Body>
                                    <Card.Title>6 Tips to Protect Your Mental Health When You’re Sick</Card.Title>
                                    <Card.Text>
                                        Protect Your Physical Health. Improving your physical wellbeing is one of the most comprehensive  to essential health services.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;