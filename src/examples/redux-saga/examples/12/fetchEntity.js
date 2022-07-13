// Core
import {
    put, call, apply, delay,
} from 'redux-saga/effects';

// Instruments
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

export function* fetchEntity(action, entityType) {
    yield delay(1000);

    const response = yield call(api[ `fetch${entityType}` ], action.payload);
    const data = yield apply(response, response.json);

    yield put(swapiActions[ `fill${entityType}` ](data.results));
}
