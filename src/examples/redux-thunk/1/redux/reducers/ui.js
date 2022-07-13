import { uiTypes } from '../types/ui';

const initialState = {
    isFetching: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
    case uiTypes.START_FETCHING:
        return {
            ...state,
            isFetching: true,
        };

    case uiTypes.STOP_FETCHING:
        return {
            ...state,
            isFetching: false,
        };

    default:
        return state;
    }
};
