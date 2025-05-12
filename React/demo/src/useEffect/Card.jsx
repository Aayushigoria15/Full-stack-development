import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Card() {

    const [products, setproducts] = useState("")

    useEffect(() => {
        product()
    }, [])

    const product = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
        setproducts(res.data)
    }

    return (
        <div>
            <div className="container">
                <div className="row"> {
                    products && products.map((data) => {
                        return (
                            <div className="col-md-4 mb-3">
                                <div className="card" style={{ width: '18rem', }}>
                                    <img src={data.image} style={{ height: "250px", width: "15rem", margin: "7px auto" }} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-id">{data.id}</h5>
                                        <h5 className="card-title">{data.title.slice(0, 25)}</h5>
                                        <h4 className="card-title">{data.price} $</h4>
                                        <p className="card-text">{data.description.slice(0, 50)}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

                </div>
            </div>
        </div>

    )
}

export default Card
