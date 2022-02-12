import styled from "styled-components"


export const Container = styled.div`
    @media screen and (max-width: 600px){
        display: none;
    }
    background-color: #292B2F;  
    grid-area: UI;
    display: flex;
    flex-direction: row;    
    align-items: center;

`

export const ImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0px 8px 0px 8px;
    padding: 5px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: var(--symbol);
    overflow:hidden;
`

export const UserPicture = styled.img`
    width: 140%;
    height: 140%;
`
export const UserInfoBox = styled.div`
    color: var(--white);
`
