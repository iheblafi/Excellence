import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next';

function Terms() {
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">{t('Terms&Policies')}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">{t('Terms&Policies')}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


        <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5 align-items-center">
           
           
           
            <div className="col-lg-12">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{t('Terms&Policies')}</h5>
                <h1 className="mb-4">{t('Commitment')}</h1>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                {t('CommitmentDes')}
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong><i className="fas fa-star  me-2"></i>{t('ReservationAndPaymentTerms')}:</strong> {t('ReservationAndPaymentTermsDesc')}
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong><i className="fas fa-star  me-2"></i>{t('DisputeResolutionandLatePayments')}:</strong> {t('DisputeResolutionandLatePaymentsDesc')}
                </p>
                
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                    <strong><i className="fas fa-star  me-2"></i>{t('LegalFramework')}:</strong> {t('LegalFrameworkDesc')}
                </p>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                {t('CommitmentDes2')}
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