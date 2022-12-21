import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';



const Buscador = ({onBuscar}) => {
    const [criterioBusqueda, SetCriteriobusqueda] = useState("")
   

      
    
    
    return (
      
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginTop: "75px" }}
        >
          
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar noticias"
            inputProps={{ 'aria-label': 'Buscar noticias' }}
            value = {criterioBusqueda}
            onChange = {(e) => {SetCriteriobusqueda(e.target.value)}}
            role="searchbox"
          />
          <IconButton 
                type="button" 
                sx={{ p: '10px', alignItems: "center" }} 
                aria-label="search"
                onClick = {() => {
                  if(criterioBusqueda.length > 2) {
                    onBuscar(criterioBusqueda)
                  }
                }}
                role="botonBuscar"

                >
                  
            <SearchIcon />
          </IconButton>
          
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            
          </IconButton>
        </Paper>
      )
}

export default Buscador;