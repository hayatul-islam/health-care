import React from 'react';
import './TakeCare.css';

const TakeCare = () => {
    return (
        <div className="py-5 takeCare">
            <div className="container">
                <div className="row pb-5">
                    <div className="text-center">
                        <h2>We don’t just give care We take care as well.</h2>
                        <p>We're provides quality local caregivers in your community for professional, attentive in-home care.</p>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 text-center">
                            <div className="text-center p-4">
                                <i class="fa fa-heartbeat text-center"></i>
                            </div>
                            <h3>Caring with a smile</h3>
                            <p>It’s not what we do as a home care agency, but how we do it. All of our elderly caregiving services are delivered with a smile. And we all know that a smile can be infectio</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 text-center">
                            <div className="p-4">
                                <i class="fa fa-user-md"></i>
                            </div>
                            <h3>Attentive listener</h3>
                            <p>How do you like things done? Where would you like to go? Listening to your needs, and having conversations with you, helps us make sure we bring you the perfect match.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="p-4 text-center">
                            <div className="p-4">
                                <i class="fa fa-stethoscope"></i>
                            </div>
                            <h3>Qualified</h3>
                            <p>Whether you just need someone to take you for a walk or a to provide attentive complex caring – we, as a home care agency, can provide a caregiver that is qualified to meet.</p>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default TakeCare;