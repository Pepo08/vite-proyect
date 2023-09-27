
import { Link } from "react-router-dom";

const Item = ({id, title, price, description, image}) =>{
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