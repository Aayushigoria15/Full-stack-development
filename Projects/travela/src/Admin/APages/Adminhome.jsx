import React from 'react'
import Amain from '../AComman/Amain'
import Asidebar from '../AComman/Asidebar'
import AdminFooter from '../AComman/AdminFooter'

function Adminhome() {
    return (
        <div>
            <Asidebar />
            <Amain Aname="Home" />
            <AdminFooter />
        </div>
    )
}

export default Adminhome
