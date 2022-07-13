/**
 * Существуют блокирующие и неблокирующие эффекты.
 * Например, take — блокирующий эффект.
 * Достигнув эффекта take генератор заморозится до тех пор,
 * пока не произойдет dispatch экшена с ожидаемым паттерном.
 *
 * call тоже блокирует поток выполнения генератора в том случае, если ему
 * возвращается промис.
 */

// Core
import {
    take, put, call, apply, delay,
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
        yield delay(3000);
        const data = yield call(fetchPlanets, action);

        yield put(swapiActions.fillPlanets(data.results));
        yield put(swapiActions.setIsFetching(false));
    }
}
