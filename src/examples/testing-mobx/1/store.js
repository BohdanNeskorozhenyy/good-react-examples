/* Core */
import { makeAutoObservable } from 'mobx';

class TimerStore {
    secondsPassed = 0;

    constructor() {
        makeAutoObservable(this);
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
