import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
    
}) => {
    const cambioPagina = (_e, pagina)=>{
        onChange(pagina)
    }
    return (
    
        <Pagination 
            count={cantidadPaginas} 
            color="secondary" 
            onChange={cambioPagina}
            />
    )
}


export default Paginador