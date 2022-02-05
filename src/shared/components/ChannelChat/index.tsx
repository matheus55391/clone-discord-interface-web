import React, { useEffect, useRef } from "react"
import { ChannelMessage} from ".."
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles"

export const ChannelChat = () =>{
    const fieldRef = useRef<HTMLDivElement>() 

    useEffect(() => {

        const div = fieldRef.current
        console.log(fieldRef)
        if(div){
            div.scrollTo({top: 0, behavior: 'smooth'})
        }        
      }, [fieldRef]);

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
                <Input type="text" placeholder="Conversando no chat">
                    
                </Input>
                <InputIcon></InputIcon>
            </InputWrapper>
        </Container>
    )
}