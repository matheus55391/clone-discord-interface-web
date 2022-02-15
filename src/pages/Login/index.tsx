import { 
    FormBox, 
    LoginBody, 
    BoxHeader, 
    BoxSection, 
    Title,
    SubTitle,
    DiscordLogo,
    Input,
    InputTitle,
    LoginBtn
} from "./styles"

import logo from "../../../public/images/discordlogo.svg"
import { Navigate } from "react-router-dom"
import React, { useState } from "react"

export const Login = () => {
    const [badLogin, setBadLogin] = useState<boolean>(false)
    const [badPass, setBadPass] = useState<boolean>(false)

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(!login){
            setBadLogin(true)
        }
        if(!password){
            setBadPass(true)
        }

        if(login && password){
            setLogin('')
            setPassword('')
        }       
    }

    return(

        <LoginBody>
            <FormBox>
                <DiscordLogo src={logo}/>
                <BoxHeader>                    
                    <Title >Boas-vindas de volta!</Title>
                    <SubTitle>Estamos muito animados em te ver novamente!</SubTitle>
                </BoxHeader>
                <BoxSection onSubmit={handleSubmit}>
                    <InputTitle bad={badLogin}>LOGIN {badLogin? '- Este campo é obrigatório': ''}</InputTitle>
                    <Input 
                        autoFocus
                        type="text"
                        value={login}
                        onChange={(e)=>{
                            
                            setLogin(e.target.value)
                            setBadLogin(false)
                        }}
                        bad ={badLogin}
                    />

                    <InputTitle bad={badPass}>SENHA {badPass? '- Este campo é obrigatório': ''}</InputTitle>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e)=> { 
                            setPassword(e.target.value)                            
                            setBadPass(false)
                        }}   
                        bad ={badPass}                 
                    />

                    <LoginBtn onClick={()=>{
                        <Navigate to="/Discord-Clone/channels"/>
                    }}>Entrar</LoginBtn>
                </BoxSection>
            </FormBox>
            
        </LoginBody>

    )
}