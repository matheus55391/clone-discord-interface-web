import styled from "styled-components";
import background from "../../../images/background.png"

export const LoginBody = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    background-image: url(${background});
    background-size: 100% 100%;

`
export const Main = styled.div` 

    display: flex;
    flex-direction: row;
    gap: 24px;
    //align-items: center;
    background-color: #36393F;

    padding: 34px ;    

    @media (max-width: 500px){
        width: 100vw;
        height: 100vh;
    }
    @media (min-width: 501px){
        border-radius: 8px;
        width: 600px;
        height: 410px;
    }
    @media (min-width: 901px){
        width: 800px;
        
    }
    
`

export const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }

`

export const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    align-items: center;
    text-align: center;
    @media (max-width: 900px){
        display: none;
    }

`