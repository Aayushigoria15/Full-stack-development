import React from 'react'
import Headers from '../Coman/Headers'
import Footer from '../Coman/Footer'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <Headers />
            <h1 className='p-5 bg-info' to="/about1 ">hello This About page</h1>
            <Link to="/about2">About 1</Link>
            <Link>About 2</Link>
            <Footer />
        </div>
    )
}

export default About