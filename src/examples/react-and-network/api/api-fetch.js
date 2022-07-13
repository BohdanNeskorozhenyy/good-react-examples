/* Core */
import waait from 'waait';

const API_URL = process.env.REACT_APP_API_URL;

export const api = {
    async fetchTodos() {
        const response = await fetch(`${API_URL}/todos`);

        const todos = await response.json();

        await waait(1000);

        return { todos };
    },
    async fetchTodoById(id) {
        const response = await fetch(`${API_URL}/todos${id}`);

        const todoById = await response.json();

        await waait(1000);

        return { todoById };
    },
    async createTodo(newTodo) {
        const response = await fetch(`${API_URL}/todos`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json', // ! Обязательно !
            },
            body: JSON.stringify(newTodo),
        });

        const todo = await response.json();

        await waait(1000);

        return { todo };
    },
    async updateTodo(newTodo) {
        const { id, created, ...todoPayload } = newTodo;

        const response = await fetch(`${API_URL}/todos/${id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json', // ! Обязательно !
            },
            body: JSON.stringify(todoPayload),
        });
        const updatedTodo = await response.json();

        await waait(1000);

        return updatedTodo;
    },
    async deleteTodo(todoId) {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method: 'DELETE',
            headers,
        });

        await waait(1000);

        const isDeleted = response.status === 204;

        isDeleted && console.info('✅ Todo deleted.');

        return { isDeleted };
    },
};
