import { Grid, Typography, Pagination, Stack } from "@mui/material"
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
      
      <Grid container spacing={3}>
        {
          noticias?.map(noticia => (
            <Noticia noticia={noticia} key={noticia.url} />
          ))
        }
      </Grid>

      <Stack spacing={2} marginY={3} justifyContent="center" alignItems="center">
        <Pagination count={} color="primary" />
      </Stack>

    </>
  )
}

export default ListadoNoticias