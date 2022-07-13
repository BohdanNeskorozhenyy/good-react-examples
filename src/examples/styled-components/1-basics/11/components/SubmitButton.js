import styled from 'styled-components';

export const SubmitButton = styled.button({
    color:' #fff',
    margin: '10px auto',
    backgroundColor: 'var(--variable)'
});

/**
 * Альтерантивный вариант передачи внутрь функции
 * в аргументы которой попадёт объёт с пропсами переданными из компонента.
 * */
// export const SubmitButton = styled.button((props) => ({
//     color:' #fff',
//     margin: '10px auto',
//     backgroundColor: 'var(--variable)'
// }));
