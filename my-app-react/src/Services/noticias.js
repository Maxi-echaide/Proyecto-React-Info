// apikey = 6946c7e33b384dc39472f5ba2fc57f4a
// https://newsapi.org/v2/everything?q=Apple&from=2022-12-10&sortBy=popularity&apiKey=API_KEY

const API_KEY ="6946c7e33b384dc39472f5ba2fc57f4a"
const OMDB_API = "https://newsapi.org/v2/everything/"

export const getListadoNoticias = async (criterioBusqueda) => {
    const respuesta = await fetch (`${OMDB_API}?q=${criterioBusqueda}&apikey=${API_KEY}`)
    const noticias = await respuesta.json()
    return noticias
}

