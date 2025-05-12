import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Userdata() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/users")
        console.log(res.data)
        setdata(res.data)
    }

    return (
        <div>
            <div className="container">
                {/* <h1>Hello this user data</h1> */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((user) => {
                                console.log(user)
                                return (
                                    <tr>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.name.firstname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address.city}</td>
                                        <td></td>
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

export default Userdata