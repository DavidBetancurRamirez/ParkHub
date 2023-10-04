import Layout from "./Layout"
import Carrusel from "../elements/Carrusel";
import Aliados from "../elements/Aliados";

const Principal = () => {
  return (
    <Layout paginaActual="Principal">
      <Carrusel />
      <Aliados />
    </Layout>
  )
}

export default Principal;
