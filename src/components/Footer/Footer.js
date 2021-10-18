import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer py-5">
                <div className="container">
                    <div className="row text-white">
                        <div className="col-md-3">
                            <div>
                                <img className="img-fluid w-75 mb-4" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/06/footer-medicalife.png'} alt="" />
                                <p>Trusted results for Us Medical Insurance. Check Visymo Search for the best results! Unlimited Access.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h3>Contact Details</h3>
                                <p>Jl. Raya Kuta No.70, Kuta</p>
                                <p>support@domain.com</p>
                                <p>8 AM - 5 PM , Monday - Saturday</p>
                                <p>(+021) 2336 278</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h3>Other Pages</h3>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Services</p>
                                <p>Our Doctors</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <h3>Newsletter</h3>
                                <p>Get Special offers & Discounts</p>
                                <input className="form-control" type="text" placeholder="Enter your email" /> <br />
                                <button className="btn btn-outline-light">Subscription</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;