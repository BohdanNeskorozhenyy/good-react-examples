/* Core */
import waait from 'waait';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const api = Object.freeze({
    async fetchTodos() {
        const response = await axios.get(`${API_URL}/todos`);

        await waait(1000);

        return response.data;
    },
    async fetchTodoById(id) {
        const response = await axios.get(`${API_URL}/todos/${id}`);

        await waait(1000);

        return response.data;
    },
    async createTodo(newTodo) {
        const response = await axios.post(`${API_URL}/todos`, newTodo);

        await waait(1000);

        return response.data;
    },
    async updateTodo(newTodo) {
        const { id, created, ...todoPayload } = newTodo;

        // if (Math.random() < 0.5) {
        //     // ? Force-fail the request with 50% chance
        //     throw new Error('woops');
        // }

        const response = await axios.put(`${API_URL}/todos/${id}`, todoPayload);

        await waait(1000);

        return response.data;
    },
    async deleteTodo(todoId) {
        const response = await axios.delete(`${API_URL}/todos/${todoId}`);

        await waait(1000);

        const isDeleted = response.status === 204;

        return { isDeleted };
    },
});
