import './App.css'
import {Title, Card, Search} from "./components"
import { usePokemons } from './hooks'


function App() {
  const { pokemons, evolucionar, setFiltro } = usePokemons()

  return (
    <>
      <Title texto="Pokemons" />
      <Search alEscribir={(valor) => setFiltro(valor)} />
      {
        pokemons.map(pokemon => (
          <Card 
            key={pokemon.id}
            estado={pokemon.estado}
            imagen={pokemon.estado ? pokemon.imgEvo : pokemon.imgBase} 
            titulo={pokemon.estado ? pokemon.nombreEvo : pokemon.nombreBase}
            descripcion={pokemon.descripcion}
            contenido={pokemon.estado ? "Revertir Evolución" : "Evolucionar"}
            accion={() => evolucionar(pokemon.id)} //Al hacer click en el span, se llama a la función evolucionar con el id del pokemon correspondiente
          />
        ))
      }
    </>
  )
}

export default App
