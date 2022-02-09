import React, { useState } from "react"
import { ChannelMessage, IChannelMessage } from ".."
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"


export const ChannelChat = () =>{
    const [messageContent, setMessageContent] = useState<string>("")
    const [messageList, setMessageList] = useState<IChannelMessage[]>([])
    
    const handleMessageText = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMessageContent(e.target.value)        
    }
    
    const eventInputEnter = (key: React.KeyboardEvent<HTMLInputElement>) =>{
        if(key.code === "Enter" && messageContent) {  
            setMessageList([...messageList, {
                author: "Fulano",
                date: "08/02/2022",
                content: messageContent,
                hasMention: false,
                isBot: false,
            }])
            setMessageContent("")
        }

    }

    return(
        <Container>
            <Messages>
                    {
                        messageList.map((v, i)=>{
                            return(
                                <ChannelMessage author="Meguinha" date="21/06/2020" content={v.content} key={i}/>
                            )
                        })
                    }
            </Messages>
            <InputWrapper>
                
                <Input value={messageContent} onChange={handleMessageText} onKeyPress={eventInputEnter} type="text"  placeholder="Conversando no chat"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
}