import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Asidebar from '../AComman/Asidebar'
import AdminFooter from '../AComman/AdminFooter'

function Guidsmanage() {

    const [guide, setguide] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/guies")
        console.log(res.data)
        setguide(res.data)
    }

    // delete data
    const removedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/guies/${id}`)
        console.log(res.data)
        fetchdata()
    }

    const [guidedata, setguidedata] = useState({
        id: "",
        name: "",
        Designation: "",
        img: ""
    })

    // view data one
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/guies/${id}`)
        console.log(res.data)
        setguidedata(res.data)
    }




    return (


        <div>
            <Asidebar />
            <div className=" admin-main container">
                <h1 className='text-center'>hello this Guid Page</h1>
                <table className="table bordered">
                    <thead>
                        <tr className='text-center '>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Images</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            guide && guide.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.Designation}</td>
                                        <td>
                                            <img src={data.img} style={{ height: "50px", width: "50px", borderRadius: "50%" }} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
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
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="col-12">
                                    <div className="guide-item">
                                        <div className="guide-img">
                                            <div className="guide-img-efects">
                                                <img src={guidedata.img} style={{ height: "250px" }} className="img-fluid w-100 rounded-top" alt="Image" />
                                            </div>

                                        </div>
                                        <div className="guide-title text-center rounded-bottom p-4">
                                            <div className="guide-title-inner">
                                                <h4 className="mt-3">{guidedata.name}</h4>
                                                <p className="mb-0">{guidedata.Designation}</p>
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
            </div>
            <AdminFooter />
        </div>
    )

}

export default Guidsmanage