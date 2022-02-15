import styled from "styled-components";
import background from "../../../public/images/background.png"

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
export const FormBox = styled.div` 

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #36393F;

    padding: 24px 20px ;    

    @media (max-width: 500px){
        width: 100vw;
        height: 100vh;
    }
    @media (min-width: 501px){
        border-radius: 8px;
        width: 600px;
        height: 400px;
    }
    
`

export const DiscordLogo = styled.img`

    padding-bottom: 30px;
    @media (min-width: 501px){
        display: none;
    }

`



export const BoxHeader = styled.div`
    text-align: center;
`

export const Title = styled.h3`
    font-size: 24px;
    margin: 0px 0px 8px;
    color: #ffffff;

`
export const SubTitle = styled.p`
    color: #B9BBBE;
    font-size: 16px;
`

export const BoxSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 10px 25px 25px 25px;
    color: #fff;
    width: 100%;
    height: 100%;

`
export const InputTitle = styled(SubTitle)`
    font-size: 14px;
    margin: 20px 0px 10px 0px;
    font-weight: bold;
    padding-left: 4px;
    
`
export const Input = styled.input`
    background-color: #2f3136;
    border: 1px solid #202225;
    border-radius: 2px;
    height: 48px;
    color: #fff;
    padding: 10px;


`

export const LoginBtn = styled.button`
    
    background-color: #5865F2;
    
    margin-top: 30px;
    border-radius: 4px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;

`


