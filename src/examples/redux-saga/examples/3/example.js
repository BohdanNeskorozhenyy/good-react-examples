/**
 * Сага-генератор умеет делегировать поток выполнения другому генератору,
 * используя встроенный в JavaScript механизм делегирования — yield *.
 */

// Core
import {
    take, put, call, apply,
} from 'redux-saga/effects';

// Instruments
import { types } from '../../bus/swapi/types';
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

function* fetchPlanets(action) {
    const response = yield call(api.fetchPlanets, action.payload);
    const data = yield apply(response, response.json);

    return data;
}

export function* runExample() {
    while (true) {
        const action = yield take(types.FETCH_PLANETS_ASYNC);

        yield put(swapiActions.setIsFetching(true));
        const data = yield* fetchPlanets(action); // делегирование саги

        yield put(swapiActions.fillPlanets(data.results));
        yield put(swapiActions.setIsFetching(false));
    }
}
