import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    }, [])

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const redirect = useNavigate()

    const getChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const getSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = form;

        if (email.trim() === '' || password.trim() === '') {
            toast.warn('All fields are required');
            return;
        }

        try {
            const res = await axios.get(`http://localhost:3000/user?email=${email}`);
            const data = res.data;

            if (data.length === 0) {
                toast.error('Email does not exist!');
                return;
            }

            const user = data[0];
            if (user.password !== password) {
                toast.error('Incorrect password!');
                return;
            }

            localStorage.setItem('Uid', user.id);
            localStorage.setItem('Uname', user.name);
            toast.success('Login successful!');

            setTimeout(() => {
                redirect("/")
            }, 1000);
        } catch (error) {
            toast.error('Something went wrong. Please try again later.');
            console.error('API error:', error);
        }
    };

    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid"
                                alt="Phone image"
                            />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={getSubmit}>
                                <div className="form-outline mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={getChange}
                                        className="form-control form-control-lg fs-6"
                                        placeholder="EMAIL ADDRESS"
                                    />
                                </div>

                                <div className="form-outline mb-2">
                                    <input
                                        type="password"
                                        name="password"
                                        value={form.password}
                                        onChange={getChange}
                                        className="form-control form-control-lg fs-6"
                                        placeholder="PASSWORD"
                                    />
                                </div>

                                <div className="d-flex justify-content-between mb-4">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="rememberMe"
                                            defaultChecked
                                        />
                                        <label className="form-check-label" htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg fs-6 btn-block rounded-1 col-12"
                                    style={{ backgroundColor: '#4568b4ff' }}
                                >
                                    SIGN IN
                                </button>

                                <div className="divider d-flex align-items-center my-4 text-dark">
                                    <hr className="flex-grow-1" />OR<hr className="flex-grow-1" />
                                </div>

                                <a
                                    className="btn btn-primary btn-lg btn-block rounded-1 fs-6 col-12 mb-2"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-facebook-f me-2" />
                                    CONTINUE WITH FACEBOOK
                                </a>

                                <a
                                    className="btn btn-primary btn-lg btn-block rounded-1 fs-6 col-12"
                                    style={{ backgroundColor: '#55acee' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-twitter me-2" />
                                    CONTINUE WITH TWITTER
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
