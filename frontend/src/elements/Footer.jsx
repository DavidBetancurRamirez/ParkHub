import styled from "styled-components";
import colores from "../styles/colores";
import Logo from "../images/logoM.png"
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"

const ContenedorFooter = styled.footer`
    background-color: ${colores.oscuro};
    padding: 20px 50px 10px 50px;

    > p {
        color: #fff;
        font-size: 12px;
        width: 100%;
        text-align: center;
    }
`
const Contenedor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dashed ${colores.gris};
    padding-bottom: 20px;
    margin-bottom: 10px;
`
const Info = styled.div`
    img {
        height: 50px;
    }

    p {
        color: #fff;
        font-size: 13px;
        font-weight: lighter;
        width: 350px;
    }
`
const Links = styled.div`
    p {
        color: #fff;
        font-size: 14px;
        font-weight: lighter;
        margin: 5px;
        cursor: pointer;
    }

    p:nth-child(1) {
        color: ${colores.moradoClaro};
        margin-bottom: 5px;
        font-size: 15px;
        font-weight: normal;
        cursor: auto;
    }
`
const Contacto = styled.div`
    p {
        color: ${colores.moradoClaro};
        margin-bottom: 10px;
        font-size: 15px;
        font-weight: normal;
        cursor: auto;
    }

    div {
        display: flex;
    }
`
const RedSocial = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    svg {
        width: 50%;
        height: 50%;
    }
`


const Footer = () => {
    return (
        <ContenedorFooter>
            <Contenedor>
                <Info>
                    <img src={Logo} alt="Logo ParkHub" />
                    <p>Somos Park Hub, tu solución de estacionamiento confiable. Simplificamos la reserva de parqueaderos para que tu día sea más fácil. Encuentra tu espacio sin complicaciones con nosotros.</p>
                </Info>

                <Links>
                    <p>Links útiles</p>
                    <p>Principal</p>
                    <p>Reservar</p>
                    <p>Historial</p>
                    <p>Organización</p>
                </Links>

                <Contacto>
                    <p>Contactenos</p>
                    <div>
                        <RedSocial> <AiOutlineMail /> </RedSocial>
                        <RedSocial> <BsWhatsapp /> </RedSocial>
                        <RedSocial> <AiOutlineInstagram /> </RedSocial>
                    </div>
                </Contacto>

            </Contenedor>
            <p>© Todos los derechos reservados</p>
        </ContenedorFooter>
    )
}

export default Footer;