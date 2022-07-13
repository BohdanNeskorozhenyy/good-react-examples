// Other
import { uiTypes } from '../types/ui';

const startFetching = () => {
    return {
        type: uiTypes.START_FETCHING,
    };
};

const stopFetching = () => {
    return {
        type: uiTypes.STOP_FETCHING,
    };
};

export const uiActions = Object.freeze({
    startFetching,
    stopFetching,
});
