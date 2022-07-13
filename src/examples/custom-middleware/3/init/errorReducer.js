const initialState = {
    message: '',
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'MIDDLEWARE_ERROR':
        return {
            ...state,
            message: action.payload,
        };

    default:
        return state;
    }
};
