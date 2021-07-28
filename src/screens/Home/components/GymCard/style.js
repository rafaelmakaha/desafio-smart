import { COLORS } from "settings";
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${COLORS.grey};
    border-radius: 4px;
    margin: 16px;
    height: auto;
    padding: 16px;
    width: auto;
    @media(max-width: 768px){
        width: 80%;
    }
`

export const Status = styled.p`
    font-family: 'GothamBoldWoff2';
    color: ${props => props.color};
    margin: 0px;
    font-weight: bold;
`

export const GymName = styled.h1``

export const Description = styled.p`
    margin: 2px;
`

export const Divider = styled.div`
    border-top: 2px solid ${COLORS.lightGrey};
    margin: 8px;
    width: 90%;
`

export const WrapperIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 16px;
`

export const Icon = styled.img`
    object-fit: contain;
    height: 50px;
    width: 50px;
    max-width: 100%;
`

export const WrapperSchedule = styled.div`
    display: grid;
    justify-items: start;
    row-gap: 4px;
    grid-template-columns: repeat(2, 1fr);

`

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 16px 0px 0px;
`

export const InfoTitle = styled.h2`
    margin: 0px;
`