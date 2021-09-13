import React from 'react';
// import './Profile.css'

const ProfileCard = (props) => {

    return(
        <div>
            <div className="main-content">
                <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center wrap-header">
                    <span className="mask bg-gradient-default opacity-8"></span>
                    <div className="container-fluid d-flex align-items-center">
                    <div className="row">
                        <div className="col-lg-7 col-md-10">
                        <h1 className="display-2 text-white">{props.firstName}</h1>
                        <p className="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                        <a href="#!" className="btn btn-info">Edit profile</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col order-xl-2 mb-5 mb-xl-0">
                        <div className="card card-profile shadow">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 order-lg-2">
                            <div className="card-profile-image">
                                <a href="#">
                                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" className="rounded-circle" />
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                            
                        </div>
                        <div className="card-body pt-0 pt-md-4">
                            <div className="row">
                            <div className="col">
                                <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                <div>
                                    <span className="heading">22</span>
                                    <span className="description">Jobs</span>
                                </div>
                                <div>
                                    <span className="heading">10</span>
                                    <span className="description">Categories</span>
                                </div>
                                <div>
                                    <span className="heading">89</span>
                                    <span className="description">Comments</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="text-center">
                            <h3>
                                Jessica Jones<span className="font-weight-light">, 27</span>
                            </h3>
                            <div className="h5 font-weight-300">
                                <i className="ni location_pin mr-2"></i>Bucharest, Romania
                            </div>
                            <div className="h5 mt-4">
                                <i className="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                            </div>
                            <div>
                                <i className="ni education_hat mr-2"></i>University of Computer Science
                            </div>
                            <hr className="my-4" />
                            <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            </div>

    )
}

export default ProfileCard;