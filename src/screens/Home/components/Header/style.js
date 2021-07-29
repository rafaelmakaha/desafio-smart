import styled from "styled-components";
import { COLORS } from '../../../../settings/colors'
import { ReactComponent as Logo } from '../../../../_material/images/logo.svg'


export const Container = styled.div`
    background-color: ${COLORS.black};
    justify-content: center;
    display: flex;
`

export const SmartLogo = styled(Logo)`
    height: 40px;
    margin: 20px;
    width: 110px;
    @media (max-width: 768px) {
        height: 60px;
        width: 140px;
    }
`

export const HeaderBottom = styled.div`
    background-color: ${COLORS.white};
    height: 50px;
`