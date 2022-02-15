import styled from "styled-components"


export const Container = styled.div`
    grid-area: SN;
    background-color: #2F3136;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.1);
    transform: translateY(0px);
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`

export const Text = styled.span`

    color: var(--white);
    font-size: 100%;
    height: 100%;
    width: 100%;
    
    flex-direction: row;
    align-items: center;
    justify-content: left;
    padding-left: 10px;
    padding-right: 10px;
    


`