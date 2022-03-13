import styled from 'styled-components'

export const SectionContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 10px 0;
    margin-top: ${props => props.mrTop ? props.mrTop : null};

`