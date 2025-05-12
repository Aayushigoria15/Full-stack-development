import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

function Form2() {
    const [data, setdata] = useState({
        fname: "",
        mname: "",
        lname: "",
        number: "",
        email: "",
        text: ""
    });
    const getchange = (e) => {
        setdata({
            ...data, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="text" name='fname' onChange={getchange} value={data.fname} className="form-control" id="exampleFormControlInput1" placeholder="enter your first name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Middle Name</label>
                                <input type="text" value={data.mname} className="form-control" id="exampleFormControlInput1" placeholder="enter your middle name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="text" value={data.lname} className="form-control" id="exampleFormControlInput1" placeholder="enter your last name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" value={data.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="text" value={data.number} className="form-control" id="exampleFormControlInput1" placeholder="enter your phone number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control" value={data.text} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>
                            <div className="mb-3">
                                <input type="submit" />
                            </div >
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Form2
