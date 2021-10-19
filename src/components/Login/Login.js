import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { signInUsingGoogle, signInEmailAndPassword, userEmail, userPassword } = useAuth()
    return (
        <div className="login-container py-5">
            <div className="container">
                <div className="login-form mx-auto shadow p-3">
                    <h1 className="text-center">Login</h1>

                    <form onSubmit={signInEmailAndPassword}>
                        <label htmlFor="email">Email</label>
                        <input onBlur={userEmail} className="form-control" type="email" name="" id="" placeholder="Type your Email" /> <br />

                        <label htmlFor="password">Password</label>
                        <input onBlur={userPassword} className="form-control" type="password" name="" id="" placeholder="Type your password" /> <br />

                        <input className="form-control bg-info" type="submit" value="Login" />
                    </form>
                    <div className="text-center mb-3">
                        <p className="pt-5 text-center">Or Login</p>
                        <button onClick={signInUsingGoogle} className="btn btn-outline-dark"><i class="fab fa-google"></i></button>
                    </div>

                    <Link className="login-account" to="/register">Create new Account. Register</Link>
                </div>

            </div>
        </div>
    );
};

export default Login;