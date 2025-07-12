import React from 'react'

function Amain({ Aname }) {
    return (
        <div>
            <main className="admin-main bg-breadcrumb" style={{ height: "300px" }} >
                <div className=" bg-primary px-5  mt-0 d-none d-lg-block">
                    <div className="row gx-0">
                        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a href="#"><small className="me-3 text-light"><i className="fa fa-user me-2" />Register</small></a>
                                <a href="#"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2" />Login</small></a>
                                <div className="dropdown">
                                    <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> My Dashboard</small></a>
                                    <div className="dropdown-menu rounded">
                                        <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2" /> My Profile</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2" /> Inbox</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-bell me-2" /> Notifications</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-cog me-2" /> Account Settings</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2" /> Log Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-center text-white pt-5'>Welcome to the Website</h1>

            </main>
        </div>
    )
}

export default Amain
