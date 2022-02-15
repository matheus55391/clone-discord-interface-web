import { 
    LoginBody, 
    Main

} from "./styles"

import { LoginForm } from "../../shared/components"
import { LoginQrCode } from "../../shared/components/LoginQrCode"

export const Login = () => {

    return(

        <LoginBody>
            <Main>
                <LoginForm/>
                <LoginQrCode/>
            </Main>
            
        </LoginBody>

    )
}

//<LoginForm/>