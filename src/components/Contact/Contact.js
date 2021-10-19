import React from 'react';

const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-2">
                        <div className="shadow p-5">
                            <form action="">
                                <input className="form-control mb-4" type="text" name="" id="" placeholder="Your Name" />
                                <div className="d-flex justify-content-between mb-4">
                                    <input className="form-control" type="email" name="" id="" placeholder="Your Email" />
                                    <input className="form-control" type="text" placeholder="Your Phone" />
                                </div>
                                <input className="form-control mb-4" type="text" name="" id="" placeholder="Your Subject" />
                                <textarea className="form-control mb-4" name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            </form>
                            <button className="btn btn-outline-info">Send Message</button>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5">
                        <div>
                            <h5 className="text-info">Contact Us</h5>
                            <h1>Let's Ge In Touch</h1>
                            <p>Let's get in touch. Would you like to know more about our services or our teams? Are you curious about our policies and procedures</p>
                        </div>
                        <div className="mt-5">
                            <h4>Working Hours</h4>
                            <div>
                                <i class="far fa-clock text-info p-2"></i>
                                <span>Mon - Thurs : 9.00 A.M - 5.00 P.M</span>
                            </div>
                            <div>
                                <i class="far fa-clock text-info p-2"></i>
                                <span>Fri - Sun : 9.00 A.M - 1.00 P.M</span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h4>Follow Us On Social Media</h4>
                            <i class="fab fa-facebook text-info p-3 fs-4"></i>
                            <i class="fab fa-twitter text-info p-3 fs-4"></i>
                            <i class="fab fa-linkedin-in text-info p-3 fs-4"></i>
                            <i class="fab fa-instagram-square text-info p-3 fs-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;