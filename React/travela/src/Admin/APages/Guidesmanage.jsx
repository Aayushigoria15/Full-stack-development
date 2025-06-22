import React, { useEffect, useState } from 'react'

import axios from 'axios'

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

    return (
        <div>

            <div className="container">
                <h1 className='text-center'>hello this Guid Page</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
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
                                            <img src={data.img} style={{ height: "50px", width: "50px" }} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Guidsmanage