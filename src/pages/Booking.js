import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import React from 'react'

function Booking() {

    const { t } = useTranslation();
    return (
        <div>
            <div class="container-xxl bg-white p-0">

                <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{ width: "12px", height: "12px;" }} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>




                <div class="container-xxl position-relative p-0">
                    <Navbar />

                    <div class="container-xxl py-5 bg-dark hero-header mb-5">
                        <div class="container text-center my-5 pt-5 pb-4">
                            <h1 class="display-3 text-white mb-3 animated slideInDown">{t('Booking')}</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center text-uppercase">
                                    <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">{t('Booking')}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>




                <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-0">
                        <div className="col-md-6">
                            <img className="img-fluid rounded" src="img/plane2.jpg" alt="" style={{ maxWidth: "100%", height: "100%" }} />
                        </div>
                        <div class="col-md-6 bg-dark d-flex align-items-center">
                            <div class="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 class="section-title ff-secondary text-start text-primary fw-normal">{t('Booking')}</h5>
                                <h1 class="text-white mb-4">{t('BookAServiceOnline')}</h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">{t('YourName')}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">{t('YourEmail')}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" class="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label for="datetime">{t('Date&Time')}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <select class="form-select" id="select1">
                                                    <option value="1">{t('People1')}</option>
                                                    <option value="2">{t('People2')}</option>
                                                    <option value="3">{t('People3')}</option>
                                                </select>
                                                <label for="select1">{t('NoOfPeople')}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control detailflight-input" id="detailflight" placeholder="Flight details" data-target="#date3" data-toggle="detailflight" />
                                                <label for="detailflight">{t('FlightDetails')}</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date4" data-target-input="nearest">
                                                <input type="text" className="form-control bagsnumber-input" id="bagsnumber" placeholder="Bugs number" data-target="#date4" data-toggle="bugsnumber" />
                                                <label for="bagsnumber">{t('BagsNumber')}</label>
                                            </div>
                                        </div>
                                        <div className='col-md-4 '>
                                            <div className="form-floating">
                                                <select
                                                    className="form-select"
                                                    id="countryCode"
                                                //S	style={{ marginRight: '10px' }}
                                                //required
                                                //onChange={(e) => setCountryCode(e.target.value)}
                                                >
                                                    <option value="" disabled selected>
                                                        {t('Select')}
                                                    </option>

                                                    <option value="+216">+216 (Tunisia)</option>
                                                    <option value="+33">+33 (France)</option>
                                                    <option value="+1">+1 (USA)</option>
                                                    <option value="+44">+44 (UK)</option>
                                                    <option value="+91">+91 (India)</option>
                                                    {/* Add more country codes as needed */}
                                                </select>
                                                <label htmlFor="countryCode" className="form-label">
                                                    Code
                                                </label>
                                            </div>
                                        </div>
                                        <div className=" col-md-8">
                                            <div className="form-floating">

                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    id="phoneNumber"
                                                    placeholder={t('PhoneNumber')}
                                                    //value={phoneNumber}
                                                   //onChange={(e) => setPhoneNumber(e.target.value)}
                                                    required
                                                />
                                                <label htmlFor="phoneNumber">{t('PhoneNumber')}</label>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                                                <label for="message">{t('SpecialRequest')}</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content rounded-0">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div class="ratio ratio-16x9">
                                    <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <Footer />


            </div>


        </div>
    )
}

export default Booking

