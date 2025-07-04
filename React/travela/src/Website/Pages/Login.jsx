import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import axios from 'axios';

function Login() {
    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }
    const getsubmit = async (e) => {
        e.preventDefault()
        try {
            // destructuring 
            const { email, password } = form

            if (email == "" || password == "") {
                console.log("Required Field..!!")
                return false
            }
            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)
            // email id match...
            if (res.data.length === 0) {
                console.log("Email does not match...!")
                toast.error("Email does not match...!")
                return false
            }

            // password match
            let admin = res.data[0]
            console.log(admin)


            if (admin.password !== password) {
                console.log("Password Does not Match..!")
                toast.error("Password Does not Match..!")
                return false
            }


            localStorage.setItem("Aid", admin.id)
            localStorage.setItem("Aname", admin.name)
            redirect("/dash")
            console.log("Login succeefully..!")
            toast.success("Login successfully...!")


        } catch (error) {
            console.log("API not NotFound..!!")

        }


    }
    return (
        <div>
            <MDBContainer className="my-5">

                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?_gl=1*14mmncj*_ga*MTAzMTY1MzgzMC4xNzM0MDgzNzI2*_ga_8JE65Q40S6*czE3NTEzNjgyODIkbzE1JGcxJHQxNzUxMzY4ODUxJGozMiRsMCRoMA..' alt="login form" className='rounded-start w-100 ' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column my-5'>
                                <form action="" onSubmit={getsubmit}>
                                    <div className='d-flex flex-row mt-2 '>

                                        <h1 className="m-0 text-primary"><i className="fa fa-map-marker-alt me-3 text-primary" />Travela</h1>
                                    </div>

                                    <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                    <MDBInput wrapperClass='mb-4' onChange={getchange} name='email' value={form.email} label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput wrapperClass='mb-4' onChange={getchange} name='password' value={form.password} label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                    <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

                                    <div className='d-flex flex-row justify-content-start'>
                                        <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                        <a href="#!" className="small text-muted">Privacy policy</a>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default Login
