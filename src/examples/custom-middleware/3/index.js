// Core
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

// Pages
import { Home } from './pages/home';

const Wrapper = () => {
    return (
        <Provider store = { store }>
            <Home />
        </Provider>
    );
};

export default Wrapper;
