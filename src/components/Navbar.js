import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import Languages from '../utils/Languages';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { Modal, Button } from "react-bootstrap";


const Navbar = () => {
    const { t } = useTranslation();
    // const { isAuthenticated, logout } = useNavigate();  //useAuth(); // Custom hook for auth status
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.auth.userInfo);
    const [userName, setUserName] = useState(userInfo?.name || "");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (userInfo?.profile?.fullName) {
            setUserName(userInfo?.profile?.fullName);
        } else {
            setUserName(""); // Reset if userInfo is null
        }
    }, [userInfo]);
    //  const userName = useSelector((state) => state.auth.user?.name);
    const isAuthenticated = useSelector((state) => state.auth.userInfo !== null);

    console.log(userName);
    console.log('isAuthenticated:', isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
        setShowModal(false)
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

                        

                    </div>
                    <NavLink to="/booking" className="btn btn-primary py-2 px-4">
                        {t('BookAService')}
                    </NavLink>

                    <div className='d-none d-lg-block px-2' >
                    <Languages />
                </div>

                <div className="nav-item dropdown">
                            
                            <a
                                href="#"
                                className={`nav-link ${isAuthenticated ? 'dropdown-toggle' : ''}`}
                                data-bs-toggle={isAuthenticated ? 'dropdown' : ''}
                                onClick={handleUserClick}
                                style={{color: "white"}}
                            >
                                <i className="fas fa-user"></i>
                                {isAuthenticated && (
                                    <span className="ms-2">{userName}</span>
                                )}                        </a>


                            {isAuthenticated && (
                                <div className="dropdown-menu m-0 desktop-left" >
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
                                        onClick={() => setShowModal(true)}

                                    >
                                        {t('Logout')}
                                    </button>
                                </div>
                            )}
                            {/* Logout Confirmation Modal */}
                            <Modal show={showModal}
                                onHide={() => setShowModal(false)}
                                centered
                                style={{
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
                                }}
                            >
                                <Modal.Header closeButton
                                    style={{ backgroundColor:"#177bfa", borderBottom: "2px solid #177bfa" }}>
                                    <Modal.Title
                                        style={{ fontWeight: "bold", color: "white" }}
                                    >{t('ConfirmLogout')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body
                                    style={{
                                        height: "4rem",
                                        color: "black",
                                        textAlign: "center",
                                        fontSize: "1.2rem",
                                        padding: "20px"
                                    }}
                                >{t('Sure')}</Modal.Body>
                                <Modal.Footer
                                    style={{ justifyContent: "center" }}>
                                    <Button variant="secondary"
                                        onClick={() => setShowModal(false)}
                                        style={{
                                            backgroundColor: "#177bfa",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "10px 20px",
                                            marginRight: "10px",
                                            transition: "background-color 0.3s"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0f5bbf"}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#177bfa"}
                                    >
                                        {t('Cancel')}
                                    </Button>
                                    <Button variant="danger" onClick={handleLogout}
                                        style={{
                                            backgroundColor: "#FF5733",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                            padding: "10px 20px",
                                            transition: "background-color 0.3s"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#c74a2e"}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#FF5733"}
                                    >
                                        {t('Logout')}
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>

                </div>
                
            </nav>
        </div>
    );
};

export default Navbar;
