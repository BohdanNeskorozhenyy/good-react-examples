import { types } from '../types';

export const changeThemeToDefault = () => {
    return {
        type: types.CHANGE_THEME_TO_DEFAULT,
    };
};

export const changeThemeToDark = () => {
    return {
        type: types.CHANGE_THEME_TO_DARK,
    };
};
