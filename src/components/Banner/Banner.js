import React from 'react';
import './Banner.css';


const Banner = () => {
    return (

        <div className="top-banner">
            <div className="container">
                <div className="banner-info pt-5">
                    <h1 className="mt-5 pt-5">Senior Care, Respite </h1>
                    <h1> and Advanced Care Needs</h1>
                    <p className=" w-50">The care you need in the place you want. Discover the difference Visiting Angels will make in the life of your loved one.</p>
                    <button className="btn btn-danger">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;