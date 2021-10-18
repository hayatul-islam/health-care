import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" className="navbar-container mt-3" variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="header-logo" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/06/logo-medicalife.png'} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/home">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact</Link>

                            <Link>{user.displayName}</Link>
                            {
                                user.email ? <button onClick={logOut}>Log out</button> :
                                    <Link to="/login">Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;