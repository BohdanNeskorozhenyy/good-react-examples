// Core
import waait from 'waait';

// Other
import { uiActions } from './ui';
import { planetTypes } from '../types/planets';
import { api } from '../../api';

const fillPlanets = (planets) => {
    return {
        type:    planetTypes.FILL_PLANETS,
        payload: planets,
    };
};

export const fetchPlanetsAsync = (page) => async (dispatch) => {
    try {
        dispatch(uiActions.startFetching());

        const { data } = await api.fetchPlanets(page);

        // Симуляция долгого запроса для демонстрации спиннера
        await waait(2000);

        dispatch(fillPlanets(data.results));
    } catch (error) {
        console.error(error.message);
    } finally {
        dispatch(uiActions.stopFetching());
    }
};

