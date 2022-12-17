import { Container } from "@mui/system"
import { useState } from "react"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Buscador from "../Components/Buscador/Buscador"

import Loading from "../Components/Loading/Loading"
import  { ListaNoticias } from "../Components/Noticias/Noticias"
import Paginador from "../Components/Paginacion/Paginacion"
import { getListadoNoticias } from "../Services/noticias"

const PaginaNoticias = () => {
    const [noticias, setNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

   useEffect(()=>{
        if(searchParams.get("query")){
            buscarNoticia(pagina)
        }
   },[searchParams,pagina])


    const buscarNoticia = async () => {
        setIsLoading(true);
        const { articles: notis, totalResults } = await getListadoNoticias(searchParams.get('query'), pagina);
        
        setNoticias(notis);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda});
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };

    

     
        return <Container maxWidth = "sm">
                <Buscador onBuscar = {onBuscar} />
                
                {isLoading && <Loading/>}
                {noticias&& <ListaNoticias noticias ={noticias} />}
                {noticias&& <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} />}
            </Container>
    
           
    
}

export default PaginaNoticias