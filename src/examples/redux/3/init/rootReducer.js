// Core
import { combineReducers } from 'redux';

// Reducers
import { themeReducer as theme } from '../redux/reducers/theme';

export const rootReducer = combineReducers({
    theme,
});
