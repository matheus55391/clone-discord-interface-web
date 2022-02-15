import styled  from "styled-components"

type InputProps = {

    bad: boolean;
}

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    align-items: center;
    @media (max-width: 900px){
        width: 100%;
    }
`

export const DiscordLogo = styled.img`

    padding-bottom: 30px;
    @media (min-width: 501px){
        display: none;
    }
`

export const Title = styled.h3`

    font-size: 26px;
    margin: 0px 0px 8px;
    color: #ffffff;
`
export const SubTitle = styled.p`

    color: #B9BBBE;
    font-size: 16px;
`

export const Section = styled.form`

    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 10px 25px 25px 25px;
    color: #fff;
    width: 100%;
    height: 100%;
`

export const Header = styled.div`

    text-align: center;
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
        border: 1px solid ${props => props.bad? 'red' : '#007FFF' };
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
