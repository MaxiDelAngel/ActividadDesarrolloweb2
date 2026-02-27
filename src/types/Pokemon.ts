// PLANTILLA DE LOS ATRIBUTOS DE LOS POKEMONES
export type Pokemon = {
    id: number,
    nombreBase: string,
    nombreEvo: string,
    imgBase: string,
    imgEvo: string,
    descripcion: string,
    estado: boolean
}