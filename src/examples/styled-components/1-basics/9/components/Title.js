import styled from 'styled-components';

export const Title = styled.h1`
  position: relative;
  font-size: 3em;
  text-align: center;
  color: var(--text-bright);
  margin: 10px;

  &::after {
      position: absolute;
      bottom: 5px;
      left: 0;
      content: '';
      height: 40px;
      width: 0;
      border-bottom: solid 2px #fff;
      transition: width 250ms ease-in-out;
      opacity: 0;
  }

  &:hover::after {
      width: 100%;
      opacity: 1;
      transition: width 250ms ease-in-out;
  }
`;
