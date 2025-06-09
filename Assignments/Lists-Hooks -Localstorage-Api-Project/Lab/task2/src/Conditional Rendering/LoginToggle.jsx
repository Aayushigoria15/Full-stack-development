import React, { useState } from 'react'

function LoginToggle() {
    const [isLoggedIn, setIsLoggedIn] = useState('false');

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>{isLoggedIn ? "Welcome, User!" : "Please Log In"}</h2>


            {isLoggedIn ? (
                <button onClick={toggleLogin}>Logout</button>
            ) : (
                <button onClick={toggleLogin}>Login</button>
            )}
        </div>
    )
}

export default LoginToggle
