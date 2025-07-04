import React from 'react'

import Ahome from '../AComman/Asidebar'
import Asidebar from '../AComman/Asidebar'
import Amain from '../AComman/Amain'
import AdminFooter from '../AComman/AdminFooter'

function Dashboard() {
    return (
        <div>
            <Asidebar />
            <Amain Aname="Dahboard Page" />
            <div className='container-fluid' >
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>

                    <h1>hello this Dashboard page</h1>

                </div>
            </div>
            <AdminFooter />
        </div>

    )
}

export default Dashboard