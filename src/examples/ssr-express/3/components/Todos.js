import React from 'react';

const todosMock = ['Перевестеи приложение на SSR', 'Выбрать подходящий инструмент'];

export const Todos = () => {
    return (
        <section className='container'>
            <h2>Страница задач</h2>
            <ul>
                {todosMock.map((todo, index)=> <li key={index}>{todo}</li>)}
            </ul>
        </section>
    );
};
