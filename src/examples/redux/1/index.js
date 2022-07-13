// Core
import React from 'react';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

const App = () => {
    return (
        <Provider store = { store }>
            <h1>Redux App</h1>
        </Provider>
    );
};

export default App;
