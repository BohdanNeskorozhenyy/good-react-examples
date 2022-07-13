/**
 * Существует ещё одна неблокирующая альтернатива fork (attached fork) — spawn (detached fork).
 *
 * Сага-генератор, возбуждённая с помощью spawn — «отсоединена» от породившей
 * её родительской саги.
 *
 * Она живёт в своём отдельном контексте, поэтому родительская сага
 * может быть легко убрана сборщиком мусора во время выполнения саги
 * порожденной с помощью spawn.
 *
 * Однако это так-же приводит к тому, что не обработанное исключение,
 * возбуждённое в такой саге — не сможет «всплыть» к родительской саге, и быть
 * там обработанным.
 */

// Core
import { take, spawn, delay } from 'redux-saga/effects';

// Instruments
import { types } from '../../bus/swapi/types';

function* errorSaga() {
    yield delay(3000);

    throw new Error(`
        В отличии от fork, spawn не сохраняет ссылку на вызвавшую родительскую сагу-генератор.
        Вместо этого spawn создаёт новый поток-ветвление от rootSaga.
        В случае с fork данная ошибка была-бы отловлена родительской сагой-генератором rootSaga.
    `);
}

export function* runExample() {
    while (true) {
        const action = yield take(types.FETCH_PLANETS_ASYNC);

        yield spawn(errorSaga, action);
    }
}
