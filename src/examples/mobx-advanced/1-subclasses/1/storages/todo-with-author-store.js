// Core
import { makeObservable, observable, action } from 'mobx';

// Stores
import { Todo } from './todo-store';

/**
 * makeAutoObservable ← нельзя применять для классов
 * которые не имею суперклассов.
 * В противном случае мы получим ошибку.
 *
 * Рекомендуется отдать предпочтение композиции нежели наследованию.
 * */
class TodoWithAuthor extends Todo {
    title = 'Текст задачи';
    author = '';
    deadline = Date.now() + 86400000; // поле которое не аннотировано в суперклассе может быть использовано в сабклассе

    // Вычисляемые поля могут быть определены
    get formattedDate() {
        return new Date(this.deadline).toLocaleDateString();
    }

    constructor() {
        super();
        makeObservable(this, {
            // title: observable, // Ошибка, это свойство уже определено в суперклассе
            deadline:  observable,
            author:    observable,
            setAuthor: action,
        });
    }

    setAuthor(author) {
        this.author = author;
    }
}

export const todoWithAuthorStore = new TodoWithAuthor();
