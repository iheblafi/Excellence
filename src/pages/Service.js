import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Service() {
    return (
        <div>
            <div className="container-xxl bg-white p-0">

                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: '12px', height: '12px' }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                <div class="container-xxl position-relative p-0">

                    <Navbar />

                    <div class="container-xxl py-5 bg-dark hero-header mb-5">
                        <div class="container text-center my-5 pt-5 pb-4">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Service</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
                            <h1 className="mb-5">Explore Our Services</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                        <h5>Master Chefs</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                                        <h5>Quality Food</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                        <h5>Online Order</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                        <h5>24/7 Service</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                        <h5>Master Chefs</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                                        <h5>Quality Food</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                        <h5>Online Order</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="service-item rounded pt-3">
                                    <div className="p-4">
                                        <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                        <h5>24/7 Service</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
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

export default Service