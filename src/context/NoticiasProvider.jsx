import axios from "axios"
import { createContext, useEffect, useState } from "react"

const NoticiasContext = createContext()

export const NoticiasProvider = ({ children }) => {

  const [categoria, setCategoria] = useState("general")
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    
    const consultarAPI = async () => {
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`

      const { data } = await axios(url)

      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      setPagina(1)
    }
    consultarAPI()
  }, [categoria]);

  useEffect(() => {
    
    const consultarAPI = async () => {
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://newsapi.org/v2/top-headlines?country=ar&page=${pagina}&category=${categoria}&apiKey=${apiKey}`

      const { data } = await axios(url)

      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
    }
    consultarAPI()
  }, [pagina]);

  const handleChangeCategoria = e => {  
    setCategoria(e.target.value)
  }

  const handleChangePagina = (e, valor) => {  
    setPagina(valor)
  }

  return (
    <NoticiasContext.Provider value={{
      categoria,
      handleChangeCategoria,
      noticias,
      pagina,
      totalNoticias,
      handleChangePagina
    }}>
      { children }
    </NoticiasContext.Provider>
  )
}

export default NoticiasContext
