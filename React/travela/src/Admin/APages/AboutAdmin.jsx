import React, { useEffect, useState } from 'react'
import Asidebar from '../AComman/Asidebar'
import Amain from '../AComman/Amain'
import axios from 'axios'
import { data, Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, ButtonGroup, Modal } from 'react-bootstrap'


// for edit and update
function EditGuideModal({ show, onHide, data, onChange, onUpdate }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Guide: {data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <h3 className="mb-2">Update Guide Data</h3>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={data.name} onChange={onChange} type="text" name='name' className="form-control border-0" placeholder="Your Name" />
                                    <label>Guide Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={data.Designation} onChange={onChange} type="text" name='Designation' className="form-control border-0" placeholder="Your Designation" />
                                    <label>Designation</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={data.Description} onChange={onChange} type="text" name='Description' className="form-control border-0" placeholder="Description" />
                                    <label>Description</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={data.img} onChange={onChange} name='img' className="form-control border-0" placeholder="Image URL" />
                                    <label>Image URL</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary w-100 py-3" type='submit' onClick={onUpdate}>Update data</button>
                <button className="btn btn-danger w-100 py-3" onClick={onHide}>Cancel</button>
            </Modal.Footer>
        </Modal>
    );
}


function AboutAdmin() {
    const [modalShow, setModalShow] = useState(false);
    const [guide, setguide] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/guies")
        // console.log(res.data)
        setguide(res.data)

    }

    const [guidedata, setguidedata] = useState({
        id: "",
        name: "",
        Designation: "",
        img: ""
    })
    // view data
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/guies/${id}`)
        console.log(res.data)
        setguidedata(res.data)
    }
    // delete data
    const removedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/guies/${id}`)
        // console.log(res.data)
        fetchdata()
    }
    // update data create
    const [updatemodel, setupdatemodel] = useState(null)

    const [updatedata, setupdatedata] = useState({
        id: '',
        name: '',
        Designation: '',
        Description: '',
        img: ''
    });
    // Name and value
    const getchange = (e) => {
        setupdatedata({
            ...updatedata,
            [e.target.name]: e.target.value
        })
        console.log(updatedata)
    }

    const updateguidesdata = async (e) => {
        e.preventDefault()

        const res = await axios.put(`http://localhost:3000/guies/${updatedata.id}`, updatedata)
        console.log(res.data)
        setupdatedata({
            id: '',
            name: '',
            Designation: '',
            Description: '',
            img: ''
        })
        fetchdata()
        setupdatemodel(null)
    }



    // model function
    const getmodel = (data) => {
        setupdatedata(data);
        setModalShow(true);
    };

    // for description hide
    const handleReadMore = (e, id) => {
        e.preventDefault();
        const descriptionElement = document.getElementById(`description-${id}`);
        if (descriptionElement.style.display === "none") {
            descriptionElement.style.display = "block";
            e.target.textContent = "Read Less";
        } else {
            descriptionElement.style.display = "none";
            e.target.textContent = "Read More";
        }
    };




    return (
        <div>
            <Asidebar />
            {/* <Amain /> */}
            {/* About Start */}
            <div className='admin-main'>
                <div className="container-fluid about py-1 " >
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-5">
                                <div className="h-100" style={{ border: '50px solid', borderColor: 'transparent #13357B transparent #13357B' }}>
                                    <img src="img/about-img.jpg" className="img-fluid w-100 h-100" alt />
                                </div>
                            </div>
                            <div className="col-lg-7" style={{ background: 'linear-gradient(rgba(255, 255, 255, .8), rgba(255, 255, 255, .8)), url(img/about-img-1.png)' }}>
                                <h5 className="section-about-title pe-3">About Us</h5>
                                <h1 className="mb-4">Welcome to <span className="text-primary">Travela</span></h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />First Class Flights</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Handpicked Hotels</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />5 Star Accommodations</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />Latest Model Vehicles</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />150 Premium City Tours</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2" />24/7 Service</p>
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Travel Guide Start */}

                <div>
                    <div className="container-fluid guide py-5">
                        <div className="container py-5">
                            <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                                <h5 className="section-title px-3">Travel Guide</h5>
                                <h1 className="mb-0">Our Guide List</h1>
                                <Button onClick={() => navigate("/addguide")}>Add Guides</Button>
                            </div>

                            <table className="table text-dark bordered text-center">
                                <thead className="text-white bg-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Profile</th>
                                        <th scope="col">Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        guide && guide.map((data, index) => {
                                            return (
                                                <tr className='text-center' key={index}>
                                                    <th scope="row">{data.id}</th>
                                                    <td>{data.name}</td>
                                                    <td>{data.Designation}</td>
                                                    <td> <img src={data.img} alt="profile" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></td>
                                                    <td>
                                                        <button className='btn btn-success mx-1 px-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)}>View</button>
                                                        <button className='btn btn-primary mx-2' data-modal-target="large-modal" data-modal-toggle="large-modal" onClick={() => getmodel(data)}>Edit</button>
                                                        <button className='btn btn-danger mx-1 px-2' onClick={() => removedata(data.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Profile of {guidedata.name}</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div className="col-12">
                                                <div className="blog-item">
                                                    <div className="blog-img">
                                                        <div className="blog-img-inner">
                                                            <img className="img-fluid w-100 rounded-top" style={{ height: "300px" }} src={guidedata.img} alt="Image" />
                                                            <h5 className="m-2 text-dark">{guidedata.name}</h5>
                                                        </div>

                                                    </div>
                                                    <div className="blog-content border border-top rounded-bottom  p-4">
                                                        <p className="mb-3 text-dark">{guidedata.Designation}</p>
                                                        <p className="mb-3" id={`description-${guidedata.id}`} style={{ display: "none" }}>{guidedata.Description}</p>
                                                        <Link className="btn btn-primary rounded-pill py-2 px-4" onClick={(e) => handleReadMore(e, guidedata.id)}>Read More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <EditGuideModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            data={updatedata}
                            onChange={getchange}
                            onUpdate={updateguidesdata}

                        />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default AboutAdmin
