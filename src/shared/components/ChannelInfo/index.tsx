import { ChannelName, Container, MenuIcon, MenuWrapper, TagIcon } from "./styles"

export const ChannelInfo = () =>{
    return(
        <Container>
            <MenuWrapper>
                <MenuIcon/>
            </MenuWrapper>
            <TagIcon/>
            <ChannelName>🤠 bate-papo</ChannelName>
        </Container>
    )
}