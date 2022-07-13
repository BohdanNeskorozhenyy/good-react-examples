import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <h1>Current theme is { theme.current }</h1>
    );
};
