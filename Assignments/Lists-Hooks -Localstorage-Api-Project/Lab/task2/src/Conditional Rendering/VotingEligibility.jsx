import React, { useState } from 'react';

function VotingEligibility() {
    // State to store user's age
    const [age, setAge] = useState('');

    // Handler to update age
    const handleChange = (e) => {
        setAge(e.target.value);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Voting Eligibility Checker</h2>

            {/* Input field to enter age */}
            <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={handleChange}
            />

            {/* Display eligibility message */}
            <p>
                {age === ''
                    ? "Please enter your age."
                    : age >= 18
                        ? "✅ You are eligible to vote."
                        : "❌ You are not eligible to vote."}
            </p>
        </div>
    );
}

export default VotingEligibility;
