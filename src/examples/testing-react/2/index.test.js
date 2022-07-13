// Core
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Comonents
import { Header } from './index';

Enzyme.configure({ adapter: new Adapter() });

it('Header loads with text Hello World!', () => {
    const wrapper = shallow(<Header />);
    const text = wrapper.find('h1').text();
    expect(text).toEqual('Hello World!');
});

