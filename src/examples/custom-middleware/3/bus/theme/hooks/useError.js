import { useSelector } from 'react-redux';

export const useError = () => {
    const selector = (state) => state.error;
    const { message } = useSelector(selector);

    return {
        error: message,
    };
};
