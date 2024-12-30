import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Values() {
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
                            <h1 class="display-3 text-white mb-3 animated slideInDown">Values & Mission statements</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Values & Mission statements</li>
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
                                    <div className="col-12 text-start">
                                        <img
                                            className="img-fluid rounded w-100 wow zoomIn"
                                            data-wow-delay="0.1s"
                                            src="img/trust.jpg"
                                            style={{ marginTop: '-20px' }}
                                            alt="Trust"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Values & Mission Statements</h5>
                                <h1 className="mb-4">Our Guiding Principles</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    At Excellence Airport, we believe that every journey begins with an exceptional experience. Our mission is
                                    to redefine airport travel by providing high-end, personalized, and seamless services that ensure comfort,
                                    efficiency, and luxury for every traveler. From the moment you arrive, our team is dedicated to simplifying
                                    the complexities of modern air travel, offering innovative solutions that blend professionalism with genuine care.
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    Our values are the cornerstone of our commitment to excellence:
                                </p>
                                <ul className="mb-4" style={{ textAlign: 'justify', listStyleType: 'circle', marginLeft: '20px' }}>
                                    <li><strong>Customer-Centric Approach:</strong> We tailor our services to meet the unique needs of each traveler,
                                        whether for business or leisure, ensuring a personalized and memorable experience.</li>
                                    <li><strong>Excellence in Service:</strong> Our dedication to professionalism and attention to detail guarantees
                                        consistently top-tier experiences, leaving no room for compromise.</li>
                                    <li><strong>Global Accessibility:</strong> With multilingual support in French, English, and Spanish, we embrace
                                        inclusivity and ensure smooth communication for our diverse clientele.</li>
                                    <li><strong>Commitment to Privacy and Efficiency:</strong> Designed for those who value discretion and time, our VIP
                                        services, including private terminal access and chauffeur-driven transfers, offer unparalleled convenience.</li>
                                    <li><strong>Sustainability and Responsibility:</strong> We adhere to ethical practices, prioritizing the safety and
                                        well-being of our clients and team while striving for long-term sustainability.</li>
                                </ul>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    These values define who we are and guide every decision we make. Excellence Airport is not just a service provider;
                                    we are your trusted partner in ensuring that your journey is as remarkable as your destination.
                                </p>


                            </div>

                            <div className="col-lg-12" style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <h5 className="section-title ff-secondary  text-primary fw-normal">Let us manage the details while you enjoy the 
                            journey</h5>

                            </div>

                        </div>
                    </div>
                </div>

                <Footer />

            </div>



        </div>

    )
}

export default Values