import { COLORS } from 'settings';
import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 25%;
`

export const Title = styled.h1`
    text-transform: uppercase;
`

export const Divider = styled.hr`
    border: 8px solid ${COLORS.black};
    margin: 0px;
    width: 15%;
`