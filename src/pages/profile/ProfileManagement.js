import { t } from 'i18next';
import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import "./Profile.css"
function ProfileManagement() {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const {profile:{fullName,email,phoneNumber}} = userInfo
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
                    <h1 class="display-3 text-white mb-3 animated slideInDown">{t('Profile')}</h1>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center text-uppercase">
                            <li class="breadcrumb-item"><a href="#">{t('Home')}</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-white active" aria-current="page">{t('Profile')}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>




        <div class="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                           <div className="profile-container">
            <div className="profile-header">
            <h3>{fullName}</h3>
            </div>
            <div className="profile-content">
                <div className="profile-picture">
                    <img src="/img/user-avatar.png" alt="Profile" />
                </div>
                <div className="profile-details">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone Number:</strong> {phoneNumber}</p>
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

export default ProfileManagement