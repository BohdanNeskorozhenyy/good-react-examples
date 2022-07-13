// Core
import React from 'react';

// Hooks
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
    const { current, applyDefault, applyDark } = useTheme();

    return (
        <header>
            <h1>Header</h1>
            <button onClick = { applyDark }>Change theme to Dark</button>
            <button onClick = { applyDefault }>Change theme to Default</button>
            <h2>Current theme is { current }</h2>
        </header>
    );
};
