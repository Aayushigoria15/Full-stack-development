import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Taskuser() {

    const [userdata, setuserdata] = useState("")

    useEffect(() => {
        user()
    }, [])

    const user = async () => {
        const res = await axios.get("https://dummyjson.com/users")
        console.log(res.data.users)
        setuserdata(res.data.users)

    }
    return (
        <div>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>
                            <th scope="col">Eyecolor</th>
                            <th scope="col">gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata && userdata.map((data) => {
                                console.log(data.users)
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.firstName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.eyeColor}</td>
                                        <td>{data.gender}</td>
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

export default Taskuser
