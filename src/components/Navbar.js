import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Languages from '../utils/Languages';

const Navbar = () => {
    const { t } = useTranslation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-4 py-3 py-lg-0">
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
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {t('UserAccount')}
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
                                {t('BookingHistory')}
                            </NavLink>
                            <NavLink
                                to="/payment"
                                className="dropdown-item"
                            >
                                {t('PaymentMethods')}
                            </NavLink>

                        </div>
                    </div>
                   
                </div>
                <a href="#" className="btn btn-primary py-2 px-4">
                    {t('BookAService')}
                </a>

                
            </div>
            <div className='d-none d-lg-block px-2' >
            <Languages />
            </div>
        </nav>
    );
};

export default Navbar;
