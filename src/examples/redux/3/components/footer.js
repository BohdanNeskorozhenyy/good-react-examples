import React from 'react';
import { useSelector } from 'react-redux';

export const Footer = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <footer>
            <h1>Footer</h1>
            <h2>Current theme is { theme.current }</h2>
        </footer>
    );
};
