/* Components */
import { LoadingIndicator } from './LoadingIndicator';

export const TodoView = (props) => {
    return (
        <div>
            <h3>Задача { props.todo?.title }</h3>
            <hr />

            <p>
                <LoadingIndicator
                    error = { props.error }
                    status = { props.status }
                    data = { props.todo?.body ?? null } />
            </p>
        </div>
    );
};
