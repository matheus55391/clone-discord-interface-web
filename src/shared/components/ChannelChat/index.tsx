import React, { useState } from "react"
import { ChannelMessage} from ".."
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"



export const ChannelChat = () =>{
    const [messageContent, setMessageContent] = useState<string>("")
    
    const handleMessageText = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMessageContent(e.target.value)        
    }

    const eventInputEnter = (key: React.KeyboardEvent<HTMLInputElement>) =>{
        if(key.code === "Enter" && messageContent) setMessageContent("")
    }


    return(
        <Container>
            <Messages>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
                <ChannelMessage author="Meguinha" date="21/06/2020" content="boa tarde bruna"/>
            </Messages>
            <InputWrapper>
                
                <Input value={messageContent} onChange={handleMessageText} onKeyPress={eventInputEnter} type="text"  placeholder="Conversando no chat"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
}