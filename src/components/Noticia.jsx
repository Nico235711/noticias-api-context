import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography
} from "@mui/material"


const Noticia = ({ noticia }) => {

  const { publishedAt, description, title, url, urlToImage, source } = noticia

  return (
    <Grid item xs={12} lg={4}>
      <Card>
        {
          urlToImage && (
            <CardMedia
              component="img"
              alt={`Imagen de la noticia: ${title}`}
              image={urlToImage} 
              height={250}
            />
          )
        }

        <CardContent>
          <Typography variant="body1" color="error">
            { source.name }
          </Typography>

          <Typography variant="h5" component="div">
            { title }
          </Typography>

          {
            description && (
              <Typography variant="body2">
                { description }
              </Typography>
            )
          }
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width="100%"
            align="center"
          >
            Leer Noticias
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia