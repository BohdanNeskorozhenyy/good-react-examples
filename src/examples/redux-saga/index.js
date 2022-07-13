/**
 * Переключение примеров происходит в папке
 * init/rootSaga.js
 *
 * import { runExample } from '../examples/1';
 * */

// Core
import { Provider } from 'react-redux';

// Instruments
import './theme/init.css';
import { store } from './init';

// App
import { Swapi } from './components/Swapi';

const Wrapper = () => {
    return (
        <Provider store = { store }>
            <Swapi />
        </Provider>
    );
};

export default Wrapper;
