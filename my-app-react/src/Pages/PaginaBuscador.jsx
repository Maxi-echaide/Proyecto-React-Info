import Buscador from "../Components/Buscador/Buscador"
import Loading from "../Components/Loading/Loading"
import Noticias, { ListaNoticias } from "../Components/Noticias/Noticias"
import Paginador from "../Components/Paginacion/Paginacion"

const BuscadorNoticias = () => {
    return <section>
        <Buscador/>
        <Loading/>
        <Noticias/>
        <ListaNoticias/>
        <Paginador/>

    </section>
           
    
}

export default BuscadorNoticias