import styled from 'styled-components';

import {device} from '../constants';

export const Text = styled.p`
    @media only screen and ${device.xs}{
        color: #F00;
    }
    @media only screen and ${device.sm}{
        color: #0F0;
    }
    @media only screen and ${device.lg}{
        color: #FFF;
    }
`;
