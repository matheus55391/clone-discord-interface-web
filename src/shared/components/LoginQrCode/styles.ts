import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    align-items: center;
    text-align: center;
    @media (max-width: 900px){
        display: none;
    }
`

export const QRcode = styled.img`
    
    max-width: 158px;
    margin-bottom: 15px;
    width: 176px;
    height: 176px;
`

export const Title = styled.h3`

    font-size: 22px;
    color: #FFFFFF;
    padding: 0px 5px 25px;
`

export const SubTitle = styled.p`

    color: #B9BBBE;
    font-size: 14px;
`