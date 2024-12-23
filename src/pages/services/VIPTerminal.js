import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function VIPTerminal() {
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
              <h1 class="display-3 text-white mb-3 animated slideInDown">VIP Terminal</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Services</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">VIP Terminal</li>
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
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="img/classyroom.jpg" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="img/classyroom1.jpg" style={{ marginTop: '25%' }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="img/classyroom3.jpg" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="img/classyroom2.jpg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">VIP Terminal</h5>
                <h1 className="mb-4">Airport VIP Terminal</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Picture a journey that begins not in the crowded halls of a busy airport, but in the serene
                  exclusivity of a private terminal a space reserved for those who seek both privacy and efficiency. The VIP Terminal Service redefines air travel,
                  offering a seamless and tranquil experience that lets you focus on what matters most: your comfort and peace of mind.

                  From the moment you arrive, you're welcomed into an oasis of calm. Far from the hustle and bustle, this private terminal is your gateway to a more
                  refined way of traveling. Here, every detail has been curated for your convenience, starting with personalized assistance that handles all airport
                  procedures on your behalf. Security checks, immigration, and customs tasks that often demand your time and patience are quietly managed behind the scenes,
                  leaving you free to relax.

                  As you settle into the plush surroundings of the terminal, the stress of traditional travel fades away.
                  A dedicated team ensures every aspect of your journey is perfectly orchestrated, from luggage handling to last-minute requests.


                  Whether you're catching up on work, enjoying a quiet moment, or savoring a refreshment, the experience is tailored entirely to you.

                  And when it's time to board, the journey continues with seamless precision. A private transfer whisks you directly to your aircraft,
                  bypassing the crowded gates and queues. Every step is designed to protect your time, your privacy, and your sense of ease.

                  The VIP Terminal Service isn't just an upgrade; it's a reimagining of what travel can be. It's a promise of exclusivity,
                  a commitment to personalization, and an experience where the ordinary is replaced with the extraordinary. From start to finish,
                  it's air travel as it was always meant to be luxurious, effortless, and uniquely yours. </p>

              </div>
            </div>
          </div>
        </div>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">VIP Terminal</h5>
              <h1 className="mb-5">Explore Our VIP Terminal Services</h1>
            </div>
            <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                    <i className="fa fa-plane-arrival fa-2x text-primary"></i>
                    <div className="ps-3">
                      <h6 className="mt-n1 mb-0">Arrival</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                    <i className="fa fa-plane-departure fa-2x text-primary"></i>
                    <div className="ps-3">
                      <h6 className="mt-n1 mb-0">Departure</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                    <i className="fa fa-forward fa-2x text-primary"></i>
                    <div className="ps-3">
                      <h6 className="mt-n1 mb-0">Transition</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/vipterminal.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Transport to VIP terminal</span>
                          </h5>
                          <small className="fst-italic">Chauffeur-driven transport from the aircraft to the VIP terminal.</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/escortoutside.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Escorting passengers outside the airport</span>
                          </h5>
                          <small className="fst-italic">Escorting passengers to their agreed transportation point.</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/airportformalities.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Handling airport formalities</span>
                          </h5>
                          <small className="fst-italic">A dedicated agent handles all airport formalities, including immigration and customs.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/lugguage.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Handling lugguage</span>
                          </h5>
                          <small className="fst-italic">Luggage is delivered directly to the VIP terminal.</small>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/personalized.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Personalized Coordination</span>
                          </h5>
                          <small className="fst-italic">Personalized coordination of drop-off time and location with the assigned agent before arrival. </small>
                        </div>
                      </div>
                    </div>
                   
                   

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/combination.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Combination</span>
                          </h5>
                          <small className="fst-italic">Curb side meet-and-greet, luggage assistance, and expedited check-in.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/security.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Security</span>
                          </h5>
                          <small className="fst-italic">Security and passport control are handled within the VIP terminal.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/chauffeurdeparture.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chauffeur Service</span>
                          </h5>
                          <small className="fst-italic">Chauffeur service to the aircraft if it is on a remote stand.</small>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                   
                    
                   
                    
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/chauffeurdeparture.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chauffeur service</span>
                          </h5>
                          <small className="fst-italic">Chauffeur service from the aircraft to the VIP terminal for a relaxing layover.</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/escortoutside.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chauffeur transport</span>
                          </h5>
                          <small className="fst-italic">Chauffeur transport back to the aircraft for the next leg of the journey.                                                    </small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/lugguage.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Assistance with luggage</span>
                          </h5>
                          <small className="fst-italic">Assistance with luggage and airport formalities.</small>
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

export default VIPTerminal