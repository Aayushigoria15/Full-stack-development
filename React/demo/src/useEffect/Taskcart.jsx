import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Taskcart() {

    const [cart, setcart] = useState("")

    useEffect(() => {
        carts()
    }, [])

    const carts = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        console.log(res.data.carts)
        setcart(res.data.carts)

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {cart && cart.map((data) => {
                        return data.products.map((product) => (
                            <div className="col-md-4 mb-3">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={product.thumbnail} className="card-img-top" style={{ width: "16rem", height: "250px" }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <h4 className='card-text'>{product.price}</h4>
                                        <h4 className='card-text'>{product.discountPercentage}</h4>
                                        <p className="card-text" > {product.description} </p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    })}
                </div>
            </div>
        </div>
    )
}
export default Taskcart
