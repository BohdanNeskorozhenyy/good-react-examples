// Core
import React from 'react';

// Hooks
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
    const {
        current,
        color,
        applyDefault,
        applyDark,
        applyColor,
    } = useTheme();

    const changeColorToGreen = () => {
        applyColor('green');
    };

    return (
        <footer>
            <h1>Footer</h1>
            <button onClick = { applyDark }>Change theme to Dark</button>
            <button onClick = { applyDefault }>Change theme to Default</button>
            <button onClick = { changeColorToGreen }>Green</button>
            <h2>Current theme is { current }</h2>
            <h3>Current theme color is { color }</h3>
        </footer>
    );
};
