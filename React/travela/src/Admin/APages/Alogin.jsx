import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Alogin() {

    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Aid")) {
            redirect("/adminhome")
        }
    }, [])

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

            const { email, password } = form


            if (!email.trim() || !password.trim()) {
                console.log("Pls Required field...!")
                toast.error("Pls Required field...!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
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
            redirect("/adminhome")
            console.log("Login succeefully..!")
            toast.success("Login successfully...!")


        } catch (error) {
            console.log("API data not Found..!")
            toast.error("Api data not found..!")
        }
    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <form action="" onSubmit={getsubmit}>
                            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold text-light mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput name='email' onChange={getchange} value={form.email} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput name='password' onChange={getchange} value={form.password} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                                        Login
                                    </MDBBtn>

                                    <div className='d-flex flex-row mt-3 mb-5'>
                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='facebook-f' size="lg" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='twitter' size="lg" />
                                        </MDBBtn>

                                        <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                                            <MDBIcon fab icon='google' size="lg" />
                                        </MDBBtn>
                                    </div>

                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Alogin