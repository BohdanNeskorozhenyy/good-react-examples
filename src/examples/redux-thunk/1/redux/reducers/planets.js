import { planetTypes } from '../types/planets';

const initialState = {
    data: [],
};

export const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
    case planetTypes.FILL_PLANETS:
        return {
            ...state,
            data: action.payload,
        };

    default:
        return state;
    }
};
