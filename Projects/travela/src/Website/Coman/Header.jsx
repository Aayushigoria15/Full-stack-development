import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <NavLink to="/" className="navbar-brand p-0">
                            <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Travela</h1>
                            <img src="img/logo.png" alt="Logo" />

                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                <NavLink to="/pack" className="nav-item nav-link">Packages</NavLink>
                                <NavLink to="/blog" className="nav-item nav-link">Blog</NavLink>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
                                        <NavLink to="/tour" className="dropdown-item">Explore Tour</NavLink>
                                        <NavLink to="/booking" className="dropdown-item">Travel Booking</NavLink>
                                        <NavLink to="/gallery" className="dropdown-item">Our Gallery</NavLink>
                                        <NavLink to="/guide" className="dropdown-item">Travel Guides</NavLink>
                                        <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <a href className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
                        </div>
                    </nav>
                    {/* Carousel Start */}
                    <div className="carousel-header">
                        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" />
                                <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                                <li data-bs-target="#carouselId" data-bs-slide-to={2} />
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img src="img/carousel-2.jpg" className="img-fluid" alt="Image" />
                                    <div className="carousel-caption">
                                        <div className="p-3" style={{ maxWidth: 900 }}>
                                            <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Explore The World</h4>
                                            <h1 className="display-2 text-capitalize text-white mb-4">Let's The World Together!</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/carousel-1.jpg" className="img-fluid" alt="Image" />
                                    <div className="carousel-caption">
                                        <div className="p-3" style={{ maxWidth: 900 }}>
                                            <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Explore The World</h4>
                                            <h1 className="display-2 text-capitalize text-white mb-4">Find Your Perfect Tour At Travel</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="img/carousel-3.jpg" className="img-fluid" alt="Image" />
                                    <div className="carousel-caption">
                                        <div className="p-3" style={{ maxWidth: 900 }}>
                                            <h4 className="text-white text-uppercase fw-bold mb-4" style={{ letterSpacing: 3 }}>Explore The World</h4>
                                            <h1 className="display-2 text-capitalize text-white mb-4">You Like To Go?</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <a className="btn-hover-bg btn btn-primary rounded-pill text-white py-3 px-5" href="#">Discover Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon btn bg-primary" aria-hidden="false" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon btn bg-primary" aria-hidden="false" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    {/* Carousel End */}
                </div>
                <div className="container-fluid search-bar position-relative" style={{ top: '-50%', transform: 'translateY(-50%)' }}>
                    <div className="container">
                        <div className="position-relative rounded-pill w-100 mx-auto p-5" style={{ background: 'rgba(19, 53, 123, 0.8)' }}>
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand" />
                            <button type="button" className="btn btn-primary rounded-pill py-2 px-4 position-absolute me-2" style={{ top: '50%', right: 46, transform: 'translateY(-50%)' }}>Search</button>
                        </div>
                    </div>
                </div>
                {/* Navbar & Hero End */}
            </div>

        </div>
    )
}

export default Header