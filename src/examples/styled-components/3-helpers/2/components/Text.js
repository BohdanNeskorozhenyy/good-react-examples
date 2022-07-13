import styled, {css} from 'styled-components';

const complexMixin = css`
  color: ${props => (props.whiteColor ? '#fff' : '#000')};
`

export const Text = styled.p`
  ${props => props.mixin? complexMixin : '#F00' };
`;
