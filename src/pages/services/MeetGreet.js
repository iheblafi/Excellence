import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next';

function MeetGreet() {
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
              <h1 class="display-3 text-white mb-3 animated slideInDown">{t('Meet&Greet')}</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                  <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                  <li class="breadcrumb-item"><a href="#">Services</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">{t('Meet&Greet')}</li>
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
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/meetairport.jpg" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/airport2.jpg" style={{ marginTop: '25%' }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/airport.jpg" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/escortinside.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('Meet&Greet')}</h5>
                <h1 className="mb-4">{t('AirportMeet&Greet')}</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}> {t('AirportMeet&GreetDesc')} </p>

              </div>
            </div>
          </div>
        </div>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{t('Meet&Greet')}</h5>
              <h1 className="mb-5">{t('ExploreOurMeet&GreetServices')}</h1>
            </div>
            <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                    <i className="fa fa-plane-arrival fa-2x text-primary"></i>
                    <div className="ps-3">
                      <h6 className="mt-n1 mb-0">{t('Arrival')}</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                    <i className="fa fa-plane-departure fa-2x text-primary"></i>
                    <div className="ps-3">
                      <h6 className="mt-n1 mb-0">{t('Departure')}</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                    <i className="fa fa-forward fa-2x text-primary"></i>
                    <div className="ps-3">
                      <h6 className="mt-n1 mb-0">{t('Transit')}</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-5">

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/meetairport.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('Meeting')}</span>
                          </h5>
                          <small className="fst-italic">{t('MeetingDesc')}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/fasttrack.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('FastTrack')}</span>
                          </h5>
                          <small className="fst-italic">{t('FastTrackDesc')}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/escortinside.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('EscortingPassengersInside')}</span>
                          </h5>
                          <small className="fst-italic">{t('EscortingPassengersDesc')}</small>
                        </div>
                      </div>
                    </div>







                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/coordination.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('Coordination')}</span>
                          </h5>
                          <small className="fst-italic">{t('CoordinationDesc')}</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/fasttracklanes.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('FastTrackLanes')}</span>
                          </h5>
                          <small className="fst-italic">{t('FastTrackLanesDesc')}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/boardinggate.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('BoardingGate')}</span>
                          </h5>
                          <small className="fst-italic">{t('BoardingGateDesc')}</small>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/meetairport.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('Meet')}</span>
                          </h5>
                          <small className="fst-italic">{t('MeettDesc')}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/airport2.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('Assist')}</span>
                          </h5>
                          <small className="fst-italic">{t('AssistDesc')}</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/fasttrack.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('FastTrackk')}</span>
                          </h5>
                          <small className="fst-italic">{t('FastTrackkDesc')}
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/boardinggate.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{t('BoardingGate')}</span>
                          </h5>
                          <small className="fst-italic">{t('BoardingGateDesc')}</small>
                        </div>
                      </div>
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

export default MeetGreet