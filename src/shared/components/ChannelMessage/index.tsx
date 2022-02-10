import { Container, Avatar, Message, Header, Content } from './styles'

export interface IChannelMessage {
    author: string;
    date?: string;
    content: string;
    hasMention?: boolean;
    isBot?: boolean;
}

export const ChannelMessage = (props: IChannelMessage) => {
    return(
        <Container>
            <Avatar/>
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