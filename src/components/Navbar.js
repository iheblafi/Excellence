import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand p-0">
                <h1 className="text-primary m-0">
                    <i className="fa fa-plane me-3"></i>Excellence Airport
                </h1>
            </NavLink>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-item nav-link ${isActive ? 'active' : ''}`
                        }
                    >
                        Home
                    </NavLink>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Services
                        </a>

                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/meetgreet"
                                className="dropdown-item"
                            >
                                Meet and Greet
                            </NavLink>
                            <NavLink
                                to="/vip"
                                className="dropdown-item"
                            >
                                VIP Terminal
                            </NavLink>
                            <NavLink
                                to="/chauffeur"
                                className="dropdown-item"
                            >
                                Chauffeur-driven
                            </NavLink>


                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Fleet Cars
                        </a>

                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/availablecars"
                                className="dropdown-item"
                            >
                                Available vehicles
                            </NavLink>
                            <NavLink
                                to="/carmodels"
                                className="dropdown-item"
                            >
                                Car Models
                            </NavLink>

                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            About Us
                        </a>
                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/team"
                                className="dropdown-item"
                            >
                                Team
                            </NavLink>
                            <NavLink
                                to="/companyhistory"
                                className="dropdown-item"
                            >
                                Company History
                            </NavLink>
                            <NavLink
                                to="/values"
                                className="dropdown-item"
                            >
                               Values and mission statements
                            </NavLink>
                            <NavLink
                                to="/terms"
                                className="dropdown-item"
                            >
                               Terms and policies
                            </NavLink>
                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Contact Us
                        </a>

                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/contactform"
                                className="dropdown-item"
                            >
                                Contact Form
                            </NavLink>
                            <NavLink
                                to="/support"
                                className="dropdown-item"
                            >
                                Support Contact Details
                            </NavLink>

                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            User Account
                        </a>

                        <div className="dropdown-menu m-0">
                        <NavLink
                                to="/profile"
                                className="dropdown-item"
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to="/bookinghistory"
                                className="dropdown-item"
                            >
                                Booking History
                            </NavLink>
                            <NavLink
                                to="/payment"
                                className="dropdown-item"
                            >
                                Payment Methods
                            </NavLink>

                        </div>
                    </div>
                   
                </div>
                <a href="#" className="btn btn-primary py-2 px-4">
                    Book A Service
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
