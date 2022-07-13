import React from 'react';

import '../styles/mains.scss';

export const App = () => {
    return (
        <section className='wrapper'>
            <h1 className='header'>Начинаем погружение в SSR</h1>
            <a href="/about">О Компании</a>
        </section>
    );
};
