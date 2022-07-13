// Core
import React from 'react';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

// Pages
import { Home } from './pages/home';

const App = () => {
    return (
        <Provider store = { store }>
            <Home />
        </Provider>
    );
};

export default App;
