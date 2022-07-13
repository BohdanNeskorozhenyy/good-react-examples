// Core
import {
    flow, makeAutoObservable, onBecomeObserved, onBecomeUnobserved,
} from 'mobx';

export class Todo {
    todos = [];
    nextFetch = null;
    timerId = 0;

    constructor() {
        makeAutoObservable(this, {
            getTodos:         flow,
            becomeObserved:   false,
            becomeUnobserved: false,
            nextFetch:        false,
        });

        onBecomeObserved(this, 'todos', this.becomeObserved);
        onBecomeUnobserved(this, 'todos', this.becomeUnobserved);
    }

    * getTodos() {
        console.log('Fetch data');
        const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
        const data = yield response.json();

        this.todos = data;
    }

    becomeObserved = () => {
        console.log('becomeObserved');

        this.timerId = setInterval(() => {
            console.log('nextFetch', this.nextFetch < Date.now());
            if (!this.nextFetch || this.nextFetch < Date.now()) {
                this.getTodos();

                this.nextFetch = Date.now() + 10 * 1000;
            }
        }, 2000);
    }

    becomeUnobserved = () => {
        console.log('becomeUnobserved');

        clearInterval(this.timerId);
    }
}

export const todoStore = new Todo();
