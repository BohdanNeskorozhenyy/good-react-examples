import axios from 'axios';

export const api = Object.freeze({
    fetchPlanets: (page = 1) => {
        const data = axios.get(`https://swapi.tech/api/planets/?page=${page}`);

        return data;
    },
});
