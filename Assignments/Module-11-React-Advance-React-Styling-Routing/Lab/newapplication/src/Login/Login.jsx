// src/Login.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

function Login() {
    const [input, setInput] = useState('');
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            login(input.trim());
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter username"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    );
}

export default Login;
