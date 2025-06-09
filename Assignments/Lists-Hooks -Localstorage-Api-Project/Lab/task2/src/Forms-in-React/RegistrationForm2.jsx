import React, { useState } from 'react';

function RegistrationForm2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // No errors — submit data
      setSubmittedData(formData);
      setFormData({ name: '', email: '', password: '' }); // Reset form
      setErrors({});
    } else {
      // Show errors
      setSubmittedData(null);
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        <br /><br />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        <br /><br />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div style={{ marginTop: '30px' }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm2;
