import React from 'react';

function UserList() {
    // Array of user objects with unique IDs
    const users = [
        { id: 1, name: 'Ram' },
        { id: 2, name: 'Sita' },
        { id: 3, name: 'Ravi' },
        { id: 4, name: 'Neha' },
    ];

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>User List</h2>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                {users.map(user => (
                    <li key={user.id} style={{ padding: "5px" }}>
                        👤 {user.name} (ID: {user.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
