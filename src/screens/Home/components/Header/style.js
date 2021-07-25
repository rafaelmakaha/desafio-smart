import styled from "styled-components";
import { COLORS } from "settings";
import { ReactComponent as Logo } from '_material/images/logo.svg'


export const Container = styled.div`
    background-color: ${COLORS.black};
    justify-content: center;
    display: flex;
`

export const SmartLogo = styled(Logo)`
    height: 25%;
    margin: 20px;
    width: 15%;
`