import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

function Profileuser() {
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        img: ""
    });

    const [modalShow, setModalShow] = useState(false);
    const [updatedData, setUpdatedData] = useState({});

    // Fetch user data
    useEffect(() => {
        axios.get("http://localhost:3000/user/1") // Replace with correct ID or logic
            .then((res) => {
                setUser(res.data);
                setUpdatedData(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch user:", err);
            });
    }, []);

    // Handle input change in modal
    const handleChange = (e) => {
        setUpdatedData({
            ...updatedData,
            [e.target.name]: e.target.value
        });
    };

    // Handle update submit
    const handleUpdate = async () => {
        try {
            const res = await axios.put(`http://localhost:3000/user/${updatedData.id}`, updatedData);
            console.log("Updated:", res.data);
            setUser(res.data);
            setModalShow(false);
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <>
            <div className="profile-container">
                <div className="profile-card">
                    <img className="profile-pic" src={user.img || "https://i.pravatar.cc/150"} alt="Profile" />
                    <h2>{user.name || "Loading..."}</h2>
                    <p>{user.email || "Loading..."}</p>
                    <button className="edit-btn" onClick={() => setModalShow(true)}>Edit Profile</button>
                </div>
            </div>

            {/* Bootstrap Modal */}
            <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group mb-3">
                        <label>Name</label>
                        <input name="name" value={updatedData.name} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label>Email</label>
                        <input name="email" value={updatedData.email} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label>Image URL</label>
                        <input name="img" value={updatedData.img} onChange={handleChange} className="form-control" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>

            {/* CSS Styles */}
            <style>{`
        .profile-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #b2baf4ff;
        }

        .profile-card {
          background-color: white;
          color: black;
          width: 300px;
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          transition: transform 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .profile-card:hover {
          transform: scale(1.02);
        }

        .profile-pic {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .edit-btn {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          margin-top: 1rem;
          cursor: pointer;
          border-radius: 5px;
          font-size: 1rem;
        }

        .edit-btn:hover {
          background-color: #45a049;
        }
      `}</style>
        </>
    );
}

export default Profileuser;
