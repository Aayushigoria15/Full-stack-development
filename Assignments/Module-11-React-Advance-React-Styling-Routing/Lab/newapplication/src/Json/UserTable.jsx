import React, { useEffect, useState } from 'react';

function UserTable() {
    const [users, setUsers] = useState([]);

    // Fetch data from public API
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users:", err));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>User List</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">Loading users...</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
