import { useState } from "react";

export const useChangeTheme = () => {
    const [themeNum, setThemeNum] = useState(0);

    const changeTheme = (themeNum) => {
        switch (themeNum) {
            case 0: {
                return {
                    color: '#fff'
                };
            }
            case 1: {
                return {
                    color: '#d941e2'
                }
            }
            case 2: {
                return {
                    color: '#ff0'
                }
            }
            default: {
                throw new Error(`неизвестный номер темы — ${themeNum}`);
            }
        }
    };

    const theme = changeTheme(themeNum);

    return {
        setThemeNum,
        theme,
        themeNum,
    }
}
