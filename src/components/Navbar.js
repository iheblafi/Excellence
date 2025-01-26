import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import Languages from '../utils/Languages';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { t } = useTranslation();
   // const { isAuthenticated, logout } = useNavigate();  //useAuth(); // Custom hook for auth status
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState (true);
    const userName = useSelector((state) => state.auth.user?.name);
    console.log( userName);

    console.log('isAuthenticated:', isAuthenticated);
    const logout = () => {
        setIsAuthenticated(false);
        navigate('/');
        // Perform any additional logout logic (e.g., clearing tokens)
    };

    const handleUserClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
            navigate('/login');
        } else {
            e.stopPropagation(); // Prevent event bubbling if needed
        }
    };

    return (
        <div className="container-xxl position-relative p-0">

        <nav  className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-4 py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand p-2">
                <h1 className="text-primary m-0">
                    <i className="fa fa-plane me-1"></i>Excellence Airport
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
                        {t('Home')}
                    </NavLink>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {t('Services')}
                        </a>

                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/meetgreet"
                                className="dropdown-item"
                            >
                                {t('Meet&Greet')}
                            </NavLink>
                            <NavLink
                                to="/vip"
                                className="dropdown-item"
                            >
                                {t('VIPTerminal')}
                            </NavLink>
                            <NavLink
                                to="/chauffeur"
                                className="dropdown-item"
                            >
                                {t('ChauffeurDrivenTransfers')}
                            </NavLink>
                        </div>
                    </div>

                    {/* <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {t('FleetCars')}
                        </a>

                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/availablecars"
                                className="dropdown-item"
                            >
                                {t('AvailableVehicles')}
                            </NavLink>
                            <NavLink
                                to="/carmodels"
                                className="dropdown-item"
                            >
                                {t('CarModels')}
                            </NavLink>

                        </div>
                    </div> */}

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {t('AboutUs')}
                        </a>
                        <div className="dropdown-menu m-0">

                            <NavLink
                                to="/companyhistory"
                                className="dropdown-item"
                            >
                                {t('CompanyHistory')}
                            </NavLink>
                            <NavLink
                                to="/values"
                                className="dropdown-item"
                            >
                                {t('Values&MissionStatements')}
                            </NavLink>


                            <NavLink
                                to="/terms"
                                className="dropdown-item"
                            >
                                {t('Terms&Policies')}
                            </NavLink>
                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {t('ContactUs')}
                        </a>

                        <div className="dropdown-menu m-0">
                            <NavLink
                                to="/contactform"
                                className="dropdown-item"
                            >
                                {t('ContactForm')}
                            </NavLink>
                            <NavLink
                                to="/support"
                                className="dropdown-item"
                            >
                                {t('SupportContactDetails')}
                            </NavLink>

                        </div>
                    </div>

                    <div className="nav-item dropdown">
                        {/* <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {t('UserAccount')}
                        </a> */}

                        {/* <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            <i className="fas fa-user"></i> */}
                        {/* <span className="ms-2">{t('User Account')}</span> */}
                        {/* </a> */}


                        {/* <div className="dropdown-menu m-0">
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
                                {t('BookingHistory')}
                            </NavLink>
                            <NavLink
                                to="/payment"
                                className="dropdown-item"
                            >
                                {t('PaymentMethods')}
                            </NavLink>

                       ss </div> */}

                        <a
                            href="#"
                            className={`nav-link ${isAuthenticated ? 'dropdown-toggle' : ''}`}
                            data-bs-toggle={isAuthenticated ? 'dropdown' : ''}
                            onClick={handleUserClick}
                        >
                            <i className="fas fa-user"></i>
                            {isAuthenticated && (
                        <span className="ms-2">{userName }</span>
                    )}                        </a>


                        {isAuthenticated && (
                            <div className="dropdown-menu m-0">
                                <NavLink
                                    to="/profile"
                                    className="dropdown-item"
                                >
                                    {t('Profile')}
                                </NavLink>
                                <NavLink
                                    to="/bookinghistory"
                                    className="dropdown-item"
                                >
                                    {t('BookingHistory')}
                                </NavLink>
                                <NavLink
                                    to="/payment"
                                    className="dropdown-item"
                                >
                                    {t('PaymentMethods')}
                                </NavLink>
                                <button
                                    className="dropdown-item text-danger"
                                    onClick={() => {
                                        logout(); // Call logout function
                                    }}
                                >
                                    {t('Logout')}
                                </button>
                            </div>
                        )}
                    </div>

                </div>
                <NavLink to="/contactform" className="btn btn-primary py-2 px-4">
                    {t('BookAService')}
                </NavLink>


            </div>
            <div className='d-none d-lg-block px-2' >
                <Languages />
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
