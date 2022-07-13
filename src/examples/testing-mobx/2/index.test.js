// Core
import { render, fireEvent } from '@testing-library/react';

// Other
import { TodoList } from './components';
import { TodoStore } from './store';

const init = (store) => {
    const { container } = render(<TodoList store = { store } />);

    return {
        container,
    };
};

describe('TodoList component', () => {
    test('Initial render with 0 todos', () => {
        const store = new TodoStore();
        const { container } = init(store);

        const liElements = container.querySelectorAll('li');

        expect(liElements).toHaveLength(0);
    });

    test('addTodo should add 1 todo and render 1 li element', () => {
        const store = new TodoStore();
        store.addTodo('Тестовая задача');
        const { container } = init(store);
        const liElements = container.querySelectorAll('li');

        expect(liElements).toHaveLength(1);
    });

    test('addTodo should add 1 todo and render 1 li element with specified text', () => {
        const todo = 'Тестовая задача';
        const store = new TodoStore();
        store.addTodo(todo);
        const { container } = init(store);
        const liElements = container.querySelectorAll('li');

        expect(liElements).toHaveLength(1);
        expect(liElements[ 0 ].textContent).toBe(todo);
    });

    test('should add 2 todo and render 2 li element with specified text', () => {
        const todo = 'Тестовая задача';
        const todo1 = 'Тестовая задача 2';
        const store = new TodoStore();
        store.addTodo(todo);
        store.addTodo(todo1);
        const { container } = init(store);
        const liElements = container.querySelectorAll('li');

        expect(liElements).toHaveLength(2);
        expect(liElements[ 0 ].textContent).toBe(todo);
        expect(liElements[ 1 ].textContent).toBe(todo1);
    });

    test('should add 1 todo by button click', () => {
        const store = new TodoStore();
        const { container } = init(store);
        const button = container.querySelector('div > button');

        fireEvent.click(button);

        /**
         * Важна последовательность.
         * Сперва клик, затем поиск элемента
         * */
        const liElements = container.querySelectorAll('li');

        expect(liElements).toHaveLength(1);
    });
});
