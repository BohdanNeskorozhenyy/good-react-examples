import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Todos = () => {
    const [todos, setTodos] = useState(Todos.data || []);

    useEffect(() => {
        (async () => {
            const data = await Todos.fetchData();

            setTodos(data);
        })();
    }, []);

    return (
        <section className='container'>
            <h2>Страница задач</h2>
            <ul>
                {todos.map((todo, index)=> <li key={index}>{todo.title}</li>)}
            </ul>
        </section>
    );
};

Todos.fetchData = async () => {
    const response = await axios.get(`https://lab.lectrum.io/examples/api/v1/todos`);

    return response.data;
};

Todos.data = null;
