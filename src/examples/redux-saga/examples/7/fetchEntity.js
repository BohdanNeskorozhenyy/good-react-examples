// Core
import {
    put, call, apply, cancelled, delay,
} from 'redux-saga/effects';

// Instruments
import { swapiActions } from '../../bus/swapi/actions';
import { api } from '../../Api';

export function* fetchEntity(action, entityType) {
    try {
        yield delay(1000);

        const response = yield call(api[ `fetch${entityType}` ], action.payload);
        const data = yield apply(response, response.json);

        yield put(swapiActions[ `fill${entityType}` ](data.results));
    } catch (error) {
        console.log('→ error', error);
    } finally {
        if (yield cancelled()) {
            console.log('→ cancelled!', action.type);
        }
    }
}
