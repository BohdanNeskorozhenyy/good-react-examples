import styled from 'styled-components';

// Вариант создания заголовка h1 при помощи хелпер функции styled.h1.
export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #fff;
`;

// Вариант создания заголовка h1 при помощи функции styled и передачи имени тега в качестве аргумента.
// export const Title = styled('h1')`
//   font-size: 3em;
//   text-align: center;
//   color: #fff;
// `;
