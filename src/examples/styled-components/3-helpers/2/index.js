import { Text } from './components/Text';

/**
 * Хелпер-функция 'css' используется для создания миксинов.
 *
 * Обратите внимание на компонент Text.
 * */
const Article = () => {
    return (
        <>
            <Text mixin>
                Этот текст отображается в элементе С применением mixin
            </Text>
            <Text>
                Этот текст отображается в элементе БЕЗ применения mixin
            </Text>
        </>
    )
};

export default Article;
