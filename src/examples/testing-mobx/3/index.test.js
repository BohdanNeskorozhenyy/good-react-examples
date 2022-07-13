// Core
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Other
import { TodoList } from './components';
import { TodoStore } from './store';

Enzyme.configure({ adapter: new Adapter() });

const init = (store) => {
    const wrapper = mount(<TodoList store = { store } />);

    return wrapper;
};

describe('TodoList component', () => {
    test('Initial render with 0 todos', () => {
        const store = new TodoStore();
        const wrapper = init(store);
        const liElements = wrapper.find('li');

        expect(liElements).toHaveLength(0);
    });

    test('addTodo should add 1 todo and render 1 li element', () => {
        const store = new TodoStore();
        store.addTodo('Тестовая задача');
        const wrapper = init(store);
        const liElements = wrapper.find('li');

        expect(liElements).toHaveLength(1);
    });

    test('addTodo should add 1 todo and render 1 li element with specified text', () => {
        const todo = 'Тестовая задача';
        const store = new TodoStore();
        store.addTodo(todo);
        const wrapper = init(store);
        const liElements = wrapper.find('li');

        expect(liElements).toHaveLength(1);
        expect(liElements.text()).toBe(todo);
    });

    test('should add 2 todo and render 2 li element with specified text', () => {
        const todo = 'Тестовая задача';
        const todo1 = 'Тестовая задача 2';
        const store = new TodoStore();
        store.addTodo(todo);
        store.addTodo(todo1);
        const wrapper = init(store);
        const liElements = wrapper.find('li');

        expect(liElements).toHaveLength(2);
        expect(liElements.at(0).text()).toBe(todo);
        expect(liElements.at(1).text()).toBe(todo1);
    });

    test('should add 1 todo by button click', () => {
        const store = new TodoStore();
        const wrapper = init(store);
        const button = wrapper.find('div > button');

        button.simulate('click');

        /**
         * Важна последовательность.
         * Сперва клик, затем поиск элемента
         * */
        const liElements = wrapper.find('li');

        expect(liElements).toHaveLength(1);
    });
});
