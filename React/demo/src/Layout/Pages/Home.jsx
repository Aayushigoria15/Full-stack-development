import React from 'react'
import Headers from '../Coman/Headers'
import Footer from '../Coman/Footer'

function Home() {
    return (
        <div>
            <Headers />
            <h1 className='p-5 bg-success'>Hello this Home page</h1>
            <Footer />
        </div>
    )
}

export default Home