import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function Home() {

    const { t } = useTranslation();
    return (

        <div>
            <div className="container-xxl bg-white p-0">

                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                <div className="container-xxl position-relative p-0">
                    {/* <Navbar /> */}

                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container my-5 py-5">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6 text-center text-lg-start">
                                    {/* <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Professional Service</h1> */}
                                    <h1 className="display-3 text-white animated slideInLeft">
                                        {t('EnjoyMessage')}
                                    </h1>
                                    <p className="text-white animated slideInLeft mb-4 pb-2">{t('TravelingMessage')}</p>
                                    <NavLink to="/contactform" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">{t('BookService')}</NavLink>
                                </div>
                                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                    <img className="img-fluid" src="img/heroo.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">

                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded pt-3" style={{ maxHeight: "370px" }}>
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-handshake text-primary mb-4"></i>
                                        <h5>{t('Meet&Greet')}</h5>
                                        <p>{t('MeetDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" >
                                <div className="service-item rounded pt-3" style={{ maxHeight: "370px" }}>
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                        <h5>{t('ProfesionalDrivers')}</h5>
                                        <p>{t('DriversDesc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item rounded pt-3" style={{ maxHeight: "370px" }}>
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-star text-primary mb-4"></i>
                                        <h5>{t('VIPTerminal')}</h5>
                                        <p>{t('VIPDesc')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item rounded pt-3" style={{ maxHeight: "370px" }}>
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                        <h5>{t('24/7Service')}</h5>
                                        <p>{t('24/7ServiceDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/airport.jpg" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/driver.jpg" style={{ marginTop: '25%' }} />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/airport2.jpg" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/about-2.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('AboutUs')}</h5>
                                <h1 className="mb-4">{t('Welcometo')}<i className="fa fa-plane text-primary me-2"></i>Excellence Airport</h1>
                                <p className="mb-4">{t('WelcomeDesc1')}</p>
                                <p className="mb-4">{t('WelcomeDesc2')}</p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">+20</h1>
                                            <div className="ps-4">
                                                <p className="mb-0">{t('YearsOf')}</p>
                                                <h6 className="text-uppercase mb-0">{t('Experience')}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                            <div className="ps-4">
                                                <p className="mb-0">{t('luxurious')}</p>
                                                <h6 className="text-uppercase mb-0">{t('FleetCars')}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <NavLink className="btn btn-primary py-3 px-5 mt-2" to="/companyhistory">{t('ReadMore')}</NavLink>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">{t('Services')}</h5>
                            <h1 className="mb-5">{t('OurServices')}</h1>
                        </div>
                        <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                        <i className="fa fa-plane-arrival fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <h6 className="mt-n1 mb-0">{t('Arrival')}</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                        <i className="fa fa-plane-departure fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <h6 className="mt-n1 mb-0">{t('Departure')}</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                        <i className="fa fa-forward fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <h6 className="mt-n1 mb-0">{t('Transit')}</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">

                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/meetairport.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('Meeting')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('MeetingDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/fasttrack.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('FastTrack')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('FastTrackDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/escortinside.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('EscortingPassengersInside')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('EscortingPassengersDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/escortoutside.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('EscortingPassengersOutside')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('EscortingPassengersOutsideDesc')}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/airportformalities.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('HandlingAirportFormalities')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('HandlingAirportFormalitiesDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/lugguage.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('HandlingLugguage')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('HandlingLugguageDesc')}</small>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/vipterminal.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('TransportToVIPTerminal')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('TransportToVIPTerminalDesc')}</small>
                                                </div>
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/coordination.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('Coordination')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('CoordinationDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/personalized.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('PersonalizedCoordination')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('PersonalizedCoordinationDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/fasttracklanes.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('FastTrackLanes')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('FastTrackLanesDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/escortdeparture.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('EscortingPassengers')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('EscortingPassengersDesc')}</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/combination.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('Combination')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('CombinationDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/security.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('Security')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('SecurityDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/chauffeurdeparture.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('ChauffeurService')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('ChauffeurServiceDesc')}</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/meetairport.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('Meett')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('MeettDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/airport2.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('Assist')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('AssistDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/fasttrack.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('FastTrackk')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('FastTrackkDesc')}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/escortinside.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('DepartureToBoardingGate')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('DepartureToBoardingGateDesc')}</small>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/chauffeurdeparture.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('ChauffeurrService')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('ChauffeurrServiceDesc')}</small>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/escortoutside.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('ChauffeurTransport')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('ChauffeurTransportDesc')}</small>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="img/lugguage.jpg" alt="" style={{ width: '80px' }} />
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>{t('AssistanceWithLuggage')}</span>
                                                    </h5>
                                                    <small className="fst-italic">{t('AssistanceWithLuggageDesc')}</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img className="img-fluid rounded" src="img/plane2.jpg" alt="" style={{ maxWidth: "100%", height: "auto" }} />

                        </div>
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-4 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('Booking')}</h5>
                                <h1 className="text-white mb-4">{t('BookAServiceOnline')}</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">{t('YourName')}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">{t('YourEmail')}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label for="datetime">{t('Date & Time')}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="select1">
                                                    <option value="1">{t('People1')}</option>
                                                    <option value="2">{t('People2')}</option>
                                                    <option value="3">{t('People3')}</option>
                                                </select>
                                                <label for="select1">{t('NoOfPeople')}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control detailflight-input" id="detailflight" placeholder="Flight details" data-target="#date3" data-toggle="detailflight" />
                                                <label for="detailflight">{t('FlightDetails')}</label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Special Request" id="message" ></textarea>
                                                <label for="message">{t('SpecialRequest')}</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">{t('BookNow')}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-sescondary text-center text-primary fw-normal">{t('TeamMembers')}</h5>
                            <h1 className="mb-5">{t('OurDrivers')}</h1>
                        </div>

                        

                        <video src="meet&greet.mp4" controls />
                        
                    </div>
                </div> */}


                {/* <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-sescondary text-center text-primary fw-normal">{t('TeamMembers')}</h5>
                             <h1 className="mb-5">{t('OurTeam')}</h1> 
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="img/testimonial-1.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="img/testimonial-2.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="img/testimonial-3.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="img/testimonial-4.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}



                {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="text-center">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
                            <h1 className="mb-5">Our Clients Say!!!</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel">
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{ width: '50px', height: '50px' }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{ width: '50px', height: '50px' }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{ width: '50px', height: '50px' }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-transparent border rounded p-4">
                                <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                                <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style={{ width: '50px', height: '50px' }} />
                                    <div className="ps-3">
                                        <h5 className="mb-1">Client Name</h5>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}



                <Footer />


            </div>

        </div>
    )
}

export default Home