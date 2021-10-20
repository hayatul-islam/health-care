import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, createNewUser, userEmail, userPassword, error } = useAuth();

    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    const history = useHistory();
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url)

            })
    }
    return (
        <div>
            <div className="login-container py-5">
                <div className="container">
                    <div className="login-form mx-auto shadow p-3">
                        <h1 className="text-center">Register</h1>
                        <form onSubmit={createNewUser}>

                            <label htmlFor="email">Email</label>
                            <input onBlur={userEmail} className="form-control" type="email" name="" id="" placeholder="Type your Email" required /> <br />

                            <label htmlFor="password">Password</label>
                            <input onBlur={userPassword} className="form-control" type="password" name="" id="" placeholder="Type your password" required /> <br />

                            <input className="form-control bg-info" type="submit" value="Register" />
                        </form>
                        <div className="text-center mb-3">
                            <p className="pt-5 text-center">Or Register</p>
                            <button onClick={handleGoogleLogin} className="btn btn-outline-dark"><i class="fab fa-google"></i></button>
                        </div>


                        <Link className="login-account" to="/login">I have an Account. Login</Link>

                    </div>
                    <p className="text-danger text-center mt-4">{error}</p>

                </div>
            </div>
        </div>
    );
};

export default Register;