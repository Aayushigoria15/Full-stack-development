import React, { useEffect, useState } from 'react';

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setForm({ name: '', email: '' });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE"
    });
    fetchUsers();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>JSON Server CRUD</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <button type="submit">Add User</button>
      </form>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} - {u.email}
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCrud;
