// Core
import { combineReducers } from 'redux';

// Instruments
import { swapiReducer as swapi } from '../bus/swapi/reducer';

export const rootReducer = combineReducers({
    swapi,
});
