/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">COLLECTION</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>

                    <div className="buttons">
                        <a className="btn btn-outline-dark" href="#"><i class="fa fa-sign-in me-1" aria-hidden="true"></i> Login</a>
                        <a className="btn btn-outline-dark ms-2" href="#"><i class="fa fa-user-plus me-1" aria-hidden="true"></i> Register</a>
                        <a className="btn btn-outline-dark ms-2" href="#"><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart (0)</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;