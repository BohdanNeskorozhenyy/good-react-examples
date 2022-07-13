import { types } from '../types';

const initialState = {
    current: 'default',
    color:   'black',
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.CHANGE_THEME_TO_DEFAULT:
        return {
            ...state,
            current: 'default',
        };
    case types.CHANGE_THEME_TO_DARK:
        return {
            ...state,
            current: 'dark',
        };
    case types.FILL_THEME_COLOR:
        return {
            ...state,
            color: action.payload,
        };

    default:
        return state;
    }
};
