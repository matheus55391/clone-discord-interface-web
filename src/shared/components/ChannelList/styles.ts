import styled from "styled-components";

export const Container = styled.div`

    grid-area: CL;
    
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    max-height: 100vh;
    overflow-y: scroll;
    width: 100%;
    ::-webkit-scrollbar {        
        width: 5px;   
    }
    ::-webkit-scrollbar-thumb {
        
        background-color: #282a2d;
        border-radius: 15px;
    }
`



export const ChatButton = styled.button`
 

    text-align: left;
    color: gray;
    margin: 5px 10px 1px 10px;
    padding: 5px 5px;
    cursor: pointer;   
    background-color: transparent;
    font-weight: bold;
    border-radius: 3px;
    height: 34px;
    font-size : 100%;
    &:hover{
        background-color: #36393F;
        color: #FFFFFF;
    }

`