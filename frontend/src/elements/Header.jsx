import styled from "styled-components";
import colores from "../styles/colores";
import LogoB from "../images/logoB.png";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Contenedor = styled.div`
    background-color: ${colores.moradoClaro};
    height: 100px;
    width: 100vw;
    padding: 20px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }
`
const Navegar = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    height: 100%;
    cursor: pointer;
`
const Botones = styled.div`
    display: flex;
    margin-left: 20px;

    p {
        margin-right: 15px;
        cursor: pointer;
        color: ${colores.gris};
    }

    p.active {
        color: white;
    }

    @media (max-width: 800px) {
        display: none;
    }
`
const Usuario = styled.div`
    display: flex;
    align-items: center;
    color: ${colores.gris};

    svg {
        height: 40px;
        width: 40px;
        margin-left: 5px;
        cursor: pointer;
        color: #fff;
    }

    @media (max-width: 800px) {
        display: none;
    }
`
const BotonMenu = styled.div`
    @media (min-width: 800px) {
        display: none;
    }

    svg {
        width: 30px;
        height: 30px;
        color: #fff;
        cursor: pointer;
    }
`


const Header = ({ paginaActual }) => {    
    paginaActual = "principal"

    const paginaActiva = (nombre) => {
        return paginaActual.toLowerCase()===nombre ? "active" : ""
    }

    return (
        <Contenedor>
            <BotonMenu>
                <GiHamburgerMenu />
            </BotonMenu>
            <Navegar>
                <Logo src={LogoB} alt="Logo ParkHub" />
                <Botones>
                    <p className={paginaActiva("principal")}>Principal</p>
                    <p className={paginaActiva("reservar")}>Reservar</p>
                    <p className={paginaActiva("historial")}>Historial</p>
                    <p className={paginaActiva("organizacion")}>Organización</p>
                </Botones>
            </Navegar>
            <Usuario>
                <p>Anonymous</p>
                <FaUserCircle />
            </Usuario>
        </Contenedor>
    )
}

export default Header;