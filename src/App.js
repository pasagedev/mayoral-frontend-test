import { useEffect, useState } from 'react'
import './App.css'
import { Cards } from './components/Cards.js'
import { Buscador } from './components/Buscador'
import articulosService from './services/articulos'

function App () {
  const [filter, setFilter] = useState('')
  const [articulos, setArticulos] = useState([])
  useEffect(() => {
    articulosService
      .getArticulos()
      .then(data => setArticulos(data))
  }, [])

  const handleFilterChange = event => setFilter(event.target.value)

  // remuve espacios en blanco y separa las palabras de la busqueda
  const keyWords = filter.trim().split(/\s+/)
  // normaliza un string para eliminar tildes y convierte a minúsculas
  const sanitaze = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  // filtra los artículos que coincidan con todas las palabras claves
  const filteredCards = articulos.filter(card => {
    return keyWords.every(keyWord => sanitaze(card.nombre).search(sanitaze(keyWord)) !== -1)
  })

  return (
    <div className="App">
      <Buscador handleFilterChange={handleFilterChange} value={filter}/>
      <Cards cards={filteredCards}/>
    </div>
  )
}

export default App
