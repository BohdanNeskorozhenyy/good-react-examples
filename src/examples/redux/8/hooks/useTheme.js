import { useSelector, useDispatch } from 'react-redux';

import {
    themeActions,
} from '../redux/actions/theme';

export const useTheme = () => {
    const selector = (state) => state.theme;
    const theme = useSelector(selector);
    const dispatch = useDispatch();

    const applyDefault = () => {
        dispatch(themeActions.changeThemeToDefault());
    };

    const applyDark = () => {
        dispatch(themeActions.changeThemeToDark());
    };

    return { current: theme.current, applyDefault, applyDark };
};
