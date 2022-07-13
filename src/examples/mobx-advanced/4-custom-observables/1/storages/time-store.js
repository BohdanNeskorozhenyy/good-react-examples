import { createAtom } from 'mobx';

class ClockStore {
    atom;
    intervalHandler = null;
    currentDateTime;

    constructor() {
        /**
         * Создаём атом который взаимодействует с главным (внутренним) механизмом MobX
         *
         * Параметр 1*: Название атома (используется для дебага)
         * Параметр 2: Колбек который запускается когда атом переходит из ненаблюдаемого состояния в наблюдаемое
         * Параметр 3: Колбек который запускается когда атом переходит из наблюдаемого состояния в ненаблюдаемое
         * */
        this.atom = createAtom(
            'Clock',
            () => this.startTicking(),
            () => this.stopTicking(),
        );
    }

    getTime() {
        /**
         * reportObserved ← метод атома используемый для определения
         * является ли он наблюдаемым.
         *
         * Если необходимо этот метод тригерит обработчик события onBecomeObserved
         * */
        if (this.atom.reportObserved()) {
            const time = this.currentDateTime;

            return `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`;
        }

        /**
             * Если метод вызвался но от этого метода никто не зависит,
             * в таком случае onBecomeObserved не будет вызываться.
             *
             * Такие ситуации так же нужно обрабатывать. То как обрабатывать, ложиться на плечи разработчика,
             * можно выбросить ошибку, вернуть какое-то дефолтное значение или вовсе null.
             * */
        return null;
    }

    tick() {
        this.currentDateTime = new Date();
        // Уведомляем MobX что ресурс изменился
        this.atom.reportChanged();
    }

    startTicking() {
        console.log('вызван метод startTicking');

        // Первоначальный тик
        this.tick();

        // Запускаем часы и сохраняем идентификатор инетрвала
        this.intervalHandler = setInterval(() => this.tick(), 1000);
    }

    stopTicking() {
        console.log('вызван метод stopTicking');

        // Останавливаем часы
        clearInterval(this.intervalHandler);

        // Очищаем сохранённый идентификатор интервала
        this.intervalHandler = null;
    }
}

export const clockStore = new ClockStore();
