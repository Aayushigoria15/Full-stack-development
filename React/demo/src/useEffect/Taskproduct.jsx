import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Taskproduct() {

    const [products, setproducts] = useState("")

    useEffect(() => {
        product()
    }, [])


    const product = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res.data.products)
        setproducts(res.data.products)

    }

    return (
        <div>
            <div className="container">
                <div className="row">{
                    products && products.map((data) => {
                        console.log(data.products)
                        {
                            return (
                                <div className="col-md-4 mb-3">
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={data.images} className="card-img-top" style={{ width: "16rem", height: "250px" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <h4 className='card-text'>{data.price}</h4>
                                            <p className="card-text" > {data.description.slice(0, 50)} </p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Taskproduct
