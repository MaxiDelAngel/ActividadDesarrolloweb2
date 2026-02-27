import { useEffect, useState } from 'react'
import type { Pokemon } from '../types'

const usePokemons = () => {
    //manejo de estado
    //const [pokemons,setPokemons] = useState(POKEMON_MOCK)

    const [pokemons,setPokemons] = useState<Pokemon[]>([])

    const traerPokemons = async () => {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            const data = await response.json()
            const listadoReal = data.results.map((p:any, index:number) => ({
                id: index + 1,
                nombreBase: p.name,
                nombreEvo: p.name + " Evo",
                imgBase: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                imgEvo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                descripcion: "Pokemon Tipo Desconocido",
                estado: false
            }))
            setPokemons(listadoReal)
        }
        catch(error){
            console.error('Error al traer los pokemones', error)
        }
    }

    useEffect(() => {
        traerPokemons()
    }, [])

    //manejo de logica
    const evolucionar = (id:number) => { // los tres puntos son el operador spread, que permite copiar las propiedades de un objeto a otro
        setPokemons(prev => prev.map(p=>p.id===id?{...p, estado: !p.estado}:p)) //Actualiza el estado del pokemon con el id correspondiente, invirtiendo su estado actual
    }

    return { pokemons, evolucionar }
}

export default usePokemons