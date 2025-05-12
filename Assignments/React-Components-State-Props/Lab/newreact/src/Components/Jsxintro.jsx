import React from 'react'

function Jsxintro() {
    const topic = "JSX (JavaScript XML)";
    const benefit = "makes writing UI components more intuitive and readable";

    return (
        <div>
            <h1>Welcome to JSX</h1>
            <p>
                {topic} is a syntax extension for JavaScript that allows you to write HTML-like code in React.
                It {benefit}, and you can embed JavaScript expressions using curly braces like this!
            </p>
        </div>
    );
}

export default Jsxintro
