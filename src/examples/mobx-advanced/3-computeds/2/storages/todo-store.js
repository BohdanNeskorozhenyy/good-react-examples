// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    todos = [
        {
            id:   Date.now(),
            todo: 'Закрепить работу с MobX',
        },
    ];

    selectedId = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedId(id) {
        this.selectedId = id;
    }

    addTodo(todo) {
        this.todos.push({
            id: Date.now(),
            todo,
        });
    }
}

export const todoStore = new Todo();
