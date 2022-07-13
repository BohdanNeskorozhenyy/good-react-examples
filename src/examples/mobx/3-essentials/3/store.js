/* Core */
import { makeAutoObservable } from 'mobx';

class TimerStore {
    secondsPassed = 0;

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
            deep:     true,
            name:     'TimerStore',
            proxy:    true,
        });
    }

    increment() {
        this.secondsPassed++;
    }

    reset() {
        this.secondsPassed = 0;
    }
}

const timerStore = new TimerStore();

export { timerStore };
