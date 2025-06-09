
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => setIsDark(prev => !prev);

    const themeStyles = {
        backgroundColor: isDark ? '#222' : '#fff',
        color: isDark ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '2rem',
        transition: 'all 0.3s ease',
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, themeStyles }}>
            {children}
        </ThemeContext.Provider>
    );
}
