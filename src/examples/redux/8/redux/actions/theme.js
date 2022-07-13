import { types } from '../types';

export const themeActions = {
    changeThemeToDefault: () => {
        return {
            type: types.CHANGE_THEME_TO_DEFAULT,
        };
    },
    changeThemeToDark: () => {
        return {
            type: types.CHANGE_THEME_TO_DARK,
        };
    },
};
