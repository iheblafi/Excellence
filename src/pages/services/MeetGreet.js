import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function MeetGreet() {
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
              <h1 class="display-3 text-white mb-3 animated slideInDown">Meet & Greet</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Services</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Meet & Greet</li>
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
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Meet & Greet</h5>
                <h1 className="mb-4">Airport Meet & Greet</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Imagine stepping into the bustling world of an international airport, where the hum of activity can feel overwhelming. But instead of being swept into the chaos, you're greeted with a warm smile and the promise of effortless travel. This is the essence of the Excellence Airport Meet & Greet service a sanctuary of ease, comfort, and luxury amidst the complexities of modern air travel.

                  From the moment you arrive, a dedicated representative becomes your guide, expertly navigating the labyrinth of the airport. Whether it is your first flight or your hundredth, their knowledge and care make every step feel effortless. Long lines become a distant memory as you glide through fast-track processing, bypassing the usual delays with grace.

                  As you move through the airport, the service transforms each transition into a moment of calm. Check-in is no longer a chore, security checks feel less daunting, and even the busiest terminals seem to slow down just for you. For those in transit, the service ensures that tight connections are met with precision and ease, turning what could be a stressful layover into an opportunity to relax.

                  The journey doesnt end at the gate. Whether you're departing, arriving, or simply passing through, the Meet & Greet service is tailored to your every need, ensuring that no detail is overlooked. It is not just about getting to your destination, it is about how you feel along the way: relaxed, cared for, and completely at ease.

                  With Excellence Airport Meet & Greet, air travel transforms from a logistical challenge into a luxurious experience, where every moment is designed to leave you feeling like a priority. It is not just a service; it is a story of effortless journeys and unforgettable care. </p>

              </div>
            </div>
          </div>
        </div>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Meet & Greet</h5>
              <h1 className="mb-5">Explore Our Meet & Greet Services</h1>
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
                  <div className="row g-5">

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/meetairport.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Meeting</span>
                          </h5>
                          <small className="fst-italic">Agent meets passengers at the end airbridge with a personalized name board.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/fasttrack.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Fast track</span>
                          </h5>
                          <small className="fst-italic">Passengers are escorted through immigration and customs using fast track lanes to minimize waiting times.                                                    </small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/escortinside.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Escorting passengers inside the airport </span>
                          </h5>
                          <small className="fst-italic">Escorting passengers to their onward mode of transportation or the arivals hall.</small>
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
                            <span>Coordination</span>
                          </h5>
                          <small className="fst-italic">Coordination begins before passengers arrive at the airport, with agents arranging curb side meetups and pre-arranged porter services for luggage assistance.</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/fasttracklanes.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Fast Track Lanes</span>
                          </h5>
                          <small className="fst-italic">Fast-track lanes are used for check-in, security, and passport control, ensuring  efficiency.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/boardinggate.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Boarding gate</span>
                          </h5>
                          <small className="fst-italic">Passengers are escorted to the departure lounge, if arranged, and then directly to the boarding gate.</small>
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
                            <span>Meet</span>
                          </h5>
                          <small className="fst-italic">Agents meet passengers with a name board at the airbridge or terminal.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/airport2.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Assist</span>
                          </h5>
                          <small className="fst-italic">Assistance is offered for baggage claim, if necessary, and porter services, if pre-booked.</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/fasttrack.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Fast Track</span>
                          </h5>
                          <small className="fst-italic">Fast-track access is utilized for security and immigration formalities, ensuring a smooth transition.
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/boardinggate.jpg" alt="" style={{ width: '80px' }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Boarding gate</span>
                          </h5>
                          <small className="fst-italic">Passengers are escorted to the departure lounge, if arranged, and then directly to the boarding gate.</small>
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