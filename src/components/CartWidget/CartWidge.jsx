import Contador from "../Contador/Contador";
import "./styles.css"
import carrito from "./carrito-compras.png"

const CartWidge = () => {

    return(
        <div className="carro">
            <img src={carrito} alt="carrito"  className="carrito"/>
            <Contador/>
        </div>
    );
}

export default CartWidge;