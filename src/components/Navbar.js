/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">COLLECTION</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Contact</Link>
                        </li>
                    </ul>

                    <div className="buttons">
                        <Link className="btn btn-outline-dark" to="/products"><i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login</Link>
                        <Link className="btn btn-outline-dark ms-2" to="/products"><i className="fa fa-user-plus me-1" aria-hidden="true"></i> Register</Link>
                        <Link className="btn btn-outline-dark ms-2" to="/products"><i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart (0)</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;