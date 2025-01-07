import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next';

function AvaialbleCars() {
        const { t } = useTranslation();
    
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
                            <h1 class="display-3 text-white mb-3 animated slideInDown">{t('AvailableCars')}</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">{t('AvailableCars')}</li>
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
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/mercedes.jpg" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('AvailableCars')}</h5>
                                <h1 className="mb-4">{t('AboutCars')}</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>

                                {t('AboutCars2')}</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-xxl pt-5 pb-3">
                    <div class="container">
                        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 class="section-title ff-secondary text-center text-primary fw-normal">{t('Fleet')}</h5>
                            <h1 class="mb-5">{t('OurAvailableCars')}</h1>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/mercedesClassE.jpg" alt="" />
                                    </div>
                                    <h5 class="mb-0">Mercedes</h5>
                                    <small>{t('Class')} E</small>
                                    <div class="d-flex justify-content-center mt-3">
                                       
                                    </div>
                                   
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/mercedesClassE1.jpg" alt="" />
                                    </div>
                                    <h5 class="mb-0">Mercedes </h5>
                                    <small>{t('Class')} E</small>
                                    
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/mercedesClassS.jpg" alt="" />
                                    </div>
                                    <h5 class="mb-0">Mercedes</h5>
                                    <small>{t('Class')} S</small>
                                    
                                </div>
                            </div>
                          
                            
                           
                            
                            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div class="team-item text-center rounded overflow-hidden">
                                    <div class="rounded-circle overflow-hidden m-4">
                                        <img class="img-fluid" src="img/mercedesClassV.jpg" alt="" />
                                    </div>
                                    <h5 class="mb-0">Mercedes</h5>
                                    <small>{t('Class')} V</small>
                                    <div class="d-flex justify-content-center mt-3">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>



        </div>)
}

export default AvaialbleCars