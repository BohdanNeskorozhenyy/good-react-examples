// Core
import { useState } from 'react';

// Instruments
import Styles from './styles.module.scss';

export const Entity = (props) => {
    const [page, setPage] = useState(1);

    const entitiesJSX = props.entities.map((entity) => (
        <li key = { entity.name }>
            <span>
                <span>Имя:</span> { entity.name }
            </span>
        </li>
    ));

    const getNextPage = () => {
        const nextPage = page >= 4 ? 1 : page + 1;

        props.onClick(nextPage);
        setPage(nextPage);
    };

    return (
        <section>
            <h2>{ props.title }</h2>
            <div>
                <button
                    disabled = { props.disabled }
                    onClick = { () => props.onClick(page) }>
                    Получить { page } страницу
                </button>
                <button
                    disabled = { props.disabled }
                    onClick = { getNextPage }>
                    Получить следующую
                </button>
            </div>
            <h3>Выбрать страницу</h3>
            <div className = { Styles.pages }>
                <button onClick = { () => setPage(1) }>1</button>
                <button onClick = { () => setPage(2) }>2</button>
                <button onClick = { () => setPage(3) }>3</button>
                <button onClick = { () => setPage(4) }>4</button>
            </div>
            <ul>{ entitiesJSX }</ul>
        </section>
    );
};
