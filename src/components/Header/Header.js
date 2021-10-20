import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar sticky="top" className="navbar-container mt-3" variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className="header-logo" src={'https://kit.baliniz.com/medicalife/wp-content/uploads/sites/10/2021/06/footer-medicalife.png'} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink activeClassName="activeNav" to="/home">Home</NavLink>
                            <NavLink activeClassName="activeNav" to="/about">About Us</NavLink>
                            <NavLink activeClassName="activeNav" to="/services">Services</NavLink>
                            <NavLink activeClassName="activeNav" to="/contact">Contact</NavLink>


                        </Nav>
                        <div className="">
                            <div>
                                <span className="text-white p-3">{user.displayName ?? user.email}</span>
                                {
                                    user.email ? <button className="logOut-btn" onClick={logOut}>Log out</button> :
                                        <Link className="logOut-btn" to="/login">Login</Link>
                                }
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;