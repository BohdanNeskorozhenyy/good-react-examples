import axios from 'axios';

export const api = Object.freeze({
    getUsers: async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users');

        return data;
    },
});
