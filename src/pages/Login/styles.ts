import styled from "styled-components";
import background from "../../../public/images/background.png"

type InputProps = {
    bad: boolean;
}

//NOTA PARA MUDAR O NOME DOS CAMPOS FICOU MT FEIO KKKK

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
    font-size: 32px;
    margin: 0px 0px 8px;
    color: #ffffff;

`
export const SubTitle = styled.p`
    color: #B9BBBE;
    font-size: 16px;
`

export const BoxSection = styled.form`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 10px 25px 25px 25px;
    color: #fff;
    width: 100%;
    height: 100%;

`

export const InputTitle = styled.p<InputProps>`
    font-size: 14px;
    margin: 20px 0px 10px 0px;
    font-weight: bold;
    padding-left: 4px;
    color: ${props => props.bad? 'red' : '#B9BBBE' };
    
`

export const Input = styled.input<InputProps>`
    background-color: #2f3136;
    border: 1px solid ${props => props.bad? 'red' : '#202225' };
    border-radius: 4px;
    height: 48px;
    color: #fff;
    padding: 10px;
    &:focus {
        border: 1px solid ${props => props.bad? 'red' : '#202225' };
    }

`

export const LoginBtn = styled.button`
    cursor: pointer;
    background-color: #5865F2;    
    margin-top: 30px;
    border-radius: 4px;
    height: 50px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    transition: background-color 0.2s;
    &:hover{
        background-color: #404EED;
        
    }
`


