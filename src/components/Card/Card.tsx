import "./Card.css";

interface CardProps {
    imagen?: string;
    titulo?: string;
    descripcion?: string;
    contenido?: string;
    accion:() => void;
    estado?: boolean;
}

function Card({ imagen, titulo, descripcion, contenido, accion, estado }: CardProps){
    return(
        <>
        <div className={`card ${estado ? 'card-evo' : 'card-normal'}`}>
            <div className="card img">
                <img src={imagen} alt="Card image" />
            </div>
            <div className="card contenido">
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
            <span onClick={accion}>{contenido}</span> 
            </div>
        </div>
        </>
    )
}
//backticks `` para clases dinamicas
export default Card;