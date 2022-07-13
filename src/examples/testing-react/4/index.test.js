// Core
import { render, unmountComponentAtNode } from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Components
import { Counter } from './index';

Enzyme.configure({ adapter: new Adapter() });

const init = (source) => {
    const wrapper = shallow(<Counter source = { source } />);
    const increment = wrapper.find('#increment');
    const decrement = wrapper.find('#decrement');

    return { wrapper, increment, decrement };
};

describe('Counter component', () => {
    test('Counter should render without crashing', () => {
        const div = document.createElement('div');
        render(<Counter source = { 0 } />, div);
        unmountComponentAtNode(div);
    });

    test('Initial value should be received from property source', () => {
        const source = 0;
        const { wrapper } = init(source);
        const counter = wrapper.find('p');
        const receivedValue = Number(counter.text());
        expect(receivedValue).toBe(source);
    });
    test('Increment function should increase value by 1', () => {
        const source = 0;
        const { wrapper, increment } = init(source);
        const counter = wrapper.find('p');
        const prevValue = Number(counter.text());
        increment.props().onClick(); // это нужно запомнить
        const updatedCounter = wrapper.find('p');
        const receivedValue = Number(updatedCounter.text());
        const incrementedValue = prevValue + 1;
        expect(receivedValue).toBe(incrementedValue);
    });
    test('Decrement function should decrease value by 1', () => {
        const source = 0;
        const { wrapper, decrement } = init(source);
        const counter = wrapper.find('p');
        const prevValue = Number(counter.text());
        decrement.props().onClick();
        const updatedCounter = wrapper.find('p');
        const receivedValue = Number(updatedCounter.text());
        const decrementedValue = prevValue - 1;
        expect(receivedValue).toBe(decrementedValue);
    });
});
