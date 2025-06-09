// src/Welcome.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Welcome() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default Welcome;
