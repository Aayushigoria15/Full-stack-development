import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Amain({ Aname }) {
    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Aid")) {
            redirect("/alogin")
        }
    })

    const logout = () => {
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/alogin")
        toast.success("Admin logout Successs..")
    }
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

                                <Link to="/alogin"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2" />Login</small></Link>
                                <div className="dropdown">
                                    <div className="dropdown">
                                        <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> Hello {localStorage.getItem("Aname")}</small></a>
                                        <div className="dropdown-menu rounded">
                                            <Link to="/aprofile" className="dropdown-item text-dark"><i className="fas fa-user-alt me-2" /> My Profile</Link>

                                            {
                                                (() => {
                                                    if (localStorage.getItem("Aid")) {
                                                        return (
                                                            <>
                                                                <Link onClick={logout} className="nav-item nav-link text-dark"><i className="fas fa-power-off me-2" /> Log Out</Link>
                                                            </>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <>
                                                                <NavLink to="/alogin" className="nav-item nav-link">login</NavLink>
                                                            </>
                                                        )
                                                    }
                                                })()
                                            }

                                        </div>
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
