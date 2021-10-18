import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img className="w-100" src={'https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png'} alt="" />

            <Link className="p-5 fs-4" to="/home">Go Back</Link>
        </div>

    );
};

export default Notfound;