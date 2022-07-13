// Core
import { combineReducers } from 'redux';

// Reducers
import { themeReducer as theme } from '../bus/theme/reducer';

export const rootReducer = combineReducers({
    theme,
});
