import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React, { useState } from 'react'; // Import useState
import { useBookingMutation } from "../slices/bookingSlice";
import { useSelector } from "react-redux";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'; // Import format from date-fns

function Booking() {
    const [book] = useBookingMutation();
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const userInfo = useSelector((state) => state.auth.userInfo);

    // State to store form values
    const [formValues, setFormValues] = useState({
        name: userInfo ? userInfo.name : '',
        email: userInfo ? userInfo.email : '',
        countryCode: '+216', // Default country code
        phoneNumber: userInfo ? userInfo.phoneNumber : '',
        bookingDate: '',
        persons: '',
       // details: '',
        valises: '',
        type: '',
        specialRequest: '',

    });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formValues); // Log the form values
        try {
            const user = await book({ ...formValues, token: userInfo.accessToken }).unwrap();
            setAlert({ show: true, type: 'success', message: 'Booking is sent successfully!' });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            // Handle success
        } catch (err) {
            // Handle error
            setAlert({ show: true, type: 'danger', message: err?.data?.message || "Booking failed." });

        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const { t } = useTranslation();
    return (
        <div>
            <div className="container-xxl bg-white p-0">
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: "12px", height: "12px;" }} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

                <div className="container-xxl position-relative p-0">
                    {/* <Navbar /> */}

                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container text-center my-5 pt-5 pb-4">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">{t('Booking')}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">{t('Booking')}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img className="img-fluid rounded" src="img/plane2.jpg" alt="" style={{ maxWidth: "100%", height: "100%" }} />
                        </div>
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('Booking')}</h5>
                                <h1 className="text-white mb-4">{t('BookAServiceOnline')}</h1>
                                <form onSubmit={onSubmit}>
                                    <div className="row g-3">
                                        {!userInfo && (
                                            <>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name" // Add name attribute
                                                            placeholder="Your Name"
                                                            value={formValues.name} // Bind value
                                                            onChange={handleChange} // Handle change
                                                        />
                                                        <label htmlFor="name">{t('YourName')}</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            id="email"
                                                            name="email" // Add name attribute
                                                            placeholder="Your Email"
                                                            value={formValues.email} // Bind value
                                                            onChange={handleChange} // Handle change
                                                        />
                                                        <label htmlFor="email">{t('YourEmail')}</label>
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="form-floating">
                                                        <select
                                                            className="form-select"
                                                            id="countryCode"
                                                            name="countryCode" // Add name attribute
                                                            value={formValues.countryCode} // Bind value
                                                            onChange={handleChange} // Handle change
                                                        >
                                                            <option value="" disabled>
                                                                {t('Select')}
                                                            </option>
                                                            <option value="+216">+216 (Tunisia)</option>
                                                            <option value="+33">+33 (France)</option>
                                                            <option value="+1">+1 (USA)</option>
                                                            <option value="+44">+44 (UK)</option>
                                                            <option value="+91">+91 (India)</option>
                                                        </select>
                                                        <label htmlFor="countryCode" className="form-label">
                                                            Code
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-floating">
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            id="phoneNumber"
                                                            name="phoneNumber" // Add name attribute
                                                            placeholder={t('PhoneNumber')}
                                                            value={formValues.phoneNumber} // Bind value
                                                            onChange={handleChange} // Handle change
                                                            required
                                                        />
                                                        <label htmlFor="phoneNumber">{t('PhoneNumber')}</label>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <div className="col-md-12">
                                            <DatePicker
                                                selected={formValues.bookingDate} // Bind the selected date
                                                onChange={date => setFormValues({ ...formValues, bookingDate: format(date, "dd/MM/yyyy") })}
                                                className="form-control form-control-lg custom-date-picker" // Add Bootstrap class for styling
                                                placeholderText={t('Select Date & Time')} // Placeholder text
                                                form="dd/MM/yyyy"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="number"
                                                    className="form-control valises-input"
                                                    id="persons"
                                                    name="persons" // Add name attribute
                                                    placeholder="Persons"
                                                    value={formValues.persons} // Bind value
                                                    onChange={handleChange} // Handle change
                                                />
                                                <label htmlFor="persons">{t('Persons')}</label>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control detailflight-input"
                                                    id="detailflight"
                                                    name="details" // Add name attribute
                                                    placeholder="Flight details"
                                                    value={formValues.details} // Bind value
                                                    onChange={handleChange} // Handle change
                                                />
                                                <label htmlFor="detailflight">{t('Details')}</label>
                                            </div>
                                        </div> */}
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="number"
                                                    className="form-control valises-input"
                                                    id="valises"
                                                    name="valises" // Add name attribute
                                                    placeholder="Bags number"
                                                    value={formValues.valises} // Bind value
                                                    onChange={handleChange} // Handle change
                                                />
                                                <label htmlFor="valises">{t('BagsNumber')}</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-floating">
                                                <select class="form-select" id="select2"
                                                    value={formValues.type} // Bind to formValues.type
                                                    onChange={(e) => setFormValues({ ...formValues, type: e.target.value })} >
                                                    <option value="" disabled>{t('SelectServiceType')}</option> {/* Placeholder option */}
                                                    <option value="MEET_&_GREET">{t('Meet&Greet')}</option>
                                                    <option value="VIP_TERMINAL">{t('VIPTerminal')}</option>
                                                    <option value="CHAUFFEUR_DRIVEN_TRANSFERS">{t('ChauffeurDrivenTransfers')}</option>
                                                </select>
                                                <label for="select2">{t('ServiceType')}</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Special Request"
                                                    id="message"
                                                    name="specialRequest" // Add name attribute
                                                    style={{ height: "100px" }}
                                                    value={formValues.specialRequest} // Bind value
                                                    onChange={handleChange} // Handle change
                                                ></textarea>
                                                <label htmlFor="message">{t('SpecialRequest')}</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                    <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                        allow="autoplay"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Booking;