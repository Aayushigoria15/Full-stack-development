import React, { useState } from 'react';

function RegistrationForm() {
    // Step 1: Set up state for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    // Step 2: Set up state to show submitted data
    const [submittedData, setSubmittedData] = useState(null);

    // Step 3: Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Step 4: Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload
        setSubmittedData(formData); // store submitted data
        setFormData({ name: '', email: '', password: '' }); // reset form
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                /><br /><br />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br /><br />

                <button type="submit">Submit</button>
            </form>

            {/* Step 5: Display submitted data */}
            {submittedData && (
                <div style={{ marginTop: "30px" }}>
                    <h3>Submitted Data:</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Password:</strong> {submittedData.password}</p>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;
