import { Grid, Typography } from "@mui/material"
import { useNoticias } from "../hooks/useNoticias"
import Noticia from "./Noticia";


const ListadoNoticias = () => {

  const { noticias } = useNoticias()

  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        marginY={5}
        align="center"
      >
        Últimas Noticas
      </Typography>
      
      <Grid>
        {
          noticias?.map(noticia => (
            <Noticia noticia={noticia} key={noticia.url} />
          ))
        }
      </Grid>
    </>
  )
}

export default ListadoNoticias