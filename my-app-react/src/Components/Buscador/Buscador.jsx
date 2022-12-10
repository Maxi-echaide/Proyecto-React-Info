import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useState } from "react"
import SearchIcon from '@mui/icons-material/Search';



const Buscador = ({onBuscar}) => {
    const [criterioBusqueda, SetCriteriobusqueda] = useState("")
    
    return (
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar noticias"
            inputProps={{ 'aria-label': 'search google maps' }}
            value = {criterioBusqueda}
            onChange = {(e) => {SetCriteriobusqueda(e.target.value)}}
          />
          <IconButton 
                type="button" 
                sx={{ p: '10px' }} 
                aria-label="search"
                onClick = {() => {
                    onBuscar (criterioBusqueda)
                }}       
                >
                   
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            
          </IconButton>
        </Paper>
      )
}

export default Buscador;