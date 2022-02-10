import { AlternateEmail } from 'styled-icons/material';
import styled from "styled-components";
import ReactScrollableFeed from 'react-scrollable-feed'

export const Container = styled.div`

    grid-area: CH;

    background-color: #36393F;

    display: flex;
    flex-direction: column;
    justify-content:space-between;


`

export const Messages = styled(ReactScrollableFeed)`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 46px - 68px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`
export const InputWrapper = styled.div`
    width: 100%;
    
    @media screen and (min-width: 601px){
        padding: 0px 16px;
    }
    @media screen and (max-width: 600px){
        padding: 5px 8px;    
        align-self:flex-end;

    }
`
export const Input = styled.input`
    width: 100%;
    height: 44px;
    padding: 0 10px 0 57px;
    border-radius: 7px;
    color: var(--white);
    background: var(--chat-input);
    position: relative;
    &::placeholder{
        color: var(--gray);
    }
    ~ svg {
        position: relative;
        top: -50%;
        left: 14px;
        transition: 180ms ease-in-out;
    }
  
`
export const InputIcon = styled(AlternateEmail)`
    width: 24px;
    height: 24px;
    color: var(--gray);
`