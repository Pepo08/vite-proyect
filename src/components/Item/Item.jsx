
import { Link } from "react-router-dom";

const Item = ({id, title, price, description, image}) =>{

    const handleClick = (event) => {
        //parametro event captura el evento sintetico
        //Detiene el comportamiento por default
        event.preventDefault()
        // Detiene la propagacion de los eventos por defaults de sus padres
        event.stopPropagation()
    
        console.log(id, nombre, precio , descripcion)
    }
    return(
        <div>
            <img style={{height: "200px"}} src={image} alt="" />
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{description}</p>
            <Link to={`/producto/${id}`}>Ver producto</Link>
        </div>
    )
}

export default Item;