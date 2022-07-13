/**
 * Например — процесс можно отменить с помощью эффекта cancel.
 */

// Core
import {
    take,
    put,
    call,
    apply,
    fork,
    cancel,
    cancelled,
    delay,
} from 'redux-saga/effects';

// Instruments
import { types } from '../../bus/swapi/types';
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

function* fetchPlanets(action) {
    try {
        yield delay(2000);

        const response = yield call(api.fetchPlanets, action.payload);
        const data = yield apply(response, response.json);

        yield put(swapiActions.fillPlanets(data.results));
    } catch (error) {
        console.log('→ error', error);
    } finally {
        if (yield cancelled()) {
            console.log('→ cancelled!', action.type);
        }
    }
}

export function* runExample() {
    const tasks = [];

    while (true) {
        const action = yield take([
            types.FETCH_PLANETS_ASYNC,
            types.CANCEL_FETCH,
        ]);

        if (tasks.length && action.type === types.CANCEL_FETCH) {
            for (const task of tasks) {
                yield cancel(task);
            }
            tasks.length = 0;

            continue;
        }

        const task = yield fork(fetchPlanets, action);

        tasks.push(task);

        console.log('→ tasks', tasks);
    }
}
