import React, { useEffect, useState } from 'react'
import Header2 from '../Coman/Header2'
import Footer from '../Coman/Footer'
import axios from 'axios'

function Guides() {

    const [guide, setguide] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/guies")
        console.log(res.data)
        setguide(res.data)
    }

    return (
        <div>
            <Header2 title="Our Travel Guides" name="Guides" />
            <div>
                {/* Travel Guide Start */}
                <div className="container-fluid guide py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Travel Guide</h5>
                            <h1 className="mb-0">Meet Our Guide</h1>
                        </div>
                        <div className="row g-4">
                            {
                                guide && guide.map((data) => {
                                    return (
                                        <div className="col-md-6 col-lg-3">
                                            <div className="guide-item">
                                                <div className="guide-img">
                                                    <div className="guide-img-efects">
                                                        <img src={data.img} style={{ height: "250px" }} className="img-fluid w-100 rounded-top" alt="Image" />
                                                    </div>
                                                    <div className="guide-icon rounded-pill p-2">
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                                    </div>
                                                </div>
                                                <div className="guide-title text-center rounded-bottom p-4">
                                                    <div className="guide-title-inner">
                                                        <h4 className="mt-3">{data.name}</h4>
                                                        <p className="mb-0">{data.Designation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Travel Guide End */}
                {/* Subscribe Start */}
                <div className="container-fluid subscribe py-5">
                    <div className="container text-center py-5">
                        <div className="mx-auto text-center" style={{ maxWidth: 900 }}>
                            <h5 className="subscribe-title px-3">Subscribe</h5>
                            <h1 className="text-white mb-4">Our Newsletter</h1>
                            <p className="text-white mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat a laborum quasi.
                            </p>
                            <div className="position-relative mx-auto">
                                <input className="form-control border-primary rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Subscribe End */}
            </div>
            <Footer />

        </div>
    )
}

export default Guides