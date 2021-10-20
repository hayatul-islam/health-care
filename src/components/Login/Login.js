import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle, signInEmailAndPassword, error } = useAuth();

    const location = useLocation();
    const redirect_url = location.state?.from || '/home';

    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })

    }

    return (
        <div className="login-container py-5">
            <div className="container">
                <div className="login-form mx-auto shadow p-3">
                    <h1 className="text-center">Login</h1>

                    <form onSubmit={signInEmailAndPassword}>
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="" id="" placeholder="Type your Email" required /> <br />

                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" name="" id="" placeholder="Type your password" required /> <br />

                        <input className="form-control bg-info" type="submit" value="Login" />
                    </form>
                    <div className="text-center mb-3">
                        <p className="pt-5 text-center">Or Login</p>
                        <button onClick={handleGoogleLogin} className="btn btn-outline-dark"><i class="fab fa-google"></i></button>
                    </div>

                    <Link className="login-account" to="/register">Create new Account. Register</Link>
                </div>

                <p className="text-danger text-center mt-4">{error}</p>

            </div>
        </div>
    );
};

export default Login;