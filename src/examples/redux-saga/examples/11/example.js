/**
 * Имплементация эффекта takeLatest могла-бы выглядеть примерно так.
 */

// Core
import {
    take, put, call, apply, fork, cancel,
} from 'redux-saga/effects';

// Instruments
import { types } from '../../bus/swapi/types';
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

function* fetchPlanets(action) {
    const response = yield call(api.fetchPlanets, action.payload);
    const data = yield apply(response, response.json);

    yield put(swapiActions.fillPlanets(data.results));
}

export function* runExample() {
    let task = null;

    while (true) {
        const action = yield take(types.FETCH_PLANETS_ASYNC);

        if (task) {
            yield cancel(task);
            task = null;
        }

        task = yield fork(fetchPlanets, action);
    }
}
