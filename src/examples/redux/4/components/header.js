// Core
import React from 'react';

// Hooks
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
    const { current } = useTheme();

    return (
        <header>
            <h1>Header</h1>
            <h2>Current theme is { current }</h2>
        </header>
    );
};
