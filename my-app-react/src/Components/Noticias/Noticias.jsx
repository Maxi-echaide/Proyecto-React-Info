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

  const {DateTime} = require("luxon");
  const getPublished = (date) => {
    let day = DateTime.fromISO(date).setZone("UTC").toFormat("dd-MM-yyyy")
    let hour = DateTime.fromISO(date).setZone("UTC").toFormat("hh:mm")
    return `Publicado el: ${day} a las ${hour} hs`
  }
  return (
    
    <Card sx={{ maxWidth: 408 }} onClick={onCardClick}  	 >
      
      <CardHeader 
        
        
        title={noticia.title} 
        
      />
      <CardMedia
        
        component="img"
        height="194"
        image={noticia.urlToImage}
        alt=""
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
        {noticia.description}
        
        </Typography>
      </CardContent >
      <Typography  paragraph>{getPublished(noticia.publishedAt)} 
      
      </Typography>
      
    
      
    </Card>
  );
}


export const ListaNoticias = ({noticias}) => {
    
    return (<section style= {{
      
      marginTop: '20px',
      

    }}>{
      noticias.map((noticia) =>{
        return <Noticias noticia ={noticia}/>
    })}

    </section>)
    
        
}

export default Noticias
