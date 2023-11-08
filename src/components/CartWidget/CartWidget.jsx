import { Link } from 'react-router-dom';
import cart from './carrito-compras.png'
import "./styles.css"

const CartWidget = () => {

    return(
        <Link to={"../../pages/Cart/Cart"} className='cart'>
            <img src={cart} alt="" className='ftCart' />
            <span className='nro'>0</span>
        </Link>
    );
}

export default CartWidget;