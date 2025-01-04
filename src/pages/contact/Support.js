import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function Support() {
    return (
        <div>
            <div class="container-xxl bg-white p-0">

                <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{ width: "12px", height: "12px" }} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>




                <div class="container-xxl position-relative p-0">
                    <Navbar />



                    <div class="container-xxl py-5 bg-dark hero-header mb-5">
                        <div class="container text-center my-5 pt-5 pb-4">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Support Contact Details</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Support Contact Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-start">
                            <div className="col-lg-4">
                                <div className="row g-3">
                                    <div className="col-12 text-start" style={{ marginTop: '100px' }}>
                                        <img className="img-fluid  rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/contact.jpg" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-8">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Contact Information</h5>
                                <h1 className="mb-4">Reach Out to Us</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    At Excellence Airport, we believe in fostering open and effective communication with our valued clients and partners.
                                    Whether you have inquiries, require assistance, or wish to collaborate, our team is always accessible to provide support
                                    and ensure your experience with us is seamless.
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>Director of Publication:</strong> The operations and content of Excellence Airport are overseen by our esteemed
                                    Director of Publication, Benjamin Slama, who ensures that our communications maintain the highest standards of clarity and professionalism.
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>Email:</strong> For general inquiries, feedback, or detailed information about our services, feel free to contact us at
                                    <a href="mailto:contact@excellenceairport.fr">contact@excellenceairport.fr</a>. Our dedicated team responds promptly to address your needs.
                                </p>

                            </div>
                            <div className="col-lg-12">

                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>Phone:</strong> Need immediate assistance or wish to discuss a service in detail? Reach us directly at <a href="tel:+33699268175">+33 6 99 26 81 75</a>.
                                    Our representatives are ready to assist you with any query.
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>Physical Address:</strong> Visit or correspond with us at our headquarters:
                                    <em>9 Street Jean-Jacques Rousseau, 95350 Saint-Brice-sous-Forêt, France</em>. This is the hub of our operations, where
                                    we coordinate our premium services for clients worldwide.
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>RCS Registration:</strong> As a registered company, Excellence Airport adheres to all applicable legal and
                                    regulatory requirements. Our registration number is <em>835 232 992 R.C.S. Pontoise</em>, underscoring our commitment
                                    to transparency and trustworthiness.
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>Hosting Provider:</strong> Excellence Airport’s website and online services are hosted by <em>1&1 Internet SARL</em>,
                                    a reliable hosting provider ensuring robust performance, security, and accessibility for our digital platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer />

            </div>



        </div>
    )
}

export default Support