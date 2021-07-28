import styled from "styled-components";
import Radio from '@material-ui/core/Radio';
import { Button } from "@material-ui/core";
import { COLORS } from "settings/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid ${COLORS.grey};
    border-radius: 4px;
    padding: 8px 0px 0px 12px;
    width: 100%;
`

export const WrapperHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 95%;
`

export const Icon = styled.img`
    height: 30px;
    object-fit: contain;
`

export const IconText = styled.p``

export const Question = styled.h2`
    border-bottom: 2px solid ${COLORS.grey};
    padding: 0px 0px 8px 0px;
    width: 95%;
`

export const WrapperRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${COLORS.grey};
    width: 95%;
`

export const WrapperBottom = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 4vh;
    width: 95%;
`

export const WrapperRadioButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const RadioButton = styled(Radio)``

export const WrapperClosedGym = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Text = styled.p``

export const WrapperGymCount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const GymCount = styled.p`
    font-family: 'GothamBoldWoff2';
`

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 5vh;
    width: 95%;
    @media(max-width: 768px) {
        flex-direction: column;
    }
`

export const Btn = styled(Button)`
    && {
        background-color: ${props => props.color?? COLORS.white};
        border: 4px solid ${props => props.color?? COLORS.grey};
    }
    height: auto;
    width: 40%;
    @media(max-width: 768px) {
        width: 95%;
    }
`