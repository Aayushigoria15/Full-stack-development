import React, { useState } from 'react'

function Onclick() {

    const [data, setdata] = useState({
        name: "XYZ"
    })
    return (
        <div>
            <h1>Hello name :- {data.name}</h1>
            {/* spred ... op object */}
            <button onClick={() => setdata({ ...data, name: "ABC" })}>Chnage name</button>
        </div>
    )
}

export default Onclick
