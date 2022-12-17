import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';



const Noticias = ({noticia,onChange}) => {
  
  const onCardClick = ()=> {
    onChange (window.open(noticia.url, '_blank'))
  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onCardClick}   >
      
      <CardHeader 
        
        
        title={noticia.title}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={noticia.urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {noticia.description}
        
        </Typography>
      </CardContent>
      <Typography paragraph>{noticia.publishedAt}</Typography>
      
    
      
    </Card>
  );
}


export const ListaNoticias = ({noticias}) => {
    
    return noticias.map((noticia) =>{
        return <Noticias noticia ={noticia}/>
    })
}

export default Noticias
