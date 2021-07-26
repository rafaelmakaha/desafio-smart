import { COLORS } from 'settings/colors';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0% 10%;
`

export const WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Title = styled.h1`
    text-transform: uppercase;
`

export const Divider = styled.div`
    border-top: 6px solid ${COLORS.black};
    width: 40%;
`