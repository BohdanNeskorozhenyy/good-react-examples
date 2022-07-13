/* Core */
import { useState } from 'react';

export const Todo = (props) => {
    const [isFetching, setIsFetching] = useState(false);

    const deleteTodo = async () => {
        setIsFetching(true);
        await props.deleteTodo(props.todo.id);
    };

    return (
        <li>
            <section>
                <h3>{ props.todo.title }</h3>
                <p>{ props.todo.body }</p>
            </section>

            { props.deleteTodo && (
                <button disabled = { isFetching } onClick = { deleteTodo }>
                    X
                </button>
            ) }
        </li>
    );
};
