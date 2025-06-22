
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Content() {
    const { themeStyles } = useContext(ThemeContext);
    return (
        <div style={themeStyles}>
            <h1>Theme Context Demo</h1>
            <p>This content adapts to light/dark mode.</p>
        </div>
    );
}

export default Content;
