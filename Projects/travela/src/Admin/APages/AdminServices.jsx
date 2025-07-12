import React, { useEffect, useState } from 'react'
import Asidebar from '../AComman/Asidebar'
import AdminFooter from '../AComman/AdminFooter'
import Amain from '../AComman/Amain'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function EditserviceModal({ show, onHide, data, onChange, onUpdate }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Service: {data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='container'>
                    <h3 className="mb-2">Update Service Data</h3>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={data.name} onChange={onChange} type="text" name='name' className="form-control border-0" placeholder="Your Name" />
                                    <label> Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={data.Description} onChange={onChange} type="text" name='Description' className="form-control border-0" placeholder="Your Description" />
                                    <label>Description</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input value={data.location} onChange={onChange} type="text" name='location' className="form-control border-0" placeholder="location" />
                                    <label>Your Location</label>
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
function AdminServices() {
    const [service, setservice] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/Services")
        console.log(res.data)
        setservice(res.data)
    }

    const [servicedata, setservicedata] = useState({
        id: "",
        Description: "",
        name: "",
        location: "",
        img: ""
    })

    // view data one
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/Services/${id}`)
        console.log(res.data)
        setservicedata(res.data)
    }
    // delete data
    const removedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/Services/${id}`)
        // console.log(res.data)
        fetchdata()
    }

    // update data create
    const [updatemodel, setupdatemodel] = useState(null)
    // get and chnage
    const [updatedata, setupdatedata] = useState({
        id: "",
        Description: "",
        name: "",
        location: "",
        img: ""
    })

    // model function
    const getmodel = (data) => {
        setModalShow(true);
        setupdatedata({ ...data }); // ensure id is preserved
    };
    // name&value
    const getchange = (e) => {
        const { name, value } = e.target;
        setupdatedata(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const updateservicedata = async (e) => {
        e.preventDefault()

        const res = await axios.put(`http://localhost:3000/Services/${updatedata.id}`, updatedata)
        console.log(res.data)
        setupdatedata({
            id: "",
            Description: "",
            name: "",
            location: "",
            img: ""
        })
        fetchdata()
        setupdatemodel(null)
    }


    return (
        <div>
            <Asidebar />
            <Amain />
            <div className='admin-main'>hello this our client reviews</div>
            <div className=" admin-main container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                    <h1 className='text-center'>hello this Service Page</h1>
                    <Button className='mx-auto btn' onClick={() => navigate("/addservice")}>Add Service</Button>
                </div>
                <table className="table bordered">
                    <thead>
                        <tr className='text-center '>
                            <th scope="col">#id</th>
                            <th scope="col">Description</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service && service.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.Description}</td>
                                        <td>{data.name}</td>
                                        <td>{data.location}</td>
                                        <td>
                                            <img src={data.img} style={{ height: "50px", width: "50px", borderRadius: "50%" }} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => { getmodel(data); setModalShow(true); }}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => removedata(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Profile of {servicedata.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-12">
                                    <div className="guide-item">
                                        <div className="guide-img">
                                            <div className="guide-img-efects px-5">
                                                <img src={servicedata.img} style={{ height: "350px" }} className="img-fluid w-100 rounded-top" alt="Image" />
                                            </div>

                                        </div>
                                        <div className="guide-title text-center rounded-bottom p-4">
                                            <div className="guide-title-inner">
                                                <h4 className="mt-3">{servicedata.name}</h4>
                                                <p className="mb-0">{servicedata.Designation}</p>
                                                <p className="mb-0">{servicedata.location}</p>
                                            </div>
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

                <EditserviceModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    data={updatedata}
                    onChange={getchange}
                    onUpdate={updateservicedata}

                />
            </div>
            <AdminFooter />
        </div>
    )
}

export default AdminServices
