import styled from 'styled-components'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiFiverr, SiDiscord } from 'react-icons/si'

export const ContactWrapper = styled.div`
    background: rgba(255, 139, 167, 0.86);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(19.6px);
    -webkit-backdrop-filter: blur(19.6px);
    border: 1px solid rgba(255, 139, 167, 0.3);
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
`

export const InstagramIcon = styled(AiOutlineInstagram)`
    height: 32px;
    width: 32px;
    padding: 5px;
    margin-left: 10px;
    color: #33272a;
`
export const FiverrIcon = styled(SiFiverr)`
    height: 32px;
    width: 32px;
    padding: 5px;
    margin-left: 10px;
    color: #33272a;
`
export const DiscordIcon = styled(SiDiscord)`
    height: 32px;
    width: 32px;
    padding: 5px;
    margin-left: 10px;
    color: #33272a;
`