import QRcodeSVG from "../../../../images/qr-code.svg"
import { QRcode, SubTitle, Title, Container } from "./styles"

export const LoginQrCode = () => {
    return (
        <Container>
            <a href="https://github.com/matheus55391/Discord-Clone" target="_blank" rel="meugit">
                <QRcode src={QRcodeSVG}/>
            </a>
            <Title>Acesse o projeto com o Código QR</Title>
            <SubTitle>Escaneie isto com a <strong>câmera do seu smartphone</strong> para acessar o repositório do projeto.</SubTitle>
        </Container>
    )
}