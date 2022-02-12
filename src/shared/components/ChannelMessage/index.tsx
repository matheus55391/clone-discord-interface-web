import { Container, Avatar, Message, Header, Content } from './styles'

export interface IChannelMessage {
    author: string;
    avatar: string;
    date?: string;
    content: string;
    hasMention?: boolean;
    isBot?: boolean;
}

export const ChannelMessage = (props: IChannelMessage) => {
    return(
        <Container>
            <Avatar src={props.avatar}/>
            <Message>
                <Header>
                    <strong>{props.author}</strong>
                    {props.isBot && <span>Bot</span>}
                    <time>{props.date}</time>
                </Header>
                <Content>
                    {props.content}
                </Content>
            </Message>
        </Container>
    )
}