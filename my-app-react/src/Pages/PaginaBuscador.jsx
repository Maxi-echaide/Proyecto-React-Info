import { Container } from "@mui/system"

import Buscador from "../Components/Buscador/Buscador"
import Loading from "../Components/Loading/Loading"
import Noticias, { ListaNoticias } from "../Components/Noticias/Noticias"
import Paginador from "../Components/Paginacion/Paginacion"

const BuscadorNoticias = () => {

    
    
    return <Container maxWidth = "sm">
                <Buscador />
                <Loading/>
                <Noticias/>
                <ListaNoticias/>
                <Paginador/>
            </Container>
    
           
    
}

export default BuscadorNoticias