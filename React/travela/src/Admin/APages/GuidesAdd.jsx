import React, { useState } from 'react'
import Asidebar from '../AComman/Asidebar'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import AdminFooter from '../AComman/AdminFooter'


function GuidesAdd() {
    const redirect = useNavigate()


    const [form, setform] = useState({
        id: "",
        name: "",
        Designation: "",
        Description: "",
        img: ""
    })

    // form hadling
    const getchange = (e) => {
        setform({
            ...form,
            // new id create
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const handlesubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post("http://localhost:3000/guies", form)
        console.log(res.data)
        redirect("/adminabout");
        setform({
            id: "",
            name: "",
            Designation: "",
            Description: "",
            img: ""
        })
    }

    return (
        <div>
            <Asidebar />
            <div className=' admin-main bg-breadcrumb' style={{ height: "690px" }}>


                <div className="container " style={{ zIndex: "0" }}>
                    <h3 className="text-white mb-4 mt-5 pt-3 text-center">Add Guide Form</h3>

                    <form onSubmit={handlesubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating ">
                                    <input value={form.name} onChange={getchange} type="text" name='name' className="form-control border-0" placeholder="Your Name" />
                                    <label>Guide Name</label>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="form-floating ">
                                    <input value={form.Designation} onChange={getchange} type="text" name='Designation' className="form-control border-0" placeholder="Your Designation" />
                                    <label>Designation</label>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="form-floating">
                                    <input value={form.Description} onChange={getchange} type="text" name='Description' className="form-control border-0" placeholder="Description" />
                                    <label>Description</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" value={form.img} onChange={getchange} name='img' className="form-control border-0" placeholder="Image URL" />
                                    <label>Image URL</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Guide add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <AdminFooter />
        </div>


    )
}

export default GuidesAdd
