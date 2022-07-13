// Core
import { makeAutoObservable } from 'mobx';
import { computedFn } from 'mobx-utils';

export class Todo {
    todos = [
        {
            id:   Date.now(),
            todo: 'Закрепить работу с MobX',
        },
    ];

    id = null;

    constructor() {
        makeAutoObservable(this);
    }

    setSelectedId(id) {
        this.id = id;
    }

    isSelected = computedFn((id) => {
        return this.id === id;
    });

    addTodo(todo) {
        this.todos.push({
            id: Date.now(),
            todo,
        });
    }
}

export const todoStore = new Todo();
