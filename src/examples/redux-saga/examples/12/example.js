/**
 * redux-saga также предоставляет возможность имплементировать очередь выполнения эффектов.
 */

// Core
import { take, call, actionChannel } from 'redux-saga/effects';

// Instruments
import { types } from '../../bus/swapi/types';

// Workers
import { fetchEntity } from './fetchEntity';

export function* runExample() {
    const buffer = yield actionChannel(types.FETCH_ALL);

    // console.log(buffer);

    while (true) {
        const action = yield take(buffer);

        yield call(fetchEntity, action, 'Planets');
        yield call(fetchEntity, action, 'Vehicles');
        yield call(fetchEntity, action, 'People');
    }
}
