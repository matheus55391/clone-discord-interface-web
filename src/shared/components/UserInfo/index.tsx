
import { useUser } from "../../hooks/useUser"
import { Container, ImgBox, UserInfoBox, UserPicture } from "./styles"
export const UserInfo = () =>{
    const {name, img} = useUser()
    return(
        <Container>
        
            <ImgBox>
                <UserPicture src={`${img}`}/>
            </ImgBox>
            <UserInfoBox>
                {`${name}`}
            </UserInfoBox>
        </Container>
    )

}