const initialState = {
    current: 'default',
};

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'CHANGE_THEME_TO_DEFAULT':
        return {
            current: 'default',
        };
    case 'CHANGE_THEME_TO_DARK':
        return {
            current: 'dark',
        };

    default:
        return state;
    }
};
