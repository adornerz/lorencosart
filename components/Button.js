import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: rgb(199,144,129);
    background: radial-gradient(circle, rgba(199,144,129,1) 36%, rgba(223,165,121,1) 100%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 5px 18px;
    font-size: 18px;
    color: #ffc6c7;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`