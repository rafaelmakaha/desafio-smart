import { COLORS } from "settings/colors";
import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background-color: ${COLORS.grey};
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    width: 80%;
`