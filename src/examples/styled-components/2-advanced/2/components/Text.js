import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.color};
`;

Text.defaultProps = {
    theme: {
        color: "#fff"
    }
};
