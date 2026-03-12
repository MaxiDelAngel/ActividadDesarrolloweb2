import "./Search.css"

interface SearchProps {
    alEscribir: (valor: string) => void
}

export const Search = (props: SearchProps) => {
  return (
    <input
        type="text"
        className="search"
        placeholder="Busca tu pokemon"
        onChange={(e) => props.alEscribir(e.target.value)}
    >
    </input>
  )
}
