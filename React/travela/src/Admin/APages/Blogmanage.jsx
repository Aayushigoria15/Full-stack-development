import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Ahome from '../AComman/Asidebar'
import Asidebar from '../AComman/Asidebar'

function Blogmanage() {

    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blogs")
        // console.log(res.data)
        setblogs(res.data)
    }

    return (
        <div>
            <Asidebar />

            <div classname="container " style={{ paddingLeft: "15%" }}>
                <h1 className='text-center'>hello this Blog Page</h1>
                <table className="table " >
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">posted</th>
                            <th scope="col">desc</th>
                            <th scope='col'>date</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // console.log(blogs)
                            blogs && blogs.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.posted}</td>
                                        <td>{data.desc}</td>
                                        <td>{data.date}</td>
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

export default Blogmanage