// Core
import { useDispatch } from 'react-redux';

import {
    fetchPlanetsAsync,
} from '../redux/actions/planets';

export const useFetchPlanets = () => {
    const dispatch = useDispatch();
    const load = () => dispatch(fetchPlanetsAsync());

    return { load };
};

