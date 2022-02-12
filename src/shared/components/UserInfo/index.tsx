
import { Container, ImgBox, UserInfoBox, UserPicture } from "./styles"
export const UserInfo = () =>{

    return(
        <Container>
        
            <ImgBox>
                <UserPicture src="https://grupowhats.xyz/wp-content/uploads/2019/10/grupos-whats.jpg"/>
            </ImgBox>
            <UserInfoBox>
                Meguinha
            </UserInfoBox>
        </Container>
    )

}