import styled from 'styled-components';

/**
 * Используя метод attrs можно добавить дополнительные пропсы или аттрибуты,
 * так же можно определить дефолтные значения для некоторых свойств, а так же
 * вынести часто повторяющиеся пропсы и тем самым избавиться от дублирования в каждом компоненте.
 *
 * Обратите внимание!
 * Необходимо следить за валидностью CSS-свойств и значений.
 * */
export const Input = styled.input.attrs((props) => ({
    margin: props.margin || '10px 0'
}))`
  color: #fff;
  margin: ${(props) => props.margin};
  color: ${(props) => props.error ? 'var(--error)' : 'inherit'};
`;
