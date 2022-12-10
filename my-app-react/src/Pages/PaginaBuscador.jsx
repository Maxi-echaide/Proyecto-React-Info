import { Container } from "@mui/system"
import { useState } from "react"

import Buscador from "../Components/Buscador/Buscador"
import Loading from "../Components/Loading/Loading"
import  { ListaNoticias } from "../Components/Noticias/Noticias"
import Paginador from "../Components/Paginacion/Paginacion"
import { getListadoNoticias } from "../Services/noticias"

const BuscadorNoticias = () => {
    const [noticias, setNoticias] = useState()
    const[isLoading, setIsLoading] = useState(false)

    const onBuscar = async (criterioBusqueda) => {
        setIsLoading(true)
        const {articles: notis} = await getListadoNoticias(criterioBusqueda)
        setNoticias(notis)
        setIsLoading(false)
    }   

    if(isLoading){
        return (
            <Container maxWidth = "sm">
                <Loading/>
            </Container>
    )}

     console.log (noticias)
    return <Container maxWidth = "sm">
                <Buscador onBuscar = {onBuscar} />
                
                {isLoading && <Loading/>}
                {noticias&& <ListaNoticias/>}
                {noticias&& <Paginador/>}
            </Container>
    
           
    
}

export default BuscadorNoticias