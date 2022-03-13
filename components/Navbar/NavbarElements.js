import Link from "next/link";
import {Link as LinkS} from 'react-scroll';
import styled from "styled-components";

export const Nav = styled.nav`
    height: 80px;
    width: 98%;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    left: 1%;
    margin-top: 10px;
    z-index: 10;

    @media screen and (max-width:860px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.h1`
    color: #3A6344;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 28px;
    display: flex;
    align-items: center;
    margin-left: 34px;
    text-decoration: none;
    font-weight: 300;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #291E0B;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLink = styled(LinkS)`
    height: 80px;
    color: #291E0B;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 200;
    &.active {
        color: #3A6344;
        font-weight: 600;
    }
`