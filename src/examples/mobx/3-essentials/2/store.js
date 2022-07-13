// Core
import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    todos = [];
    progress = '';

    get completedTodosCount() {
        return this.todos.filter((todo) => todo.completed === true).length;
    }

    update() {
        this.emit('update');
    }

    report() {
        if (this.todos.length === 0) {
            this.progres = 'Нет тудушек';

            return this.progress;
        }

        this.progress = `Прогресс всего/выполнено: ${this.completedTodosCount}/${this.todos.length}`;

        return this.progress;
    }

    addTodo(task) {
        this.todos.push({
            task,
            completed: false,
        });

        this.update();
    }

    completeTodo(todoIdx) {
        this.todos[ todoIdx ].completed = true;

        this.update();
    }
}

// Initialize store
const todoStore = new TodoStore();

export { todoStore };
