// Core
import {
    action, computed, makeObservable, observable,
} from 'mobx';

export class Todo {
    title = 'Текст задачи';
    deadline = Date.now() + 86400000;
    setDeadline = () => {}; // это экшн, но в то же время свойство класса, которое не может быть переопределено в сабклассе

    get formattedDate() {
        return new Date(this.deadline).toISOString();
    }

    constructor() {
        makeObservable(this, {
            title:         observable,
            setTitle:      action,
            formattedDate: computed,
        });
    }

    setTitle(value) {
        this.title = value;
    }
}

export const todoStore = new Todo();
