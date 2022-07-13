import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <header>
            <h1>Header</h1>
            <h2>Current theme is { theme.current }</h2>
        </header>
    );
};
