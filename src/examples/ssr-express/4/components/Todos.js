import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const Todos = () => {
    const [todos, setTodos] = useState([]);

    /**
     * renderToString — не вызывает вызывает useEffect
     * */
    useEffect(() => {
        (async () => {
            const response = await axios.get(`${API_URL}/todos`);

            setTodos(response.data);
        })();
    }, []);

    return (
        <section className='container'>
            <h2>Страница задач</h2>
            <ul>
                {todos.map((todo, index)=> <li key={index}>{todo}</li>)}
            </ul>
        </section>
    );
};
