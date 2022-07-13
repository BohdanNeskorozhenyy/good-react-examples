/**
 * Поток выполнения можно организовывать параллельно неблокирующим эффектом.
 * Например, в отличии от call, fork — неблокирующий эффект.
 *
 * fork возвращает процесс, task.
 *
 * task — это объект с описанием задачи, которая выполняется параллельно.
 * Его можно использовать для различных действий над параллельным процессом.
 */

// Core
import {
    take, put, call, apply, fork,
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
    while (true) {
        const action = yield take(types.FETCH_PLANETS_ASYNC);

        const task = yield fork(fetchPlanets, action);

        console.log('→ task', task);
    }
}
