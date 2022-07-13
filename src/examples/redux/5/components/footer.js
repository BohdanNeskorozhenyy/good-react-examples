// Core
import React from 'react';

// Hooks
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
    const { current, applyDefault, applyDark } = useTheme();

    return (
        <footer>
            <h1>Footer</h1>
            <button onClick = { applyDark }>Change theme to Dark</button>
            <button onClick = { applyDefault }>Change theme to Default</button>
            <h2>Current theme is { current }</h2>
        </footer>
    );
};
