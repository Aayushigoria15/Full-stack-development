import React from 'react';

function FruitList() {
    // Array of fruit names
    const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple'];

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Fruit List</h2>

            {/* Use map() to render each fruit */}
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {fruits.map((fruit, index) => (
                    <li key={index} style={{ padding: "5px" }}>
                        🍎 {fruit}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FruitList;
