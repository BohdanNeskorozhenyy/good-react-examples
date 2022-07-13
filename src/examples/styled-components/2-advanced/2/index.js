import { ThemeProvider } from 'styled-components';
import { darken } from 'polished';

import { Text } from './components/Text';
import { useChangeTheme } from './hooks/useChangeTheme';

/**
 * Провайдеры 'ThemeProvider' можно вкладывать 1 в другой.
 * В таком случае в пропс 'theme' можно передать функцию
 * в аргументы которой будет передан объект из вышестоящего 'ThemeProvider'.
 * Функция обязательно должна вернуть объект который станет новой темой
 * для дочерних компонентов провайдера.
 *
 * Пропс 'theme' так же можно
 *
 * Отличная библиотека с богатым набором функций которую можно использовать в JS
 * и получить все преимущества CSS препроцессоров
 * Polished — https://polished.js.org/docs
 * */
const Article = () => {
    const { theme, themeNum, setThemeNum } = useChangeTheme();

    const adoptTheme = (theme) => {
        console.log(theme);

        return {
            color: `${darken(0.2, theme.color)}`
        };
    };

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
                <ThemeProvider theme = {adoptTheme}>
                    <Text>
                        Выбрана тема номер — {themeNum}
                    </Text>
                    <Text theme={{ color: '#FFF' }}>
                        Переопределённая тема на уровне компонента
                    </Text>
                </ThemeProvider>
            </ThemeProvider>
        </>
    )
};

export default Article;
