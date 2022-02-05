import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 16px;
    margin-right: 4px;
    background-color: transparent;
    
    & + div {
        margin-top: 13px;
    }
`
export const Avatar = styled.div`

    width: 40px;
    height: 40px;

    background: #343639;
    border-radius:50%;

`
export const Message = styled.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    margin-left: 17px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    > strong {
        color: var(--white);
        font-size: 16px;
    }
    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
    > time {
        margin-left: 6px;
        color: var(--gray);
        font-size: 10px
    }
`
export const Content = styled.div`
    text-align: left;
    font-size: 14px;
    color: var(--white);

` 