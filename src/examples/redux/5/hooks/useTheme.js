import { useSelector, useDispatch } from 'react-redux';

import {
    changeThemeToDefault,
    changeThemeToDark,
} from '../redux/actions/theme';

export const useTheme = () => {
    const selector = (state) => state.theme;
    const theme = useSelector(selector);
    const dispatch = useDispatch();

    const applyDefault = () => {
        dispatch(changeThemeToDefault());
    };

    const applyDark = () => {
        dispatch(changeThemeToDark());
    };

    return { current: theme.current, applyDefault, applyDark };
};
