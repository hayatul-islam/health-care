import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <div>
            <div className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <small className="text-info">BENEFITS</small>
                            <h1 className="py-3">Why Choose Us?</h1>
                            <p>Pellentesque tincidunt mauris diam, ac tincidunt lorem tempor a. Etiam mollis molestie augue, ut consectetur massa facilisis quis.</p>
                            <div className="d-flex justify-content-around mb-5">
                                <div>
                                    <img className="img-fluid choose-img" src={'https://template-kit.rootlayers.com/ecare/wp-content/uploads/sites/23/2021/05/icon7.png'} alt="" />
                                    <h3>Friendly</h3>
                                </div>
                                <div>
                                    <img className="img-fluid choose-img" src={'https://template-kit.rootlayers.com/ecare/wp-content/uploads/sites/23/2021/05/icon5.png'} alt="" />
                                    <h3>Engagement</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={'https://template-kit.rootlayers.com/ecare/wp-content/uploads/sites/23/2021/05/grey-haired-man-talking-to-nurse-on-kitchen-and-us-RX97TGG.jpg'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;