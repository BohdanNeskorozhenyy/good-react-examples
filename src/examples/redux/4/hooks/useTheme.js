import { useSelector } from 'react-redux';

export const useTheme = () => {
    const selector = (state) => state.theme;
    const theme = useSelector(selector);

    return { current: theme.current };
};
