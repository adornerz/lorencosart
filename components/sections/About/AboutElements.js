import styled from 'styled-components'

export const AboutElem = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 860px) {
        flex-direction: column;
    }
`

export const AboutText = styled.p`
    text-align: center;
`

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 00%;
    padding: 10px;
`