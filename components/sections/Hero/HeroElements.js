import styled from 'styled-components'
import { MdKeyboardArrowRight } from 'react-icons/md'

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: ${props => props.hover ? '10px' : '6px'};
    font-size: 20px;
    transition: all 0.2s ease-in-out;
`