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
    const[cantidadPaginas, setCantidadPaginas] = useState(1)
    const [paginaActual, setPaginaActual] = useState(1)
    
     
    const[criterioBusqueda, setCriteriobusqueda] = useState("")

    const onBuscar = async (criterioBusqueda) => {
        setIsLoading(true)
        const {articles: notis, totalResults} = await getListadoNoticias(criterioBusqueda, paginaActual)
        setCriteriobusqueda(criterioBusqueda)
        setNoticias(notis)
        setCantidadPaginas(Math.ceil(parseInt(totalResults/10)))
        setIsLoading(false)
       
        
    }   

    const onCambioPagina = (pagina) => {
            
            setPaginaActual(pagina)
            
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
                {noticias&& <ListaNoticias noticias ={noticias}/>}
                {noticias&& <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} />}
            </Container>
    
           
    
}

export default BuscadorNoticias