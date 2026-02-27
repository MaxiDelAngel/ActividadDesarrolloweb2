import { charizard, charmander } from '../assets'
import type { Pokemon } from '../types'

const POKEMON_MOCK: Pokemon[] = [
    {
      id:1,
      nombreBase:"Charmander",
      nombreEvo:"Charizard",
      imgBase: charmander,
      imgEvo: charizard,
      descripcion:"Pokemon Tipo Fuego",
      estado: false
    },
    {
      id:2,
      nombreBase:"Bulbasaur",
      nombreEvo:"Venusaur",
      imgBase: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      imgEvo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      descripcion:"Pokemon Tipo Planta",
      estado: false
    },
    {
      id:3,
      nombreBase:"Squirtle",
      nombreEvo:"Blastoise",
      imgBase: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      imgEvo: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      descripcion:"Pokemon Tipo Agua",
      estado: false
    }
]

export default POKEMON_MOCK;