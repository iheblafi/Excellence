import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 text-start">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{t('Company')}</h4>
                        <a className="btn btn-link" href="">{t('AboutUs')}</a>
                        <a className="btn btn-link" href="">{t('ContactUs')}</a>
                        <a className="btn btn-link" href="">{t('Booking')}</a>
                        <a className="btn btn-link" href="">{t('PrivacyPolicy')}</a>
                        <a className="btn btn-link" href="">{t('Terms&Condition')}</a>
                    </div>
                    <div className="col-lg-4 col-md-6 text-start">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{t('Contact')}</h4>
                        <p className="mb-2 text-start"><i className="fa fa-map-marker-alt me-3"></i>{t('9StreetJean')}</p>
                        <p className="mb-2 text-start"><i className="fa fa-phone-alt me-3"></i>+33699268175</p>
                        <p className="mb-2 text-start"><i className="fa fa-envelope me-3"></i>contact@excellenceairport.fr</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-start">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">{t('Opening')}</h4>
                        <h5 className="text-light fw-normal">{t('MondaySaturday')}</h5>
                        <p>09AM - 09PM</p>
                        <h5 className="text-light fw-normal">{t('Sunday')}</h5>
                        <p>10AM - 08PM</p>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-12 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Excellence Airport 2024</a>, {t('AllRightReserved.')}
                            <br />
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
};

export default Footer;
