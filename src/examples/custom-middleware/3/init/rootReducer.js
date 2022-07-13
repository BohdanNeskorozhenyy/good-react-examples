// Core
import { combineReducers } from 'redux';

// Reducers
import { themeReducer as theme } from '../bus/theme/reducer';
import { errorReducer as error } from './errorReducer';

export const rootReducer = combineReducers({
    theme,
    error,
});
