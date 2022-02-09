import { Tag, Menu } from 'styled-icons/material';
import styled from "styled-components";

export const Container = styled.div`

    grid-area: CI;
    background-color: #36393F;        
    overflow: hidden;
    text-overflow: ellipsis;  
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(0px);
    font-weight: bolder;
`

export const ChannelName = styled.div`

    color: var(--white);
    font-size: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
    padding: 0px 0px 0px 0px;
    
`
export const TagIcon = styled(Tag)`
    width: 28px;
    height: 28px;
    color: var(--gray);
`

export const MenuWrapper = styled.div`
    @media screen and (min-width: 600px){
        display: none;
    }
    width: 40px;
    
    padding: 1px;
    margin: 0px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuIcon = styled(Menu)`
    width: 30px;
    height: 30px;
    color: var(--gray);
`