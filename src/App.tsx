import './App.css'
import {Title} from "./components"
import {Card} from "./components"
import { usePokemons } from './hooks'


function App() {
  const { pokemons, evolucionar} = usePokemons()

  return (
    <>
      <Title texto="Pokemons" />
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
