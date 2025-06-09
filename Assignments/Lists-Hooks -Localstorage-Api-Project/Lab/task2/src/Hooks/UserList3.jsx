import React, { useState, useEffect } from 'react';

function UserList3() {
    const [users, setUsers] = useState([]);       // To store user data
    const [loading, setLoading] = useState(true); // To show loading state
    const [error, setError] = useState(null);     // To catch any error

    useEffect(() => {
        // Fetching data when component mounts
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // Empty dependency array ensures this runs once on mount

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList3;
