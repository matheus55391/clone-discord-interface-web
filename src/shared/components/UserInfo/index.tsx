
import { useUser } from "../../hooks/useUser"
import { Container, ImgBox, UserInfoBox, UserPicture } from "./styles"
export const UserInfo = () =>{
    const {user} = useUser()
    return(
        <Container>
        
            <ImgBox>
                <UserPicture src={`${user.img}`}/>
            </ImgBox>
            <UserInfoBox>
                {`${user.name}`}
            </UserInfoBox>
        </Container>
    )

}