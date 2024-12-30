import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

function Terms() {
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">Terms & Policies</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">Terms & Policies</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


        <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
           
           
           
            <div className="col-lg-12">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Terms & Policies</h5>
                <h1 className="mb-4">Our Commitment to Transparency and Trust</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    At Excellence Airport, we prioritize clarity, fairness, and mutual respect in our interactions with clients.
                    Our terms and policies are designed to ensure a seamless and trustworthy experience, reflecting our unwavering 
                    commitment to professionalism and customer satisfaction.
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong>Reservation and Payment Terms:</strong> To provide the highest quality of service, all bookings require 
                    a signed purchase order and a 50% deposit upfront. Payments are to be made promptly, in line with the agreed terms, 
                    ensuring smooth and uninterrupted service delivery. Invoices are payable at our headquarters: 9 Rue Jean-Jacques Rousseau, 
                    95350 Saint-Brice-sous-Forêt.
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong>Dispute Resolution and Late Payments:</strong> We understand that issues may occasionally arise. Any claims 
                    regarding services must be submitted in writing within eight days of receiving an invoice. For late payments, 
                    interest will be applied at a rate of 1% per month, and additional penalties may be imposed as stipulated in our policies. 
                    These measures ensure fairness and accountability on both sides.
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong>Ownership and Responsibility:</strong> Excellence Airport retains ownership of all goods and services until 
                    full payment is received. However, responsibility for the use and care of delivered items lies with the client upon delivery. 
                    In cases of non-payment, goods must be returned immediately at the client’s expense, as outlined in our terms.
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong>Legal Framework:</strong> Our operations are governed by French law, ensuring a robust and transparent 
                    framework for all transactions. Any disputes will fall under the exclusive jurisdiction of the Pontoise Commercial Courts, 
                    providing a clear pathway for resolution.
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    Excellence Airport stands by its commitment to delivering exceptional service while adhering to ethical and 
                    legal standards. These terms and policies are not just guidelines; they embody our dedication to integrity and trust 
                    in every aspect of our operations.
                </p>
            </div>
        </div>
    </div>
</div>


        <Footer/>

    </div>



</div>
)
}

export default Terms