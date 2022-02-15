import { 
    Header, 
    Section, 
    Title,
    SubTitle,
    DiscordLogo,
    Input,
    InputTitle,
    LoginBtn,
    Container
} from "./styles"

import logo from "../../../../images/discordlogo.svg"
import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useUser } from "../../hooks/useUser"


export const LoginForm = () => {
    const [badLogin, setBadLogin] = useState<boolean>(false)
    const [badPass, setBadPass] = useState<boolean>(false)
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const {setName} = useUser()
    const navigate = useNavigate()
   
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
            console.log(login + ' -- ' + password)
            setName(login)
            navigate("/Discord-Clone/Channels")            
        }       
    }

    return (
        <Container>            
            <Header>       
                <DiscordLogo src={logo}/>             
                <Title>Boas-vindas de volta!</Title>
                <SubTitle>Estamos muito animados em te ver novamente!</SubTitle>
            </Header>
            <Section onSubmit={handleSubmit}>
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
                    maxLength={45}   
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
                    maxLength={45}              
                />

                <LoginBtn onClick={()=>{
                    
                }}>Entrar</LoginBtn>
            </Section>
        
        </Container>
    )
}