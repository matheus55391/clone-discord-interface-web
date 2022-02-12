import React, { useEffect, useState } from "react"
import { ChannelMessage, IChannelMessage } from ".."
import { useUser } from "../../hooks/useUser"
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"


export const ChannelChat = () =>{
    const [messageContent, setMessageContent] = useState<string>("")
    const [messageList, setMessageList] = useState<IChannelMessage[]>([])
    const {name, img} = useUser()
    
    const handleMessageText = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMessageContent(e.target.value)        
    }
    
    const eventInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) =>{

        if(event.key === "Enter" && messageContent) {  
            setMessageList([...messageList, {
                author: `${name}`,
                avatar: `${img}`,
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
                                <ChannelMessage avatar={v.avatar} author={v.author} date="21/06/2020" content={v.content} key={i}/>
                            )
                        })
                    }
            </Messages>
            <InputWrapper>
                
                <Input value={messageContent} onChange={handleMessageText} onKeyUp={eventInputEnter} type="text"  placeholder="Conversando no chat"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
}