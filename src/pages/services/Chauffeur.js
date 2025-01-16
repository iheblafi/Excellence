import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import AutoPlayVideo from '../../utils/AutoPlayVideo';

function Chauffeur() {
  const { t } = useTranslation();
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
              <h1 class="display-3 text-white mb-3 animated slideInDown">{t('ChauffeurDrivenTransferss')}</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                  <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                  <li class="breadcrumb-item"><a href="#">Services</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">{t('ChauffeurDrivenTransferss')}</li>
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
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/chauffeurdeparture.jpg" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/escortoutside.jpg" style={{ marginTop: '25%' }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/driver.jpg" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/driver2.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('ChauffeurDrivenTransferss')}</h5>
                <h1 className="mb-4">{t('AirportChauffeurDrivenTransfers')}</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}> {t('AirportChauffeurDrivenTransfersDesc1')} </p>

              </div>
            </div>
          </div>
        </div>

        
       


        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{t('ChauffeurDrivenTransferss')}</h5>
              <h1 className="mb-5">{t('ExploreOurChauffeurDrivenFeatures')}</h1>
            </div>
            <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">

              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-5">

                    <div className="col-lg-6">
                      <NavLink to="/availablecars" className="d-flex align-items-center text-decoration-none">
                        <div className="rounded-circle overflow-hidden m-4">
                          <img className="img-fluid" src="img/mercedes.jpg" alt="Available Cars" />
                        </div>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('AvailableCars')}</span>
                          </h5>
                          <small className="fst-italic">{t('ExploreAvailableFleetNow')}</small>
                        </div>
                      </NavLink>
                    </div>

                    <div className="col-lg-6">
                      <NavLink to="/carmodels" className="d-flex align-items-center text-decoration-none">
                        <div className="rounded-circle overflow-hidden m-4">
                          <img className="img-fluid" src="img/car_models.jpg" alt="Car Models" />
                        </div>
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('CarModels')}</span>
                          </h5>
                          <small className="fst-italic">{t('ExploreVarietyCarModels')}</small>
                        </div>
                      </NavLink>
                    </div>




                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>



      <Footer />


    </div>




  )
}

export default Chauffeur