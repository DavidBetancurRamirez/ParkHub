import styled from "styled-components";
import colores from "../styles/colores";

const Contenedor = styled.div`
    height: 60px;
    display: flex;

    @media (max-width: 700px) {
        height: 40px;
    }
`;
const Header = styled.button`
    background-color: ${props => (props.$inLogin ? colores.moradoClaro : colores.oscuro)};
    cursor: ${props => (props.$inLogin ? "auto" : "pointer")};
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 10px 10px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #fff;

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;


const HeaderSesion = ({ inLogin, cambiarInLogin }) => {
    return (
        <Contenedor>
            <Header $inLogin={inLogin} onClick={() => cambiarInLogin(true)}>Iniciar Sesión</Header>
            <Header $inLogin={!inLogin} onClick={() => cambiarInLogin(false)}>Registrarse</Header>
        </Contenedor>
    )
}

export default HeaderSesion