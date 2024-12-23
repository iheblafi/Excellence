import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { NavLink } from 'react-router-dom'

function Chauffeur() {
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
              <h1 class="display-3 text-white mb-3 animated slideInDown">Chauffeur Driven Transfers</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center text-uppercase">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Services</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Chauffeur Driven Transfers</li>
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
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Chauffeur Driven Transfers</h5>
                <h1 className="mb-4">Airport Chauffeur Driven Transfers</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}>Imagine stepping off a flight and into a world where every detail of your ground transportation is
                  seamlessly managed, where efficiency meets elegance, and where your journey feels as refined as your destination. Excellence Airport Chauffeur-Driven
                  Transfers transform travel into a sophisticated experience, tailored for those who demand more than just a ride, they seek an extension of their comfort
                  and style.

                  Whether you're traveling for business or leisure, these transfers are designed with you in mind. Your schedule becomes the priority,
                  allowing you to focus on what matters most while enjoying the flawless service that defines Excellence Airport. Each journey begins
                  with a vehicle chosen specifically for your needs, whether it's an economy option for practicality, a luxury sedan for indulgence,
                  or spacious transport for groups. Every vehicle is meticulously maintained to ensure a smooth and secure ride.

                  At the heart of the service are chauffeurs who are more than just drivers—they are your knowledgeable companions. With local expertise and a
                  deep understanding of the region's culture, attractions, and customs, they add an enriching layer to your journey. Whether you're navigating a
                  bustling city, heading to a key business meeting, or exploring hidden gems off the beaten path, their insights make every mile memorable.

                  Flexibility is key to the Excellence Airport experience. Full-day bookings allow you to embrace the freedom of exploring unfamiliar areas
                  at your own pace or attending multiple engagements without the hassle of arranging separate transportation. From sunrise to sunset and beyond,
                  the service adapts effortlessly to your plans.

                  And when it comes to airport pickups, drop-offs, or intercity transfers, the service operates round the clock, ensuring you're never left waiting.
                  Each ride begins on time and ends with the same reliability, offering a sense of continuity that complements the excellence you expect.

                  Excellence Airport Chauffeur-Driven Transfers redefine what it means to travel on the ground. They are more than a service they are an experience
                  that blends practicality with sophistication, turning every journey into a seamless chapter of your travel story. </p>

              </div>
            </div>
          </div>
        </div>


        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Chauffeur Driven Transfers</h5>
              <h1 className="mb-5">Explore Our Chauffeur Driven Features</h1>
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
                            <span>Available Cars</span>
                          </h5>
                          <small className="fst-italic">Explore our available fleet cars for the time being.</small>
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
                            <span>Car Models</span>
                          </h5>
                          <small className="fst-italic">Explore our variety of fleet car models.</small>
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