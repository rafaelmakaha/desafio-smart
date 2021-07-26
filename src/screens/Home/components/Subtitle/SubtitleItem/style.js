import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h2`
    text-align: center;
    font-size: 20px;
`

export const WrapperInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`

export const Image = styled.img`
    object-fit: contain;
    height: 50px;
    width: 50px;
    max-width: 100%;
`

export const Text = styled.p`
    text-align: center;
    font-size: 16px;
`