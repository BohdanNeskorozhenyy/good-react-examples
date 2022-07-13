import { ThemeProvider } from 'styled-components';

import { Text } from './components/Text';
import { useChangeTheme } from './hooks/useChangeTheme';

/**
 * Библиотека styled-components из коробки поддерживает темизацию.
 *
 * Для этого нужно:
 * 1. Обернуть корневой компонент или компонент который требуется темизировать.
 * 2. Передать в пропс 'theme' оъект с набором свойств и значений.
 * 3. Использовать войства из переданного объекта при создании стилизированных компонентов.
 * */
const Article = () => {
    const { theme, themeNum, setThemeNum } = useChangeTheme();

    return (
        <>
            <button onClick={() => setThemeNum(0)}>
                Дефолтная тема
            </button>
            <button onClick={() => setThemeNum(1)}>
                Изменить на тему 1
            </button>
            <button onClick={() => setThemeNum(2)}>
                Изменить на тему 2
            </button>
            <Text>
                К этому тексту не применяется темизация, так как он находится за пределами компонента ThemeProvider.
            </Text>

            <ThemeProvider theme = { theme }>
                <Text>
                    Библиотека styled-components из коробки поддерживает темизацию.
                </Text>
                <Text>
                    Выбрана тема номер — {themeNum}
                </Text>
            </ThemeProvider>
        </>
    )
};

export default Article;
