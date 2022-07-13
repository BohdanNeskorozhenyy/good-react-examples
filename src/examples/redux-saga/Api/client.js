// Instruments
import { ROOT_URL as ROOT_URI } from './config';

export const api = new class Api {
    fetchVehicles(page = 1) {
        return fetch(`${ROOT_URI}/vehicles/?page=${page}`);
    }

    fetchPeople(page = 1) {
        return fetch(`${ROOT_URI}/people/?page=${page}`);
    }

    fetchPlanets(page = 1) {
        return fetch(`${ROOT_URI}/planets/?page=${page}`);
    }
}();
