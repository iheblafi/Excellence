import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useTranslation } from 'react-i18next';

function Support() {
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
                            <h1 class="display-3 text-white mb-3 animated slideInDown">{t('SupportContactDetails')}</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">{t('SupportContactDetails')}</li>
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
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('ContactInformation')}</h5>
                                <h1 className="mb-4">{t("Reach")}</h1>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    {t('ReachDesc')}
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>{t('DirectorOfPublication')}:</strong> {t('DirectorOfPublicationDesc')}
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>Email:</strong> {t('EmailDesc1')}
                                    <a href="mailto:contact@excellenceairport.fr"> contact@excellenceairport.fr </a>. {t('EmailDesc2')}
                                </p>

                            </div>
                            <div className="col-lg-12">

                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>{t('Phone')}:</strong> {t('PhoneDesc1')} <a href="tel:+33699268175">+33 6 99 26 81 75</a>.
                                    {t('PhoneDesc2')}
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>{t('PhysicalAddress')}:</strong> {t('PhysicalAddressDesc1')}:
                                    <em>{t('AddressDesc')}</em>. {t('PhysicalAddressDesc2')}
                                </p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>{t('RCSRegistration')}:</strong> {t('RCSRegistrationDesc1')} <em>835 232 992 R.C.S. Pontoise</em>, {t('RCSRegistrationDesc2')}</p>
                                <p className="mb-4" style={{ textAlign: 'justify' }}>
                                    <strong>{t('HostingProvider')}:</strong> {t('HostingProviderDesc1')} <em>1&1 Internet SARL</em>,
                                    {t('HostingProviderDesc2')}
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