/**
 * Эффект takeEvery — это утилита-надстройка над эффектом take.
 * takeEvery не блокирует поток и похож на комбинацию take + fork.
 * В каком-то смысле похож на redux-thunk.
 */

// Core
import {
    takeEvery, put, call, apply,
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
    yield takeEvery(types.FETCH_PLANETS_ASYNC, fetchPlanets);
}
