// Core
import React from 'react';

// Hooks
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
    const {
        current,
        color,
        applyDefault,
        applyDark,
        applyColor,
    } = useTheme();

    const changeColorToRed = () => {
        applyColor('red');
    };

    return (
        <header>
            <h1>Header</h1>
            <button onClick = { applyDark }>Change theme to Dark</button>
            <button onClick = { applyDefault }>Change theme to Default</button>
            <button onClick = { changeColorToRed }>Red</button>
            <h2>Current theme is { current }</h2>
            <h3>Current theme color is { color }</h3>
        </header>
    );
};
