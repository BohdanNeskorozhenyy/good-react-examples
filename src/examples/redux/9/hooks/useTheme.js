import { useSelector, useDispatch } from 'react-redux';

import {
    themeActions,
} from '../redux/actions/theme';

export const useTheme = () => {
    const selector = (state) => state.theme;
    const { current, color } = useSelector(selector);
    const dispatch = useDispatch();

    const applyDefault = () => {
        dispatch(themeActions.changeThemeToDefault());
    };

    const applyDark = () => {
        dispatch(themeActions.changeThemeToDark());
    };

    const applyColor = (_color) => {
        dispatch(themeActions.fillThemeColor(_color));
    };

    return {
        current,
        color,
        applyDefault,
        applyDark,
        applyColor,
    };
};
