import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function ComponayHistory() {
    return (
        <div>
            <div className="container-xxl bg-white p-0">

                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: "12px", height: "12px" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>




                <div className="container-xxl position-relative p-0">
                    <Navbar />

                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Company History & Team</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Company History & Team</li>
                                </ol>
                            </nav>
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
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Company History</h5>
                                <h1 className="mb-4">Welcome to <i className="fa fa-plane-departure text-primary me-2"></i>Excellence Airport</h1>
                                <p className="mb-4">
                                    At Excellence Airport, we specialize in transforming the chaos of travel
                                    into a seamless and luxurious experience.
                                    Strategically located at Roissy Charles de Gaulle Airport, our services
                                    cater to discerning travelers who value privacy,
                                    efficiency, and personalized care. From business executives to leisure
                                    travelers, we ensure every journey begins and ends with ease.
                                </p>
                                <p className="mb-4">
                                    Founded by Benjamin Slama, Excellence Airport has grown over 15 years to
                                    become synonymous with VIP airport services.
                                    Our multilingual team, fluent in French, English, and Spanish, is dedicated
                                    to anticipating your needs and exceeding expectations,
                                    providing unmatched care and attention every step of the way.
                                </p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">20</h1>
                                            <div className="ps-4">
                                                <p className="mb-0">Years of</p>
                                                <h6 className="text-uppercase mb-0">Excellence</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                            <div className="ps-4">
                                                <p className="mb-0">Luxury</p>
                                                <h6 className="text-uppercase mb-0">Vehicles</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    We proudly offer a comprehensive suite of premium services, including VIP Meet
                                    & Greet, Chauffeur-Driven Transfers,
                                    and access to exclusive private terminals. Every service is designed to
                                    simplify airport procedures, allowing you to enjoy
                                    a smooth, stress-free journey. Whether it's fast-track immigration,
                                    luxury transportation, or a private terminal experience,
                                    we ensure unparalleled attention to detail.
                                </p>
                                <p className="mb-4">
                                    Our fleet of over 50 luxury vehicles caters to every preference,
                                    including Mercedes-Benz models (Class-E, Class-S, and Class-V),
                                    with additional options like Maybach, Rolls Royce, and Range Rover
                                    available on request. Each transfer is managed by a
                                    professional chauffeur, equipped with local expertise to enhance your
                                    journey.
                                </p>
                                <p className="mb-4">
                                    <strong>Address:</strong> 9 rue Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt, France<br />
                                    <strong>Contact:</strong> <a href="mailto:contact@excellenceairport.fr">contact@excellenceairport.fr</a> | +33 6 99 26 81 75<br />
                                    <strong>RCS:</strong> 835 232 992 R.C.S. Pontoise
                                </p>
                                <p className="mb-4">
                                    At Excellence Airport, we are dedicated to redefining airport
                                    travel by combining innovation, luxury, and personalized service.
                                    Join the countless clients worldwide who trust us to deliver an
                                    unparalleled airport experience.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                            <h1 className="mb-5">Our Professional Drivers</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="img/driver.jpg" alt="" />
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
                                        <img className="img-fluid" src="img/driver1.jpg" alt="" />
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
                                        <img className="img-fluid" src="img/driver2.jpg" alt="" />
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
                                        <img className="img-fluid" src="img/driver3.jpg" alt="" />
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
                </div>

                <Footer />

            </div>
        </div>
    )
}

export default ComponayHistory