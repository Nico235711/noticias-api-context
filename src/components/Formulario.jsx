import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material"
import { useNoticias } from "../hooks/useNoticias"

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

  const { categoria, handleChangeCategoria } = useNoticias()

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select
          label="Categoría"
          value={categoria}
          onChange={handleChangeCategoria}
        >
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