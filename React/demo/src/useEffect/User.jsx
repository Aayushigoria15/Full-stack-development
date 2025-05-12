import React, { useEffect, useState } from 'react'

function User() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                // object
                return res.json()
            })
            .then((data) => {
                // console.log(data)
                setuser(data)
            })
    }

    return (
        <div>
            <div className="container">
                <h1>hello user data call</h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">city</th>
                            <th scope="col">Compnay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user && user.map((data) => {
                                console.log(data)
                                return (
                                    <tr>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.address.city}</td>
                                        <td>{data.company.name}</td>
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

export default User