import styled from "styled-components";

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;

    h3 {
        font-weight: 700;
        font-size: 1.1rem;
        margin-right: 10px;
    }
`

export const Input = styled.input`
    background-color: #fff;
    opacity: .8;
    border-radius: 10px;
    border: 1px solid #fff;
    outline: none;
    padding: 10px;
    width: 100%;
    height: 100%;
`

export const ContenedorScroll = styled.article`
    display: flex;
    width: ${props => (props.size=="full" ? "100%" : "90%")};
    white-space: nowrap;
    overflow-x: auto;
    justify-content: ${props => (props.$alineado=="centro" ? "center" : "auto")};s

    > div { margin-top: 10px; }

    @media (max-width: 800px) { width: 100%; }
`