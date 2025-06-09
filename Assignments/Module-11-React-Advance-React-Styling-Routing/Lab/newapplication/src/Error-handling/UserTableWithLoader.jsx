
import React, { useEffect, useState } from 'react';

function UserTableWithLoader() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(null);     // error state

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <h3>🔄 Loading data...</h3>;
    if (error) return <h3>❌ Error: {error}</h3>;

    return (
        <div>
            <h2>Users Table</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTableWithLoader;
