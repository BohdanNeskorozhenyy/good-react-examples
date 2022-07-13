// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    todos = [
        {
            id:         Date.now(),
            todo:       'Закрепить работу с MobX',
            isSelected: false,
        },
    ];

    constructor() {
        makeAutoObservable(this);
    }

    setSelected(id) {
        this.todos = this.todos.map((item) => ({
            ...item,
            isSelected: item.id === id,
        }));
    }

    get selectedTodos() {
        const selected = this.todos.filter((item) => item.isSelected);

        if (!selected.length) {
            return null;
        }

        return selected;
    }

    addTodo(todo) {
        this.todos.push({
            id:         Date.now(),
            todo,
            isSelected: false,
        });
    }
}

export const todoStore = new Todo();
