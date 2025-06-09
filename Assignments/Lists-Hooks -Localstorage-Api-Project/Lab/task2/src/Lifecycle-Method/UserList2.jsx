import React, { Component } from 'react';

class UserList2 extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        // Fetch data from placeholder API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                this.setState({ users: data, loading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    }

    render() {
        const { users, loading, error } = this.state;

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
}

export default UserList2;
