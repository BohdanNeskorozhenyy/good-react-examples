import { createGlobalStyle } from 'styled-components';

import { Text } from './components/Text';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.dark ? '#000' : '#fff')};
  }
`;

/**
 * Хелпер-функция 'createGlobalStyle' позволяет создать глобальные стили.
 * */
const Article = () => {
    return (
        <>
            <GlobalStyle dark />
            <Text>
                Глобальные стили создаются при помощи функции — createGlobalStyle
            </Text>
        </>
    )
};

export default Article;
