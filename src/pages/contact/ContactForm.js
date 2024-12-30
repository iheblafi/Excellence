import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function ContactForm() {
    return (
        <div> <div>
            <div className="container-xxl bg-white p-0">

                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: "14px", height: "14px" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>




                <div className="container-xxl position-relative p-0">

                    <Navbar />
                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>




                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Contact Us</h5>
                            <h1 className="mb-5">Contact For Any Query</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="row gy-4">
                                    <div className="col-md-4">
                                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                        <p><i className="fa fa-envelope-open text-primary me-2"></i>contact@excellenceairport.fr</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">General</h5>
                                        <p><i className="fa fa-envelope-open text-primary me-2"></i>contact@excellenceairport.fr</p>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="section-title ff-secondary fw-normal text-start text-primary">Technical</h5>
                                        <p><i className="fa fa-envelope-open text-primary me-2"></i>contact@excellenceairport.fr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d419651.8713825561!2d2.008209579382882!3d48.85884430369024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e296dc6e73b%3A0xb7e6c6c1e1e7b3f0!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1603794290143!5m2!1sen!2sus"
                                    width="600"
                                    height="450"
                                    style={{border: 0}}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>

                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                    <label for="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                    <label for="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                    <label for="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                                                    <label for="message">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />


            </div>

        </div></div>
    )
}

export default ContactForm