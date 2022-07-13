// Core
import { makeAutoObservable } from 'mobx';

export class Todo {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                this.setTodos(data);
            });
    }

    setTodos(todos) {
        this.todos = todos;
    }
}

export const todoStore = new Todo();
