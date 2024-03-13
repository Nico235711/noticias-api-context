import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material"

const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select label="Categoría">
          {
            CATEGORIAS?.map(categoria => (
              <MenuItem
                value={categoria.value}
                key={categoria.value}
              >
                {categoria.label}
              </MenuItem>
            ))
          }
        </Select>

        <Box sx={{
          marginTop: 1
        }}>
          <Button variant="contained" fullWidth>Buscar Noticias</Button>
        </Box>
      </FormControl>
    </form>
  )
}

export default Formulario