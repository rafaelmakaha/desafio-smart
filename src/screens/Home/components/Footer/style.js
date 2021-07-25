import styled from 'styled-components';
import { COLORS } from 'settings/colors'
import { ReactComponent as Logo } from '_material/images/logo.svg'

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`

export const FooterContent = styled.div`
    align-items: center;
    background-color: ${COLORS.darkGrey};
    display: flex;
    flex-direction: column;
    height: 170px;
    width: 100%;
`

export const SmartLogo = styled(Logo)`
    height: 20%;
    margin-top: 30px;
    width: 20%;
`

export const Text = styled.p`
    color: ${COLORS.white};
`

export const FooterTop = styled.div`
    background-color: ${COLORS.white};
    height: 50px;
`