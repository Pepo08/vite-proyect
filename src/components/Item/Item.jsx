
import { Link } from "react-router-dom";
import "./style.css"

const Item = ({id, title, price, description, image}) =>{

    return(
        <div className="productos">
            <img src={image} className="img" alt="" />
            <h1 className="titulo">{title}</h1>
            <p className="precio">{price}</p>
            <p className="descripcion">{description}</p>
            <Link to={`/producto/${id}`} className="ver">Ver producto</Link>
        </div>
    )
}

export default Item;