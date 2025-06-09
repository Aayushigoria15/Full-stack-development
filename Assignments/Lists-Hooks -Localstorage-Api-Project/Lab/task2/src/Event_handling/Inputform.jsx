import React, { useState } from 'react'

function Inputform() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>React Input Form</h2>


            <input
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={handleChange}
            />


            <p>You typed: {inputValue}</p>
        </div>
    )
}

export default Inputform
