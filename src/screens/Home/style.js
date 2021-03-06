import { COLORS } from '../../settings/colors';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    margin: 0% 5%;
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
    width: 8vw;
    @media(max-width: 768px) {
        width: 12vw;
    }
`

export const Text = styled.p``

export const WrapperCards = styled.div`
    display: grid;
    justify-items: center;
    gap: 8px;
    grid-template-columns: repeat(3, 1fr);
    @media(max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`