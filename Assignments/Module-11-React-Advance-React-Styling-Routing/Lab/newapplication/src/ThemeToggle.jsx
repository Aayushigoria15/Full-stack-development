
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} style={{ margin: "10px" }}>
            Switch to {isDark ? 'Light' : 'Dark'} Mode
        </button>
    );
}

export default ThemeToggle;
