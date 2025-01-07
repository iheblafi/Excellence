import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next';

function Values() {
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
                            <h1 class="display-3 text-white mb-3 animated slideInDown">{('Values&MissionStatements')}</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">{('Home')}</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">{t('Values&MissionStatements')}</li>
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
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('Values&MissionStatements')}</h5>
                                <h1 className="mb-4">{t('OurGuidingPrinciples')}</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                {t('OurGuidingPrinciplesDesc')}
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                {t('OurValues')}:
                                </p>
                                <ul className="mb-4" style={{ textAlign: 'justify', listStyleType: 'circle', marginLeft: '20px' }}>
                                    <li><strong>{t('CustomerCentric')}:</strong>{t('CustomerCentricDesc')}</li>
                                    <li><strong>{t('ExcellenceInService')}:</strong>{t('ExcellenceInServiceDesc')}</li>
                                    <li><strong>{t('GlobalAccessibility')}:</strong>{t('GlobalAccessibilityDesc')}</li>
                                    <li><strong>{t('CommitmenToPrivacy')}:</strong>{t('CommitmenToPrivacyDesc')}</li>
                                    <li><strong>{t('SustainabilityAndResponsibility')}:</strong>{t('SustainabilityAndResponsibilityDesc')}</li>
                                </ul>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                {t('ValuesConclusion')}
                                </p>


                            </div>

                            <div className="col-lg-12" style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <h5 className="section-title ff-secondary  text-primary fw-normal">{t('Motto')}</h5>

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