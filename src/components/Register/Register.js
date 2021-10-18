import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const { signInUsingGoogle, createNewUser, userEmail, userPassword } = useFirebase()
    return (
        <div>
            <div className="login-container py-5">
                <div className="container">
                    <div className="login-form mx-auto shadow p-3">
                        <h1 className="text-center">Register</h1>
                        <form onSubmit={createNewUser}>
                            <label htmlFor="email">Email</label>
                            <input onBlur={userEmail} className="form-control" type="email" name="" id="" placeholder="Type your Email" /> <br />

                            <label htmlFor="password">Password</label>
                            <input onBlur={userPassword} className="form-control" type="password" name="" id="" placeholder="Type your password" /> <br />

                            <input className="form-control bg-info" type="submit" value="Register" />
                        </form>
                        <p className="pt-5 text-center">Or Login</p>
                        <button onClick={signInUsingGoogle} className="btn btn-outline-dark"><i class="fab fa-google"></i></button>


                        <Link className="login-account" to="/login">I have an Account. Login</Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;