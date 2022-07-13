import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
        transform: scale(.9);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(.9);
    }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 3em;
  text-align: center;
  color: var(--text-bright);
  margin: 10px;

  animation: ${pulse} 1.5s ease-in infinite;
`;
