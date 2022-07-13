// Core
import React from 'react';

// Hooks
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
    const { current } = useTheme();

    return (
        <footer>
            <h1>Footer</h1>
            <h2>Current theme is { current }</h2>
        </footer>
    );
};
