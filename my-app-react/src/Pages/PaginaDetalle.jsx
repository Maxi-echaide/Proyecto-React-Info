import { Container } from "@mui/system"
import { useState } from "react"
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Buscador from "../Components/Buscador/Buscador"
import Loading from "../Components/Loading/Loading"
import  { ListaNoticias } from "../Components/Noticias/Noticias"
import Paginador from "../Components/Paginacion/Paginacion"
import { getListadoNoticias, getNoticia } from "../Services/noticias"


const PaginaDetalle = () => {

        const [noticia, setNoticia]= useState()
        const {id} = useParams()
        useEffect(()=>{
            if (id){
                getNoticiaDelServicio()
            }
            

        },[id])

        const getNoticiaDelServicio = async () =>{
            const noti = await getNoticia(id)
            console.log(noti)
            setNoticia(noti)
        }
        return <Container maxWidth = "sm">
                
                aca va el detalle {id}
                
                </Container>
    
           
    
}

export default PaginaDetalle