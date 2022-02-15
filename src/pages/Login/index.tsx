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

export const Login = () => {
    return(

        <LoginBody>
            <FormBox>
                <DiscordLogo src={logo}/>
                <BoxHeader>                    
                    <Title>Boas-vindas de volta!</Title>
                    <SubTitle>Estamos muito animados em te ver novamente!</SubTitle>
                </BoxHeader>
                <BoxSection>
                    <InputTitle>LOGIN</InputTitle>
                    <Input/>
                    <InputTitle>SENHA</InputTitle>
                    <Input/>

                    <LoginBtn>Entrar</LoginBtn>
                </BoxSection>
            </FormBox>
            
        </LoginBody>

    )
}

        // <div>
        //     <div>
        //         <h3>Boas-vindas de volta!</h3>
        //         <p>Estamos muito animados em te ver novamente!</p>
        //     </div>

        //     <formBox>
        //         <p>Usuario</p>
        //         <input type='text'/>
        //         <p>Senha</p>
        //         <input type='password'/>
        //         <button>Entrar</button>
        //     </formBox>

        // </div>