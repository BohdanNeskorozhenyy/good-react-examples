// Core
import { combineReducers } from 'redux';

// Reducers
import { planetsReducer as planets } from '../redux/reducers/planets';
import { uiReducer as ui } from '../redux/reducers/ui';

export const rootReducer = combineReducers({
    planets,
    ui,
});
