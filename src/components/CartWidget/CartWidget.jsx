import Contador from "../Contador/Contador";
import "./styles.css"
import carrito from "./carrito-compras.png"

const CartWidget = () => {

    return(
        <div className="carro">
            <img src={carrito} alt="carrito"  className="carrito"/>
            <Contador/>
        </div>
    );
}

export default CartWidget;