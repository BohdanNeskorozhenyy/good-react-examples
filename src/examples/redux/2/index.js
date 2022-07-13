// Core
import React from 'react';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

// Components
import { Header } from './components/header';

const App = () => {
    return (
        <Provider store = { store }>
            <Header />
        </Provider>
    );
};

export default App;
